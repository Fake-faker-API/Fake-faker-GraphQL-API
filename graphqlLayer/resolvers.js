const { getAddresses } = require("../lib/addresses-query");
const { getBooks } = require("../lib/books-query");
const { getCompanies } = require("../lib/companies-query");
const { getMovies } = require("../lib/movies-query");
const { getProducts } = require("../lib/products-query");
const { getUsers } = require("../lib/users-query");

const resolvers = {
  Query: {
    addresses: async () => {
      const res = await getAddresses();
      return res.rows;
    },

    books: async () => {
      const res = await getBooks();
      return res.rows;
    },

    companies: async () => {
      const res = await getCompanies();
      return res.rows;
    },

    movies: async () => {
      const res = await getMovies();
      return res.rows;
    },

    products: async () => {
      const res = await getProducts();
      return res.rows;
    },

    users: async () => {
      const res = await getUsers();
      return res.rows;
    }
  }
};

module.exports = {
  resolvers
}