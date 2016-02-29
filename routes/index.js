"use strict"

/********* Imports**************/

var secretService = require("./../services/secretService.js"),
	UserService = require("./../services/UserService.js"),
	hapi = require("hapi"),
	basic = require("hapi-auth-basic");



//Export a single function responsible for routing
exports.route = function(server){



//homepage, web-based password generator, no plugin needed (not currently compatible!) (maybe scrap?)









/*******************USER REGISTRATION**********************************/


	//Register new Users!	

	server.route({
		method:'POST',
		route: '/signup' ,
		handler:function(request, reply){
			let user = new User(request.username, request.password);

		}
	})

	//return true if credentials match up to verify user has correct password.credentials will be passed with each request.
	server.route({
		method :'POST',
		route:'/login',
		handler: function (request, reply){
			if(UserService.auth(request.username, request.password)){
				reply(200, 'OK');
			}else{
				reply(403, 'forbidden');
			}
		}

	})







/************************SALT API************************************/



	server.route({
		method:'POST',
		route: '/Secret' ,
		handler:function(request, reply){
			//remember to check credentials!
			let user = UserService.getUser(request.username, request,password);

			const Secret = secretService.getSecret(user, request.Domain).catch(secretService.addSecret)

			reply(Secret.secret);
		}
	})
}