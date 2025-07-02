const express = require("express");
const app = express();
const Path = require("path");
const fs = require("fs");

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(Path.join(__dirname, "public")));

app.get("/", function (req, res) {
    fs.readdir(`./files`, function (err, files) {
        res.render("index", { files: files });
    });
});

app.post("/create", function (req, res) {
    console.log(req.body); // Debug to see what's being sent
    if (!req.body.title || !req.body.details) {
        console.log("Missing title or details");
        return res.redirect("/");
    }
    fs.writeFile(`./files/${req.body.title.split(" ").join("_")}.txt`, req.body.details, function (err) {
        
        res.redirect("/");
    });
});
app.listen(3000);