"use strict"

/********* Imports**************/

var secretService = require("./../services/secretService.js"),
	UserService = require("./../services/UserService.js"),
	hapi = require("hapi"),
	basic = require("hapi-auth-basic");



//Export a single function responsible for routing
module.exports.route = function(server){



//homepage, web-based password generator, no plugin needed (not currently compatible!) (maybe scrap?)



//TBI





/*******************USER REGISTRATION**********************************/


	//Register new Users!	

	server.route({
		method:'POST',
		path: '/signup' ,
		handler:function(request, reply){
			console.log("signing up user: " + request.username);
			let user = new User(request.username, request.password);

		}
	})

	//return true if credentials match up to verify user has correct password.credentials will be passed with each request.
	server.route({
		method :'POST',
		path:'/login',
		handler: function (request, reply){
			console.log("logging in user: " + request.username);
			if(UserService.Authenticate(request.username, request.password)){
				reply(200, 'OK');
			}else{
				reply(403, 'forbidden');
			}
		}

	})







/************************SECRETS API************************************/



	server.route({
		method:'POST',
		path: '/Secret' ,
		handler:function(request, reply){
			//remember to check credentials!
			let user = UserService.getUser(request.username, request,password);

			const Secret = secretService.getSecret(user, request.Domain).catch(secretService.addSecret)

			reply(Secret.secret);
		}
	})
}