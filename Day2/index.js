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
app.get("/file/:filename", function (req, res) {
    fs.readFile(`./files/${req.params.filename}`, "utf-8", function (err, filedata) {
        res.render('show', { filename: req.params.filename, filedata: filedata });
    });

});
app.get("/edit/:filename", function (req, res) {
    res.render("edit", { filename: req.params.filename });
});
app.post("/edit/:filename", function (req, res) {
    const oldPath = `./files/${req.params.filename}`;
    const newPath = `./files/${req.body.newname.split(" ").join("_")}.txt`;

    if (!req.body.newname) {
        return res.redirect(`/edit/${req.params.filename}`);
    }

    fs.rename(oldPath, newPath, function (err) {
        if (err) {
            console.log(err);
            return res.redirect(`/edit/${req.params.filename}`);
        }
        res.redirect("/");
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