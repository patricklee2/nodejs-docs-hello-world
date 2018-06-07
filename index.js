var http = require('http');

var server = http.createServer(function(request, response) {
    var args="";
    process.argv.forEach(function (val, index, array) {
      args = args + index + ': ' + val + "\n";
    });

    response.writeHead(200, {"Content-Type": "text/plain"});
    response.end("Hello World, test test! \n" + args);

});

var port = process.env.PORT || 1337;
server.listen(port);

console.log("Server running at http://localhost:%d", port);
