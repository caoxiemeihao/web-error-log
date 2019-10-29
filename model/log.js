const { db } = require('../mods/__db');
const { database: logDB } = require('../config');

exports.getLog = async () => {
  return await db.query(`SELECT * FROM cj_web_log ${logDB}`);
};

exports.setLog = async ({ title, content, access_url, params, type }) => {
  return await db.query(
    `INSERT INTO ${logDB}(title, content, create_time, access_url, params, type)
      VALUES(${title}, ${content}, NOW(), ${access_url}, ${params}, ${type})`
  );
};
