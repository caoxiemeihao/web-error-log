const Router = require('koa-router');
const { getLog, setLog } = require('./controller/log');

const router = new Router();

router.get('/api/getLog', getLog);

router.post('/api/setLog', setLog);

module.exports = router;
