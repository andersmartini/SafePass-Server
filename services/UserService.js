"use strict"
const mongoose = require("mongoose"); 
const UserSchema = require("./../Schemas/Schemas.js");
const users = mongoose.model('User', UserSchema);
const bcrypt = require("bcrypt");
const user = require("./../models/user.js");


exports.Register = function Register(name, pass) {
	const user = new user(name, pass)

	db.users.create(user);

}

exports.Login = function Login(name, pass){
	//body...
}

exports.Authenticate = function authenticate(req, res, next){
	console.log("authing!");
	return new Promise(function (resolve, reject) {
		const user = users.find({name:req.username});
	})






	next();

}
