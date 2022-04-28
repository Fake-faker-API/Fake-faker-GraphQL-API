const { dbQuery } = require("../db-connection/db-query");
const { DEFAULT_ROW_NUMBER } = require('../const/default-row-number');

async function getBooks({ rowNum=DEFAULT_ROW_NUMBER }) {
  const SQL = `SELECT * FROM books LIMIT ${rowNum}`;
  let result = await dbQuery(SQL);
  return result;
};

async function getBooksFilterByGenre({ genreArr, rowNum=DEFAULT_ROW_NUMBER }) {
  const whereClause = 'WHERE ' + genreArr.map(genreName => `books.genre LIKE '${genreName}%'`).join(' OR ');
  const SQL = `SELECT * FROM books ${whereClause} LIMIT ${rowNum}`;
  let result = await dbQuery(SQL);
  return result;
};

module.exports = {
  getBooks,
  getBooksFilterByGenre
}