var http = http = require('http');

var Behance = function(keys) {
    this.client_id = keys['client_id'];
    this.client_secret = keys['client_secret'];
    this.apiUrl = "http://www.behance.net/v2/";
};

Behance.prototype.get = function( method, opts, result ) {

    // set options
    var options = '';

    for (var item in opts) {
        options += "&" + item + "=" + opts[item];
    }

    api_url = this.apiUrl + method + "?client_id=" + this.client_id + options;
    
    // console.log(api_url);

    http.get(api_url, function(res) {
        data = "";
        res.on('data', function(chunk) {
            data += chunk;
        });
        res.on('end', function() {
            var jsonObj = JSON.parse(data);
            result(jsonObj);
        });
    });


};

// export the module
module.exports = Behance;