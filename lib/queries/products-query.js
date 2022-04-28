const { dbQuery } = require("../db-connection/db-query");
const { DEFAULT_ROW_NUMBER } = require('../const/default-row-number');

async function getProducts({ rowNum=DEFAULT_ROW_NUMBER }) {
  const SQL = `SELECT * FROM products LIMIT ${rowNum}`;
  let result = await dbQuery(SQL);
  return result;
};

module.exports = {
  getProducts
}