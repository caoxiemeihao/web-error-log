const Koa = require('koa');
const serve = require('koa-static');
const mysql = require('promise-mysql');
const config = require('./config');
const database = require('./mods/__db');
const router = require('./controller/router');

const app = new Koa();

database.db = mysql.createPool(config.database);

app.use(serve('./static'));

app.use(router.routes());

app.listen(config.server_prot, () => {
  console.log('[app.js]: server run at', config.server_prot);
});
