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
	"client_secret":"jNx7XzAg3CscT_oNTFe3CD75eu"
}
var behance = new Behance(keys);
</pre>



Usage
------


<pre>
[Get Proyects]: 
behance.get('projects', {"q":"dog", "tags":"cool", "color_hex":"#000" }, function(result){
    console.log(result);
});
</pre>



<pre>
[Get Users]:
behance.get('users', { "country":"spain", "sort":"followed" }, function(result){
    console.log(result);
});
</pre>



<pre>
[Pagination]:
behance.get('users', { "country":"spain", "sort":"followed", "page":"2" }, function(result){
    console.log(result);
});
</pre>




For More Methods refer to https://www.behance.net/dev/api/console





