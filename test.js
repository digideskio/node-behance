var Behance = require("./lib/main.js");
var keys = {
	"client_id": "9q8RIfKZf1zxVw1LlEqRi6xUyF87jkay", 
	"client_secret":"jNx7XzAg3CscT_oNTFe3CD75eu"
}
var behance = new Behance(keys);

// behance.get('projects', {"q":"dog", "tags":"cool", "color_hex":"#000" }, function(result){
//     console.log(result);
// });

behance.get('users', { "country":"spain", "sort":"followed", "page":"2" }, function(result){
    console.log(result);
});