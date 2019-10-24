const {PG_HOST, PG_USER, PG_PASSWORD, PG_DB} = process.env
module.exports = require('knex')({
	client: 'pg',
	version: '7.2',
	connection: {
		host: PG_HOST,
		user: PG_USER,
		password: PG_PASSWORD,
		database: PG_DB
	}})