const { dbQuery } = require("../db-connection/db-query");
const { DEFAULT_ROW_NUMBER } = require('../const/default-row-number');

async function getUsers({ rowNum=DEFAULT_ROW_NUMBER }) {
  const SQL = `SELECT * FROM users LIMIT ${rowNum}`;
  let result = await dbQuery(SQL);
  return result;
};

module.exports = {
  getUsers
}