const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
	const server = Hapi.server({
		port: process.env.PORT || 5000,
		host: process.env.HOST || 'http://0.0.0.0',
		routes: {
			cors: {
				origin: ['*'],
			},
		},
	})

	server.route(routes)

	await server.start()
	console.log(`Server berjalan pada ${server.info.uri}`)
}

init()