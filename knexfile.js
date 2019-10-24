require('dotenv').config()
const {PG_HOST, PG_USER, PG_PASSWORD, PG_DB} = process.env

const basic = {
  client: 'pg',
  connection: {
    host: PG_HOST,
    user: PG_USER,
    password: PG_PASSWORD,
    database: PG_DB
  }
}

module.exports = {

  development: basic,

  staging: basic,

  production: basic

};
