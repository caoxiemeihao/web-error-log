const DB = require('../global/__db');
const log = require('../utils/log');

exports.getLog = async () => {
  return await db.query(`SELECT * FROM cj_web_log ${logDB}`);
};

exports.setLog = async ({
  type = '',
  title = '',
  content = '',
  access_url = '',
  params = '',
  add_time = Date.now()
}) => {
  let res = null;
  const sql = `INSERT INTO err_log(type, title, content, access_url, params, add_time, create_time)
      VALUES('${type}', '${title}', '${content}', '${access_url}', '${params}', ${add_time} NOW())`;
  try {
    res = await DB.db.query(sql);
  } catch(e) {
    log.sql(`SQL: ${sql}`, e);
  }
  return res;
};
