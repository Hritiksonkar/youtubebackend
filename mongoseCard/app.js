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
  let users = await User.find({});
  
  res.render('read',{users});

});
app.get('/edit/:userid', async (req, res) => {
  let user = await User.findOne({_id: req.params.userid });
  res.render('edit',{user});
});
app.get('/delete/:id', async (req, res) => {
  let users = await User.findOneAndDelete({_id:req.params.id});
  
  res.redirect('/read');
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