const knex = require('./effect/knex')

knex.raw('select 1+1 as result').then(()=> console.log('DB Connected')).catch(e => {throw e});