require('dotenv').config();

const pgConnection = process.env.DATABASE_URL;

module.exports = {
  development: {
    client: 'pg',
    connection: pgConnection,
    migrations: {
      directory: './src/db/migrations',
    },
    seeds: {
      directory: './src/db/seeds',
    },
  },
  production: {
    client: 'pg',
    connection: pgConnection,
    migrations: {
      directory: './src/db/migrations',
    },
    seeds: {
      directory: './src/db/seeds',
    },
  },
};