//importing node framework
var express = require('express');

var app = express();
//Respond with "hello world" for requests that hit our root "/"
app.get('/', function (req, res) {
    res.send('hello world');
});

app.get('/hello', function (req, res) {
    res.send('hello world 1');
});

app.get('/hello2', function (req, res) {
    res.send('hello world2');
});
//listen to port 3000 by default
app.listen(process.env.PORT || 3000, function (err){
    if (err) {
        console.log("Error: ", err)
    }
    else {
        console.log("Listening on PORT: 3000")
    }
    
});

module.exports = app;