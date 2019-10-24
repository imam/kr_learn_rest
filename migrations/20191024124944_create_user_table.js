exports.up = function(knex) {
	return knex.schema.createTable('users', function(table) {
		table.increments()
		table.string('name')
		table.string('age')
		table.timestamp('created_at', { precision: 6 }).defaultTo(knex.fn.now(6));
	})
};

exports.down = function(knex) {
	return knex.schema.dropTable('users')
};
