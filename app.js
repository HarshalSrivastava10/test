const express = require('express');
const app = express();


app.set('view engine', 'ejs');

app.get('/', function(req, res) {
  res.render('pages/index');
});

app.get('/about', function(req, res) {
  res.render('pages/about');
});

app.get('/auth', function(req, res) {
  res.render('pages/auth');
});


app.listen(8080);
console.log('Server is listening on port 8080');
app.use(express.static(__dirname + '/public'));
