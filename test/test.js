var assert = require('assert');

var Behance = require("../lib/main.js");
var keys = {
	"client_id": "9q8RIfKZf1zxVw1LlEqRi6xUyF87jkay", 
	"client_secret":""
};

var behance = new Behance(keys);


describe('get methods', function(){

	// Projects
	it('simple query get', function(done){
		behance.get('projects', function( result ){
			assert.equal( result.projects.length , 12 , 'should be 12');
			done();
		});
	});


	// Projects with filters
	it('simple query get with filters', function(done){
		behance.get('projects', {"color_hex":"#000" }, function( result ){
			assert.equal( result.projects.length , 12 , 'should be 12');
			done();
		});
	});


	// Users query
	it('simple query for get users', function(done){
		behance.get('users', function(result){
    		assert.equal( result.users.length , 12 , 'should be 12');
			done();
		});
	});	


	// Users with filters
	it('simple query for get users with filters', function(done){
		behance.get('users', { "country":"spain", "sort":"followed" }, function(result){
    		assert.equal( result.users.length , 12 , 'should be 12');
			done();
		});
	});


	// Pagination 
	it('simple query for get data with pagination' , function(done){
		behance.get('users' , {"page":"2"} , function(result){
			assert.equal( result.users.length , 12 , 'should be 12');
			done();
		});
	});



});