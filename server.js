let bodyParser = require('body-parser');
let express = require('express');
let app = express();

let urlencodedParser = bodyParser.urlencoded({extended: false});

 app.set('view engine', 'ejs');
 app.use(express.static('CSS'));

 app.get('/', function(req, res){
    res.render('index');
});

app.get('/contact', function(req,res){
    res.render('contact', {qs: req.query});
});

// app.post('/contact', urlencodedParser, function(req, res){
//     console.log(req.body);
//     res.render('contact-success', {data: req.body});
// });

app.listen(process.env.PORT || 3000);