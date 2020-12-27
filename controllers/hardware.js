/* eslint-disable no-await-in-loop */
/* eslint-disable no-unused-vars */
/* eslint-disable no-underscore-dangle */
/* eslint-disable consistent-return */
const jwt = require('jsonwebtoken');
const NodeGeocoder = require('node-geocoder');

const options = {
  provider: 'google',

  // Optional depending on the providers
  // apiKey: '585543c980c244aa998891066c7fe492', // Open Cage
  apiKey: 'AIzaSyCNENsvpvP7jAGNIk9p4_xMT791M2FtNQs', // Google
  // for Mapquest, OpenCage, Google Premier
};

const geocoder = NodeGeocoder(options);
const { validateUpdateStatus } = require('../middleware/validation');
const {
  checkDevice,
  fetchLastStatus,
  addApilog,
  saveStatus,
  fetchDeviceStats,
  fetchDevice,
  fetchApiLogs,
  getLocation,
} = require('../components/deviceComponent');

const { dateNow } = require('../middleware/time');

// home
exports.home = async (req, res, next) => {
  res.status(200).json({
    status: 'success',
    message: 'You are currently gricd backend api',
  });
};

// update stats
exports.updateStats = async (req, res) => {
  const apilog = await addApilog(JSON.stringify(req.body));
  const { error } = validateUpdateStatus(req.body);
  if (error) {
    const errMessage = error.details[0].message.replace('"', '');
    return res.status(400).json({
      status: 'error',
      message: errMessage,
    });
  }

  // Fetch Device
  const device = await checkDevice(req.body.device);
  if (!device || device === null) return res.status(401).json({ status: 'error', message: 'device doesn\'t exist' });
  console.log(device.settings.preset);
  // handle date via seq provied
  const now = await dateNow();
  req.body.createdAt = now - req.body.seq;

  // Fetch Device Last Status Update
  const stats = await fetchLastStatus(req.body.device);
  if (stats != null && (req.body.longitude === 0) && (req.body.latitude === 0)) {
    req.body.latitude = stats.latitude;
    req.body.longitude = stats.longitude;
  }

  // handle cached data
  for (let i = 0; i < req.body.cached.length; i += 1) {
    const cached = req.body.cached[i];
    const location = '';
    // const locale = await getLocation(cached[3], cached[2]);
    // if (locale == null) {
    //   const resCah = await geocoder.reverse({ lat: cached[3], lon: cached[2] });
    //   location = resCah[0].formattedAddress;
    // } else {
    //   location = locale.location;
    // }
    const request = {
      device: req.body.device,
      imei: req.body.imei,
      temperature: cached[1],
      preset: cached[0],
      longitude: cached[2],
      latitude: cached[3],
      battery: cached[4],
      location,
      createdAt: now - cached[5],
      type: 'bulk',
      chg: cached[6],
      minTemp: device.settings.minTemp,
      maxTemp: device.settings.maxTemp,
      userPreset: device.settings.preset,
    };
    if (stats != null && (request.longitude === 0) && (request.latitude === 0)) {
      request.latitude = stats.latitude;
      request.longitude = stats.longitude;
    }
    // save status
    await saveStatus(request, device);
  }

  // Handle single status
  const location = '';
  // const locale = await getLocation(req.body.latitude, req.body.longitude);
  // if (locale == null) {
  //   const result = await geocoder.reverse({ lat: req.body.latitude, lon: req.body.longitude });
  //   location = result[0].formattedAddress;
  // } else {
  //   location = locale.location;
  // }
  const newRequest = {
    device: req.body.device,
    imei: req.body.imei,
    temperature: req.body.temperature,
    preset: req.body.preset,
    longitude: req.body.longitude,
    latitude: req.body.latitude,
    battery: req.body.battery,
    location,
    createdAt: req.body.createdAt,
    type: 'single',
    chg: req.body.chg,
    minTemp: device.settings.minTemp,
    maxTemp: device.settings.maxTemp,
    userPreset: device.settings.preset,
  };
  await saveStatus(newRequest, device);

  // return status
  res.status(201).json({
    status: 'success', preset: req.body.preset, lock: device.settings.lock, locked: device.settings.locked, message: 'Status recorded successfully',
  });
};

// fetch single device details
exports.deviceDetails = async (req, res) => {
  //   device id
  const { id } = req.params;

  // Fetch Device
  const data = await fetchDevice(id);
  if (data === null) return res.status(401).json({ status: 'error', message: 'device doesn\'t exist' });

  // Fetch device stats
  const stats = await fetchDeviceStats(id);
  return res.status(200).json({
    status: 'success', data, stats, message: 'fetched device details successfully',
  });
};

// apilogs
exports.apilog = async (req, res) => {
  // Fetch device stats
  const logs = await fetchApiLogs();
  return res.status(200).json({
    status: 'success', logs, message: 'fetched api logs details successfully',
  });
};
