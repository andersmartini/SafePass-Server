/********* Imports**************/

var SaltService = require("./../services/SaltService.js"),
	UserService = require("./../services/UserService.js");



//Export a single function responsible for routing
exports.route = function(app){



//homepage, web-based password generator, no plugin needed (not currently compatible!) (maybe scrap?)

	app.get("/", function(req, res){
		res.render('index', { title: 'SafePass' })
	});







/*******************USER REGISTRATION & LOGIN **********************************/


	//Register new Users!



	app.post("/register",function(req,res){
		//register users
	})




	app.post("/Login", function(req,res){
		//Login user
	})







/************************SALT API************************************/

	//Retrieves salt stored in DB, generates one if none exists.
	function saltroute(req, res){
		console.log("salting");
		SaltService.PromiseSalts(req.params.user, req.params.domain).race( Secret => {
				const passHash = hashPassWithSaltUsingBcrypt(req.params.pass, Secret.salt );
				if(Secret.passhash === passHash){
					return resolve(Secret);
				}
			}
			)

			}
		}

}



