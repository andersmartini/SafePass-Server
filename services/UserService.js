"use strict"

var db = getDbSomehow();
var bcrypt = require("bcrypt");
var user = require("~/models/user.js");


exports.Register = function Register(name, pass) {
	var user = new user(name, pass)

	db.users.create(user);

}

exports.Login = function Login(name, pass){
	//body...
}

exports.Authenticate = function authenticate(req, res, next){
	console.log("authing!");
	//Check userName and password 

	//call next() if credentials check out

	//otherwise return a 401

	next();

}
