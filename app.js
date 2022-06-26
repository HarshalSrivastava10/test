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
app.get('/adminLogin', function(req, res) {
  res.render('pages/adminLogin');
});

app.get('/teams', function(req, res) {
  res.render('pages/teams');
});

app.get('/landing', function(req, res) {
  res.render('pages/landing');
});

app.get('/admin-dashboard', function(req, res) {
  res.render('pages/admin');
});

app.get('/user-authentication', function(req, res) {
  res.render('pages/roleAuth');
});
app.get('/startup', function(req, res) {
  res.render('pages/startup');
});

app.listen(8080);
console.log('Server is listening on port 8080');
app.use(express.static(__dirname + '/public'));
