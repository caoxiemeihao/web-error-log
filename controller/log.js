const { getLog, setLog } = require('../model/log');

exports.getLog = async ctx => {
  const logs = await getLog();
  ctx.body = { code: 200, data: logs, message: null };
};

exports.setLog = async ctx => {
  const res = await setLog(ctx.request.body);
  ctx.body = { code: 200, data: res, message: null };
};
