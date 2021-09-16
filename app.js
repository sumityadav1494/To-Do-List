const express = require("express");
const app = express();
const date = require(__dirname + "/date.js");
app.set("view engine", "ejs");
app.use(express.urlencoded({ extented: true }));
var items = ["Buy Food", "Cook Food", "Eat Food"];
var workItem = [];
app.use(express.static("public"));
app.get("/", function (req, res) {
    const day = date.getDate();
    

    res.render("list",{listTitle:day,newItem:items});
    
})
app.get("/work", function (req, res) {
    res.render("list",{listTitle:"Work",newItem:workItem})
})
app.get("/about",function(req,res){
    res.render("about");
})
app.post("/", function (req, res) {
    var item = req.body.activity;
    if (req.body.list === "Work") {
        workItem.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
   
})

app.listen(3000, function () {
    console.log("the server is running at port 3000")
})