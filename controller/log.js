const { getLog, setLog } = require('../model/log');
const {} = require('../view/logs');

exports.viewLogs = async ctx => {

};

exports.getLog = async ctx => {
  const logs = await getLog();

  ctx.body = { code: 200, data: logs, message: null };
};

exports.setLog = async ctx => {
  const res = await setLog(ctx.request.body.data);

  ctx.body = { code: 200, data: res, message: null };
};
