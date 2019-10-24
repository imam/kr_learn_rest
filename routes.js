const knex = require('./effect/knex')

module.exports = ({router, users: usersModel}) => {
	router.get('/', (ctx, next) => {
		ctx.body = "Halo developer!"
	})

	router.get('/v1/users', async (ctx, next) => {
		const users = await usersModel.findAll()
		ctx.body = {users}
	})

	router.get('/v1/users/:id', async (ctx, next) => {
		const user = await usersModel.findOne(ctx.params.id)
		ctx.body = user[0]
	})

	router.post('/v1/users/:id', async (ctx, next) => {
		const user = await usersModel.updateOne(ctx.params.id, ctx.request.body)
		ctx.body = user[0]
	})

	return router
}