const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
app.use(cookieParser());

app.get('/',function (req, res) {
    res.cookie('username', 'JohnDoe', )
    res.send("cookie set");
});
app.get ('/read', function (req, res) {
    console.log(req.cookies);
    res.send("read page");
});

app.listen(3000);


