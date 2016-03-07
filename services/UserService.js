"use strict"
const mongoose = require("mongoose"); 
const UserSchema = require("./../Schemas/Schemas.js");
const users = mongoose.model('User', UserSchema);
const bcrypt = require("bcrypt");
const user = require("./../models/user.js");


exports.Register = function Register(request) {
	return new Promise(function(resolve, reject){
		const user = new user(name, pass);
		user.save();



	})
}

exports.Login = function Login(name, pass){
	//body...
}

exports.Authenticate = function authenticate(request){
	console.log("authing!");
	return new Promise(function (resolve, reject) {
		const user = users.findOne({name:request.username}, function(err, user){
			if(err){
				return reject(err);
			}
			request.user = user;

			resolve(request);
		});

	})

	
}
