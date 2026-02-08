const cookieParser = require('cookie-parser');
const express = require('express');
const usermodel = require('./model/user');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const app = express();
const path = require('path');
const { log } = require('console');
app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());



app.get('/', (req, res) => {
  res.render('index');
});
app.post('/create', async (req, res) => {
  const { username, email, password, age } = req.body;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(password, salt, async (err, hash) => {
      let createdUser = await usermodel.create({ username, email, password: hash, age });

     let token = jwt.sign({ email }, 'secretkey',)
     res.cookie('token', token, { httpOnly: true });
      res.send(createdUser);
    });
  });

});

app.listen(3000);
