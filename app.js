// importing express into the project
const express = require('express');
const app = express();

// starting the server
const port = 3000;
app.listen(port, () => {
  console.log(`Sunucu ${port} portunda başlatıldı..`);
});

// data to send
const blog = { id: 1, title: 'Blog title', description: 'Blog description' };

// sending data with get request
app.get('/', (req, res) => {
  res.send(blog);
});
