const { gql } = require('apollo-server');

const typeDefs = gql`
  type Address {
    id: ID,
    street_number: String
    street_name: String
    city: String
    state: String
    zipcode: String
    country: String
  }

  type Book {
    id: ID
    title: String
    author: String
    genre: String
    description: String
    isbn: String
    date_published: String
    publisher: String
  }

  type Company {
    id: ID
    name: String
    phone: String
    country: String
    state: String
    city: String
    address: String
    zipcode: String
    website: String
  }

  type Movie {
    id: ID
    title: String
    genre: String
    director: String
    description: String
    movie_length_minutes: Int
    date_released: String
    top_cast: String
  }

  type Product {
    id: ID
    title: String
    description: String
    price: String
    category: String
    sku: String
    stock_quantity: Int
  }

  type User {
    id: ID
    first_name: String
    last_name: String
    username: String
    password: String
    email: String
  }
  
  type Query {
    addresses(rowNum: Int): [Address]
    addressesFilterByStates(stateArr: [String!], rowNum: Int): [Address]
    books(rowNum: Int): [Book]
    booksFilterByGenre(genreArr: [String!], rowNum: Int): [Book]
    companies(rowNum: Int): [Company]
    movies(rowNum: Int): [Movie]
    moviesFilterByGenre(genreArr: [String!], rowNum: Int): [Movie]
    products(rowNum: Int): [Product]
    users(rowNum: Int): [User]
  }
`;

module.exports = {
  typeDefs
}