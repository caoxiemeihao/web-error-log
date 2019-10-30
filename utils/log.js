const fs = require('fs');
const path = require('path');

function createDir(dirPath) {
  try {
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath);
    }
  } catch (e) {
    console.log(e);
  }
}

function recordLog(log, filename) {
  const logPath = path.join(__dirname, '../logs');
  const today = new Date().toJSON().substr(0, 10);
  const todayLogPath = path.join(logPath, today);
  createDir(logPath);
  createDir(todayLogPath);

  try {
    fs.appendFileSync(`${path.join(todayLogPath, filename)}.log`, log);
  } catch (e) {
    console.log(e);
  }
};

exports.sql = (...args) => {
  const time = new Date().toJSON();
  const log = `
---- [${time}] [${new Date().toLocaleString()}] ----
${args.join('\n')}
`;

  recordLog(log, 'sql');
};
