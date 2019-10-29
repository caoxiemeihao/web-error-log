const Router = require('koa-router');
const {
  getLog,
  setLog,
  viewLogs,
} = require('../controller/log');

const router = new Router();

router.get('logs', viewLogs);

router.get('api/getLog', getLog);

router.post('api/setLog', setLog);

module.exports = router;
