var connect = require('connect');
 
connect.createServer(
    connect.static("../sportsapp")
 
).listen(3000);