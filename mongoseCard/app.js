const express = require('express');
const app = express();
app.set('view engine', 'ejs');
const Path = require('path');
const User = require('./models/user');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path.join(__dirname, 'public'))) ;

app.get('/', (req, res) => {
  res.render('index');
});
app.get('/read', async (req, res) => {
  let allusers = await User.find({});
  
  res.render('read',{users: allusers});
});

app.post('/create', async (req, res) => {
  let{name, email, image} = req.body;
   let createduser = await User.create({
     name,
     email,
     image
   }) 
   res.send(createduser);
});

app.listen(3000);