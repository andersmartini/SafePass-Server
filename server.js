const Hapi = require("hapi");
const Router = require("./routes/index.js");




const server = new Hapi.Server();

server.connection({
	host:'localhost',
	port:$PORT
})

Router.route(server);

server.start((err) => {
	if(err){
		throw err
	}
	console.log("server running at " + server.info.uri);
})