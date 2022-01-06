// importing express into the project
const express = require('express');
const app = express();

app.use(express.static('public'));

//
const ejs = require('ejs');
app.set('view engine', 'ejs');

// starting the server
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});

app.get('/', (req, res) => {
  res.render('index');
});

app.get('/about', (req, res) => {
  res.render('about');
});

app.get('/add_post', (req, res) => {
  res.render('add_post');
});

app.get('/post', (req, res) => {
  res.render('post');
});
