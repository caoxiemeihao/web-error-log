const Koa = require('koa');
const serve = require('koa-static');
const bodyParser = require('koa-body-parser');
const mysql = require('promise-mysql');
const config = require('./config');
const DB = require('./global/__db');
const router = require('./router');

; (async () => {

  const app = new Koa();

  DB.db = await mysql.createPool(config.database);

  app.use(serve('./static'));

  app.use(bodyParser());

  app.use(router.routes());

  app.listen(config.server_prot, () => {
    console.log('[app.js]: server run at', config.server_prot);
  });

})();
