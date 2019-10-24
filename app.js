require('dotenv').config()
const Koa = require('koa');
const Router = require('koa-router');
const R = require('ramda')

const app = new Koa();
app.use(require('koa-bodyparser')())

const router = new Router();
const knex = require('./effect/knex')
const inject = R.curry((dependency, toInject) => R.map(method => method(dependency), toInject))
const users = inject(knex, require('./models/users'))
const routes = require('./routes')({router, users});
const bootstrap = require('./bootstrap')

app
  .use(routes.routes())
  .use(routes.allowedMethods());

app.listen(process.env.PORT ? process.env.PORT : 3000, () => console.log('Listening on 3000'))