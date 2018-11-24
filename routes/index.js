var express = require('express');
var router = express.Router();
var Cont = require('../models/contact.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Contacts' });
});

/*
router.get('/saveData', function(req, res, next) {
	Cont.saveNew(req.query)
	.then(function(){
		res.redirect('/getAllHeros')
	})
    .catch(console.log('ERR:: In resolving the promise')) 
}); */

router.get('/getAllHeros', function(req, res, next) {
	Cont.getAll()
	.then(function(retVal){
		res.render('ContactList', { data: retVal});
	})
	.catch(console.log('ERR:: In resolving the promise')) 
});
//rest Api GET
router.get('/getAllValues', function(req, res, next) {
	Cont.getAll()
	.then(function(retVal){
		res.send(retVal);
	})
	.catch(console.log('ERR:: In resolving the promise')) 
});

router.get('/postData', function(req, res, next) {
	Cont.getAll()
	.then(function(retVal){
		res.post(retVal);
	})
	.catch(console.log('ERR:: In resolving the promise')) 
});



router.get('/deleteHero', function(req, res, next) {
	Cont.deletehero(req.query)
	.then(function(){
		res.redirect('/getAllHeros')
	})
	 .catch(console.log('ERR:: In resolving the promise')) 
});

router.get('/saveData', function(req, res, next) {
	Cont.saveNew(req.query)
 	.then(function(){
 		res.redirect('/getAllHeros')
	})
	.catch(console.log('ERR::in resolving the promise'))
});

router.get('/updateData', function(req, res, next) {
	Cont.UpdateContact(req.query)
	 .then(function(){
	 	res.redirect('/getAllHeros')
	 })
    .catch(console.log('ERR :: is resolving the promise'))
});


router.get('/update', function(req, res, next) {
	Cont.getSingle(req.query)
	.then(function(retVal){
		res.render('UpdateContact', { data: retVal});
	})
	.catch(console.log('ERR:: In resolving the promise')) 
});
/*
router.get('/viewHero', function(req, res, next) {
	Heros.viewhero(req.query)
	.then(function(retVal){
		res.render('HeroDetail', { data: retVal});
	})
	.catch(console.log('ERR:: In resolving the promise')) 
});

router.get('/updatehero', function(req, res, next) {  
  Heros.updatehero(req.query)
  .then(function(retVal){
		res.render('update', { data: retVal});
	})
    .catch(console.log('ERR:: In resolving the promise')) 
});
*/
module.exports = router;
