const R = require('ramda')
const faker = require('faker')

const faker_seed = (faker, count) => {
  return R.pipe(
    R.times(() => {return {
      name: faker.name.findName(), 
      age: faker.random.number({min: 18, max:45})
    }})
  )(count)
}

const seed = function(knex) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert(faker_seed(faker, 100));
    });
};

module.exports = {
  faker_seed,
  seed
}