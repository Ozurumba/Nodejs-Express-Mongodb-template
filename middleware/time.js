const jstz = require('jstz');

// Time setup
const timezone = jstz.determine();
const dateFormat = () => {
  const date = new Date().toLocaleString('en-US', {
    timeZone: timezone.name(),
  });
  return date;
};

const dateNow = () => {
  const date = new Date().getTime('en-US', {
    timeZone: timezone.name(),
  });
  return date;
};

const todayDate = () => {
  const date = new Date().toLocaleDateString('en-US', {
    timeZone: timezone.name(),
  });
  return date;
};

const dateToTimestamp = (a) => {
  const date = new Date(a).getTime('en-GB', {
    timeZone: timezone.name(),
  });
  return date;
};

const fixedDateToTimestamp = (a) => {
  const date = new Date(a).getTime();
  return date;
};

const dateToLocale = (a) => {
  const date = new Date(a).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
  return date;
};

module.exports.fixedDateToTimestamp = fixedDateToTimestamp;
module.exports.dateFormat = dateFormat;
module.exports.dateNow = dateNow;
module.exports.dateToTimestamp = dateToTimestamp;
module.exports.dateToLocale = dateToLocale;
module.exports.todayDate = todayDate;
