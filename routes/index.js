"use strict"

/********* Imports**************/

const secretService = require("./../services/secretService.js"),
		UserService = require("./../services/UserService.js"),
		hapi = require("hapi"),
		basic = require("hapi-auth-basic");

const internals = {};



internals.signup = function(request, reply){
			console.log( `signing up user: ${request.username}` );
			let user = new User(request.body.username, request.password);

			
		}


 internals.login = function(request, reply){
			console.log(`Logging in user: ${request.username}! ` );
			if(UserService.Authenticate(request.username, request.password)){
				reply(200, 'OK');
			}else{
				reply(403, 'forbidden');
			}
		}

internals.getSecret = function(request, reply){
			//remember to check credentials!
			let user = UserService.getUser(request.username, request,password);

			const Secret = secretService.getSecret(user, request.Domain).catch(secretService.addSecret)

			reply({secret:Secret.secret});
		}






	module.exports = [{
		method:'POST',
		path: '/signup' ,
		handler:internals.signup
	}

	{
		method :'POST',
		path:'/login/${username}/${password} ',
		handler:internals.login

	}

	{
		method:'POST',
		path: '/Secret/${Domain}'  ,
		handler:internals.getSecret
	}];
