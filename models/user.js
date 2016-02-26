var bcrypt = require("bcrypt");



export = function user(name, password) {
	username = String,
	Passwordhash = String,
	salt = String,
	storedSalts = [{domain = String,
			Salt = String
	}]

	//Takes a object of type Salt (below) 
	this.prototype.addSalt = function(salt){
		this.storedSalts.push(salt)
	}

	//Takes a hash and returns a true if it matches pwdhash on store
	this.prototype.verify = function(hash){

	}

}

var Salt = function(domain, salt){
	this.domainName = domain;
	this.salt = salt;
	return this;
}


function Secret(user, pass, domain, Secret){
	this.user = user;
	this.pass = pass;
	this.domain = domain;
	this.Secret = Secret;
	return this;
}