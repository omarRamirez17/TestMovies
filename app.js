var express = require('express');
var path = require('path');
var request = require('request');
var app = express();

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

app.get('/getMovies', function(req, res) {
   
   request.get("https://demo2697834.mockable.io/movies", function (err,rest, body) {
    if (!err) {
        var listMovies = JSON.parse(body);
        listMovies = listMovies.entries;

          for (var i = 0; i < listMovies.length; i++) {
    			listMovies[i].images[0].url = "/images/movies/"+(i+1)+".jpg";
			}

			res.send(listMovies);
    }
		});
   });

app.use(express.static(__dirname + '/public'));

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});