const {
	addNoteHandler,
	getAllNotesHandler,
	getNoteByIdHandler,
	editNoteByIdHandler,
	deleteNoteByIdHandler
} = require('./handler')

const routes = [
	{
		method: 'POST',
		path: '/notes',
		handler: addNoteHandler
		// => Config CORS untuk setiap route
		// options: {
		// 	cors: {
		// 		origin: ['*'],
		// 	},
		// },
	},
	{
		method: 'GET',
		path: '/notes',
		handler: getAllNotesHandler
	},
	{
		method: 'GET',
		path: '/notes/{id}',
		handler: getNoteByIdHandler
	},
	{
		method: 'PUT',
		path: '/notes/{id}',
		handler: editNoteByIdHandler
	},
	{
		method: 'DELETE',
		path: '/notes/{id}',
		handler: deleteNoteByIdHandler
	}

]

module.exports = routes