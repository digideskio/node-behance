<a href="https://nodei.co/npm/node-behance/"><img src="https://nodei.co/npm/node-behance.png?downloads=true&stars=true"></a>


Install
--------

<pre>
npm install node-behance
</pre>

ALternatively,
<pre>
npm install https://github.com/pedroparra/node-behance
</pre>


Set Up
-------

<pre>
var Behance = require("node-behance");
var keys = {
	"client_id": "9q8RIfKZf1zxVw1LlEqRi6xUyF87jkay", 
	"client_secret":""
}
var behance = new Behance(keys);
</pre>


Usage
------

<pre>
// Get Proyects
behance.get('projects', function(result){
    console.log(result);
});

// Get Proyects with filters
behance.get('projects', {"q":"dog", "tags":"cool", "color_hex":"#000" }, function(result){
    console.log(result);
});

// Get Users
behance.get('users', { "country":"spain", "sort":"followed" }, function(result){
    console.log(result);
});

// Pagination
behance.get('users', { "country":"spain", "sort":"followed", "page":"2" }, function(result){
    console.log(result);
});
</pre>


Methods
--------
<pre>
For More Methods refer to https://www.behance.net/dev/api/console
</pre>


Test
------
<pre>
npm test
</pre>


Future Implementations
------------------------
<pre>
- Method with POST, DELETE ..etc
- Suggestions ...
</pre>







