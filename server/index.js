var Yelp = require('yelp');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var yelp = new Yelp({
  consumer_key: '7pHkhWKUcHIa2XqFj8NLjg',
  consumer_secret: '9yQVR2Ac2WgzvxzvrGS1QEx7sWA',
  token: 'lTwQQ7WCR0uhWo-_tNREoZDF2zE1WmsK',
  token_secret: 'xab_chJ_hjhuXLbX8Wg0_GTl5CA',
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 8080;        // set our port

var router = express.Router(); 

router.post('/', function(req, res){
    var thingy = req.body;
   res.json({hello: "hello"});
   //res.json(yelp(req.type, req.locale)); 
});


function yelp(type, locale){
    yelp.search({ term: type, location: locale, limit: 5, sort: 0 })
    .then(function (data) {
        return data;
    })
}

app.use('/api', router);

app.listen(port);
console.log("Listening on port 3k...");
