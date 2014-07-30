var assert = require('assert');

var Behance = require("../lib/main.js");
var keys = {
	"client_id": "9q8RIfKZf1zxVw1LlEqRi6xUyF87jkay", 
	"client_secret":""
};

var behance = new Behance(keys);


describe('get methods', function(){

	it('simple query get', function(){
		behance.get('projects', {"color_hex":"#000" }, function( result ){
			assert.equal( result.projects.length, 12 , 'total: 12');
		});
	});

	it('simple query without options', function(){
		behance.get('projects', function( result ){
			assert.equal( result.projects.length, 12 , 'total: 12' );
		});
	});

});