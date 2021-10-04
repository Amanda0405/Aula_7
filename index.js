const express = require("express");
const path = require("path");
const app = express();
const port = process.env.PORT || 3000;;


app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname,"public")));

app.use(express.urlencoded());

app.get("/", function(req, res){
     setTimeout(() => {
        msg = "";
      }, 1000);
    res.render("index", {pokedex: pokedex})
}); 


app.get("/cadastro", function(req, res){
    res.render("Cadastro");
});

app.post("/new", (req, res) => {
    const pokemon = req.body;
    pokedex.push(pokemon);
    msg = "Pokemon Cadastrado com sucesso";
    res.redirect("/")
});

app.get("/detalhes/:id", (req, res) => {
    const id = req.params.id;
    const pokemon = pokedex[id];
    res.render("detalhes", {
      pokemon,
    });
  });


const pokedex = [
    
    {
         Número: 810,
         Nome:"Grookey",
         Tipo: "Grass",
         Imagem: "./img/grookey.png",
         Descrição:"When it uses its special stick to strike up a beat, the sound waves produced carry revitalizing energy to the plants and flowers in the area.",
         Altura: "0.3 m",
         Peso: "5.0 kg",
         Categoria: "Chimp",
         Habilidade:"Overgrow",
    },
    
    {
        Numero: 04,
        Nome: "Charmander",
        Tipo: "Fire",
        Imagem:"./img/chamander.png",
        Descrição:"It has a preference for hot things. When it rains, steam is said to spout from the tip of its tail.",
        Altura: "0,6 m",
        Peso: "8,5 kg",
        Categoria:"Lizard",
        Habilidade: "Blaze",
    },

    {
        Número: 025,
        Nome:"Pikachu",
        Tipo:"Eletric",
        Imagem:"./img/pikachu.png",
        Descrição:"Pikachu that can generate powerful electricity have cheek sacs that are extra soft and super stretchy.",
        Altura:"0,4 m",
        Peso:"6,0 kg",
        Categoria:"Mouse",
        Habilidade:"Static",
    }
]



console.log(__dirname);
app.listen(port, ()=>console.log(`Servidor rodando em http://localhost:${port}`));