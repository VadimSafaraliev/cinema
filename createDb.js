var mongoose = require('libs/mongoose');
var Film = require('models/film').Film;

var film = new Film({
    name_of_film: "Kfkfkfk",
    description: "sdfsdfdsdfdffsf"
});

film.save(function(err, film, affected){
    if(errr) throw err;
    Film.findOne({name_of_film: "Kfkfkfk"}, function(err, rtrt){
        console.log(rtrt);
    })
});