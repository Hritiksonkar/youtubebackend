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
// const express = require('express');
// const app = express();
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');

// app.use(cookieParser());

// app.get("/", function (req, res) {
//     let token= jwt.sign({email: "user@example.com"}, "secretkey",)
//         res.cookie("token", token);
//         res.send("JWT cookie set");

// });

// app.get("/read", function (req, res) {
//      let data=jwt.verify(req.cookies.token, "secretkey");
//      console.log(data);
// });
// app.listen(3000);


