// IMPORTING MODULES
const express = require('express');
const mongoose = require('mongoose');
const ejs = require('ejs');
const methodOverride = require('method-override');
const pageControllers = require('./controllers/pageControllers');
const postControllers = require('./controllers/postControllers');

const app = express();

// MIDDLEWARES
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(
  methodOverride('_method', {
    methods: ['POST', 'GET'],
  })
);

// TEMPLATE ENGINE
app.set('view engine', 'ejs');

// DATABASE CONNECTION
mongoose.connect('mongodb://localhost/cleanblog-test-db', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// ROUTES
app.get('/', postControllers.getAllPosts);
app.get('/posts/:postId', postControllers.getPost);
app.post('/posts', postControllers.createPost);
app.put('/posts/:id', postControllers.updatePost);
app.delete('/posts/:id', postControllers.deletePost);

app.get('/posts/edit/:id', pageControllers.getEditPage);
app.get('/about', pageControllers.getAboutPage);
app.get('/add_post', pageControllers.getAddPage);

// STARTING THE SERVER
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı...`);
});
