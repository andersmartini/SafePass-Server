const Hapi = require("hapi");
const Router = require("./routes/index.js");




const server = new Hapi.Server();

server.connection({
	port:process.env.PORT || 3000
})


/****************** Database Setup **************/

const mongoUri = prcoess.env.MONGULAB_URI;
const options = {
  'db': { 'native_parser': true },
  'server': { 'poolSize': 5 },
  'replset': { 'rs_name': 'myReplicaSetName' },
  'user': 'myUserName',
  'pass': 'myPassword'
}

mongoose.connect(mongoUri, options);




var plugins = [
	{
		register: require('hapi-auth-basic')
	},
	{
		register: require('hapi-authorization'),
		options: {
		  roles: false	// no heirarky, you can only acces your own passwords  
		}
	}
];
 
server.register(plugins, function(err) 




Router.route(server);

server.start((err) => {
	if(err){
		throw err
	}
	console.log("server running at " + server.info.uri);
})