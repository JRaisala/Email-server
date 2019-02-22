'use strict';

const Inert = require('inert');
const Vision = require('vision');
const Hapi = require('hapi');
const HapiSwagger = require('hapi-swagger');
const Pkg = require('./package.json')

let port = "3000";
let host = "localhost";

console.log("Starting HTTP server", host  + ":" + port);

const server = Hapi.server({
    port: port,
    host: host,
    routes: {
        cors: true
    }
});


// register plugins, configure views and start the server instance
async function start () {

	const swaggerOptions = {
		info: {
		  title: 'Email server API Documentation',
		  version: Pkg.version,
		  description:
			'API server emails'
		},
		grouping: 'tags',
		tags: [
		{
			name: 'Email server'
		}
		]
	}
	
	// register plugins to server instance
	await server.register([
		{
			plugin: Inert,
		},
		{
			plugin: Vision,
		},
		{
			plugin: HapiSwagger,
			options: swaggerOptions
		},
		{ 
			plugin: require('./api/v1/')
		},
	])

	// start your server
	try {
		await server.start()
		console.log("Server started at " + server.info.uri);
	} catch (err) {
		console.log("Error starting server!!!", err);
		process.exit(1)
	}
}

start()
