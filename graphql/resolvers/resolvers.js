const { getAddresses, getAddressesFilterByStates } = require("../../lib/queries/addresses-query");
const { getBooks, getBooksFilterByGenre } = require("../../lib/queries/books-query");
const { getCompanies } = require("../../lib/queries/companies-query");
const { getMovies, getMoviesFilterByGenre } = require("../../lib/queries/movies-query");
const { getProducts } = require("../../lib/queries/products-query");
const { getUsers } = require("../../lib/queries/users-query");

const resolvers = {
  Query: {//parent, args, context, and info (in that order)
    addresses: async (_, args) => {
      const res = await getAddresses(args);
      return res.rows;
    },

    addressesFilterByStates: async (_, args) => {
      const res = await getAddressesFilterByStates(args);
      return res.rows;
    },

    books: async (_, args) => {
      const res = await getBooks(args);
      return res.rows;
    },

    booksFilterByGenre: async (_, args) => {
      const res = await getBooksFilterByGenre(args);
      return res.rows;
    },

    companies: async (_, args) => {
      const res = await getCompanies(args);
      return res.rows;
    },

    movies: async (_, args) => {
      const res = await getMovies(args);
      return res.rows;
    },

    moviesFilterByGenre: async (_, args) => {
      const res = await getMoviesFilterByGenre(args);
      return res.rows;
    },

    products: async (_, args) => {
      const res = await getProducts(args);
      return res.rows;
    },

    users: async (_, args) => {
      const res = await getUsers(args);
      return res.rows;
    }
  }
};

module.exports = {
  resolvers
}