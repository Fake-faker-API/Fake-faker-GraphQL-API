const { dbQuery } = require("../db-connection/db-query");
const DEFAULT_ROW_NUMBER = require('../const/default-row-number');

async function getAddresses({ rowNum=DEFAULT_ROW_NUMBER }) {
  const SQL = `SELECT * FROM addresses LIMIT ${rowNum}`;
  let result = await dbQuery(SQL);
  return result;
};

// 1 or more states
async function getAddressesFilterByStates({ stateArr, rowNum=DEFAULT_ROW_NUMBER }) {
  const whereClause = 'WHERE ' + stateArr.map(stateName => `addresses.state='${stateName}'`).join(' OR ');
  const SQL = `SELECT * FROM addresses ${whereClause} LIMIT ${rowNum}`;
  let result = await dbQuery(SQL);
  return result;
};

module.exports = {
  getAddresses,
  getAddressesFilterByStates
}