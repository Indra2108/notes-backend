const Hapi = require('@hapi/hapi')
const routes = require('./routes')

const init = async () => {
	const port = process.env.PORT || 3001;
	const host = process.env.HOST || 'http://0.0.0.0' || 'host'

	const server = Hapi.server({
		port: port,
		host: host,
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