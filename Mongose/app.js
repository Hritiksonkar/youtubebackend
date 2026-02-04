const express = require('express');
const app = express();
const userModel = require('./usermodel');


app.get('/',  (req, res) => {
    res.send('Hello World');
});
app.get('/create',async(req, res) => {
    let createdUser = await userModel.create({
        name: 'John Doe',
        username: 'johndoe',
        email: 'johndoe@example.com'
    })
    res.send(createdUser);
    
});
app.get('/update',async(req, res) => {
    let updatedUser = await userModel.findOneAndUpdate({username:'johndoe'},{
        name: 'hritik',
    }, { new: true })
    res.send(updatedUser);
});
app.get('/read',async(req, res) => {
    let users = await userModel.findOne();
    res.send(users);
});
app.get('/delete',async(req, res) => {
    let deletedUser = await userModel.findOneAndDelete({username:'johndoe'});
    res.send(deletedUser);
});

app.listen(3000);
    