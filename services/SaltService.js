"use strict"
var bcrypt = require("bcrypt");
var db = getDbInstanceSomehow();


function getSalt(user, domain,passhash, callback){

	//get salt from db
	Salt =  db.users.aggregate([{"$match":{"UserName":user, "passhash":passhash} }, {"$unwind":"StoredSalts"}, {"$match": {"StoredSalts.domain":domain} } ]);

	if(typeof(Salt) != string ){
		return callback(null, Salt);
	}
	//if no salt exists, create it now
	Salt = generateSalt();

	//insert salt to database
	db.user.update({UserName:name}, {"$push":{"StoredSalts":{"domain":domain, "Salt":Salt }}} );

	//call getSalt recursively, to ensure newly-inserted salt can be found in db
	return getSalt(user, domain, callback);
}



function generateSalt(){
	//generate a random salt and return it

	var salt = bcrypt.genSaltSync(50);

	return salt;
}



//Consider finding salts in db based on a 3-way match. username/password/domain. Dont pre-authorize users, instead send credentials with each request,
//and generate new salt when none is found. this way an attacker cant know for sure if he/she has managed to get the actual salt of a victim.

//Confusion might occur when users misstype their passwords. have them type it twice and match-check them in the frontend.



function promiseSalts(user, domain){
	return new Promise(function(fulfill, reject){
		try{
				const Salts =  db.users.find([{"$match":{"UserName":user, "domain": domain} }]);
				return fulfill(Salts);
		}catch(e){
			reject(e);
		}
	})
}

