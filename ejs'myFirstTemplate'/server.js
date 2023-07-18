const express = require('express');
const app = express();

app.set("view engine", "ejs");
app.get("/", function(req, res){
	res.render("pages/index");
})
app.get("/sobre", function(req, res){
	res.render("pages/about");
})
app.use(express.static(__dirname + "/assets/style.css"));
app.listen(8080);

console.log("rodando...");