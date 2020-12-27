/* eslint-disable no-undef */
const Log = require('../models/Log');
const { dateNow } = require('../middleware/time');

const fetchLogs = async (user) => {
  const logs = await Log.find({ user }).sort({ $natural: -1 });
  return logs;
};

const saveLog = async (data) => {
  const date = await dateNow();
  const logData = new Log({
    action: data.action,
    user: data.user,
    status: data.status,
    createdAt: date,
  });
  const addLog = await logData.save();
  return addLog;
};

module.exports.fetchLogs = fetchLogs;
module.exports.saveLog = saveLog;
