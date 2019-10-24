const R = require('ramda')

const findAll = (db) => {
	return () => {
		return db.select('id', 'name', 'age').from('users')
	}
}

const findOne = (db, id) => {
	return db.select('id', 'name', 'age').where('id', id).from('users')
}

const updateOne = async (db, id, fields) => {
	console.log(fields)
	const update = {}
	if(fields.name) {
		update.name = fields.name
	}
	if(fields.age) {
		update.age = fields.age
	}
	await db.select('id', 'name', 'age').where('id', id).update(update).from('users')
	return findOne(db, id);
}

module.exports = R.map(R.curry, {
	findAll,
	findOne,
	updateOne
})
