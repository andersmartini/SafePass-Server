var assert = require("assert");
var SaltService = require("~/services/SaltService.js");

// Tests that getSalt returns unique salts for unique user/domain pairs
function TestUniqueSalts(){

	var salt;
	SaltService.getSalt("name","pass", "facebook", function(err, salt){
		salt = salt;
	});
	SaltService.getSalt("name","pass", "google", function(err, pepper){
		assert(salt != null && pepper!= null);
		assert(salt != pepper);
	});


}


//test that the same salt is returned for the same user/domain pair each time it is invoked
function TestConsistentSalts(){
	var salt;
	//Store initial salt in salt
	SaltService.getSalt("name","google", function(err, salt){
		salt=salt;
	})
	//get salt for same domain 10 times, and assert they are always equal
	for (var i = 10; i >= 0; i--) {			
	SaltService.getSalt("name","google", function(err, pepper){
		assert(pepper==salt);
	})

	}