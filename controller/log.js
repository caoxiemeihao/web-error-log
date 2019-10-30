const { getLog, setLog } = require('../model/log');

exports.getLog = async ctx => {
  const logs = await getLog();
  ctx._ok({ data: logs });
};

exports.setLog = async ctx => {
  const res = await setLog(ctx.request.body);
  ctx._ok({ data: res});
};
