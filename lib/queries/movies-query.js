const { dbQuery } = require("../db-connection/db-query");
const { DEFAULT_ROW_NUMBER } = require('../const/default-row-number');

async function getMovies({ rowNum=DEFAULT_ROW_NUMBER }) {
  const SQL = `SELECT * FROM movies LIMIT ${rowNum}`;
  let result = await dbQuery(SQL);
  return result;
};

async function getMoviesFilterByGenre({ genreArr, rowNum=DEFAULT_ROW_NUMBER }) {
  const whereClause = 'WHERE ' + genreArr.map(genreName => `movies.genre LIKE '${genreName}%'`).join(' OR ');
  const SQL = `SELECT * FROM movies ${whereClause} LIMIT ${rowNum}`;
  let result = await dbQuery(SQL);
  return result;
};

module.exports = {
  getMovies,
  getMoviesFilterByGenre
}