"use strict"

const mongoose = require("mongoose");
const Schema = mongoose.Schema();


const UserSchema = new Schema({
	name: String,
	passHash: String,
	Secrets: [SecretSchema]
})


const SecretSchema = new Schema({
	domain:String,
	secret:String
})