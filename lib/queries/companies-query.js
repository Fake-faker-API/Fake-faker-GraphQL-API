const { dbQuery } = require("../db-connection/db-query");
const { DEFAULT_ROW_NUMBER } = require('../const/default-row-number');

async function getCompanies({ rowNum=DEFAULT_ROW_NUMBER }) {
  const SQL = `SELECT * FROM companies LIMIT ${rowNum}`;
  let result = await dbQuery(SQL);
  return result;
};

module.exports = {
  getCompanies
}