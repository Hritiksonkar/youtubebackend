const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const Path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path.join(__dirname, 'public'))) ;

app.get('/', (req, res) => {
  res.render('index');
});

app.listen(3000);