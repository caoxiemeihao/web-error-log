const DB = require('../global/__db');

exports.getLog = async () => {
  return await db.query(`SELECT * FROM cj_web_log ${logDB}`);
};

exports.setLog = async ({ type, title, content, access_url, params, add_time = Date.now() }) => {
  const sql = `INSERT INTO err_log(type, title, content, access_url, params, add_time)
      VALUES('${type}', '${title}', '${content}', '${access_url}', '${params}', '${add_time}')`;
  return await DB.db.query(sql);
};
