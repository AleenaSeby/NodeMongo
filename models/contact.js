var express = require('express');
//var JSONData = require('./hero.json');
var fs = require("fs");
// get the client
const mongoose = require('mongoose');

let Contact= {}


const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;


const ContactDB = new Schema({
  name: String,
  phoneNo: String
});
const ContactModel = mongoose.model('contact', ContactDB);

Contact.getAll = function(){
return new Promise(function(resolve,reject){
	const connection= mongoose.connect('mongodb://127.0.0.1:27017/myDB');
	console.log(connection);
	ContactModel.find({},function(err,result){
		if(err){
			console.log(err);
			console.log('ERR: fetching data from database');
			reject();
		}
		else{
			console.log(result);
			resolve(result);
		}
	});
});
}

Contact.saveNew = function(newContactData){
   // create the connection to database
   return new Promise(function(resolve,reject){
   const connection= mongoose.connect('mongodb://127.0.0.1:27017/myDB');
	console.log(connection);
	

	var saveContact =  ContactModel({
  		name: `${newContactData.name}`,
    	phoneNo:`${newContactData.phoneNo}`
	});

	saveContact.save({},function(err,result){
		if(err){
			console.log(err);
			console.log('ERR: fetching data from database');
			reject();
		}
		else{
			console.log(result);
			resolve(result);
		}
	});
   });
}


Contact.deletehero = function(deleteHeroData){
	return new Promise(function(resolve,reject){
	const connection= mongoose.connect('mongodb://127.0.0.1:27017/myDB');
	console.log(connection);
		 
		 ContactModel.findOneAndRemove({name:`${deleteHeroData.name}`},function(err,result,fields){
		if(err){
			console.log(err);
			console.log('ERR: fetching data from database');
			reject();
		}
		else{
			resolve(result);
		}
	});

	});
}

Contact.UpdateContact = function(newUpdateData){
return new Promise(function(resolve,reject){
	const connection= mongoose.connect('mongodb://127.0.0.1:27017/myDB');
	console.log(connection);
		 
		 ContactModel.findOneAndUpdate({_id:`${newUpdateData._id}`},{name:`${newUpdateData.name}`,phoneNo:`${newUpdateData.phoneNo}`},function(err,result,fields){
		if(err){
			console.log(err);
			console.log('ERR: fetching data from database');
			reject();
		}
		else{
			resolve(result);   
		}
	});

	});

}

Contact.getSingle= function(newData){
return new Promise(function(resolve,reject){
	const connection= mongoose.connect('mongodb://127.0.0.1:27017/myDB');
	console.log(connection);
	
	ContactModel.find({_id:`${newData._id}`},function(err,result){
		if(err){
			console.log(err);
			console.log('ERR: fetching data from database');
			reject();
		}
		else{
			console.log(result);
			resolve(result);
		}
	});
});
}
module.exports = Contact;