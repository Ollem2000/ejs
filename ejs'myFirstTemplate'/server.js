const express = require('express');
const app = express();

const navLinks = [
{
	title: "INICIO", id: "home", href: "/",
},
{
	title: "SOBRE",  id: "about", href: "/sobre",
},
{
	title: "POSTS",  id: "posts", href: "/posts",
},
{
	title: "PERFIL",  id: "perfil", href: "/perfil",
}
]

const posts = [
{
	title: "O meu começo", href:"#", paragraph: "Eu não sei exatamente quando comecei, para ser sincero, nem sei sobre qual começo me refiro."
},
{
	title: "Segunda postagem", href:"#", paragraph: "Essa é a segunda postagem, porém, também não tenho nenhum conteúdo para preenche-la"
},
{
	title: "Ultimo post", href:"#", paragraph: "Ultimo post só para encher ainda mais a página."
}
]

app.set("view engine", "ejs");
app.get("/", function(req, res){
	res.render("pages/index", {
		qualitys: navLinks,
	});
})
app.get("/perfil", function(req, res){
	res.render("pages/perfil", {
		qualitys: navLinks,
	});
})
app.get("/posts", function(req, res){
	res.render("pages/posts", {
		qualitys: navLinks,
		news: posts,
	});
})
app.get("/sobre", function(req, res){
	res.render("pages/about", {
		qualitys: navLinks,
	});
})
app.get("/", function(req, res){
	res.render("partials/nav.ejs", {
		qualitys: navLinks,
	});
})
app.listen(8080);

console.log("rodando...");