var express = require('express');
var http = require('http');
var path = require('path');
var config = require('config');
var log = require('libs/log')(module);

var app = express();

app.engine('ejs', require('ejs-locals'));
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');


app.get("/", function(req,res){
    res.render("index");
});

app.get("/index", function(req,res){
    res.render("index");
});

app.get("/films", function(req,res){
    res.render("films");
});

app.use(express.static(path.join(__dirname, 'public')));

/*app.use(function(err, req, res, next){
    if(app.get('env') == 'development'){
        var errorHandler = express._errorHandler();
        errorHandler(err, req, res, next);
    }
    else{
        res.send(500);
    }
});*/

http.createServer(app).listen(config.get('port'), function(){
    log.info('Express server listening on port ' + config.get('port'));
});


/*

var http = require("http");
var url = require("url");

function start(route, handle) {
    function onRequest(req, res) {
        var pathname = url.parse(req.url).pathname;
        console.log("Request for " + pathname + " received.");
        route(handle, pathname,req, res);
    }

    http.createServer(onRequest).listen(config.get('port'), function(){
        log.info('Express server listening on port ' + config.get('port'));
    });
    console.log("Server has started.");
}

exports.start = start;*/