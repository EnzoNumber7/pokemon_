var cors = require('cors');
const express = require("express");
const bodyParser = require('body-parser');
const dbo = require("./db/db");
const app = express();
app.use(cors());
const port = 4444;
const jsonParser = bodyParser.json();

dbo.connectToServer();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.send("Hello World!");
});

app.listen(port, function () {
  console.log(`App listening on port ${port}!`);
});


app.get("/pokemon/list", function (req, res) {
    //on se connecte à la DB MongoDB
    const dbConnect = dbo.getDb();
    //premier test permettant de récupérer mes pokemons !
    dbConnect
      .collection("pokemons")
      .find({}) // permet de filtrer les résultats
      /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
      .toArray(function (err, result) {
        if (err) {
          res.status(400).send("Error fetching pokemons!");
        } else {
          res.json(result);
        }
      });
      /*
      Bref lisez la doc, 
      il y a plein de manières de faire ce qu'on veut :) 
      */
      
  });

  app.post('/pokemon/insert', jsonParser, (req, res) => {
    const body = req.body;  
    console.log('Got body:', body);
    //on se connecte à la DB MongoDB
    const dbConnect = dbo.getDb();
    //premier test permettant de récupérer mes pokemons !
    dbConnect
        .collection("pokemons")
        //on code ensuite l'insertion dans mongoDB, lisez la doc hehe !!
        .insertOne({...body});
    res.json(body);
});

app.post('/pokemon/update', jsonParser, (req, res) => {
  const body = req.body; 
  console.log('Got body:', body);
  //on se connecte à la DB MongoDB
  const dbConnect = dbo.getDb();
  //premier test permettant de récupérer mes pokemons !
  dbConnect
      .collection("pokemons")
      //on code ensuite l'insertion dans mongoDB, lisez la doc hehe !!
      .updateOne({name:body.name}, {$set: {name: body.newName}}, {$set: {types: body.newTypes}}, {$set: {numero: body.newNumero}});
  res.json(body);
});

app.delete('/pokemon/delete', jsonParser, (req, res) => {
  const body = req.body;  
  //on se connecte à la DB MongoDB
  const dbConnect = dbo.getDb();
  //premier test permettant de récupérer mes pokemons !
  dbConnect
      .collection("pokemons")
      //on code ensuite l'insertion dans mongoDB, lisez la doc hehe !!
      .deleteOne({name:body.name});
  res.json(body);
});

/* index.js code before... */
app.get("/pokedex/list", function (req, res) {
  //on se connecte à la DB MongoDB
  const dbConnect = dbo.getDb();
  //premier test permettant de récupérer mes pokemons !
  dbConnect
    .collection("pokedex")
    .find({}) // permet de filtrer les résultats
    /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching pokemons!");
      } else {
        res.json(result);
      }
    });
    /*
    Bref lisez la doc, 
    il y a plein de manières de faire ce qu'on veut :) 
    */
    
});

app.post('/pokedex/insert', jsonParser, (req, res) => {
  const body = req.body;  
  console.log('Got body:', body);
  //on se connecte à la DB MongoDB
  const dbConnect = dbo.getDb();
  //premier test permettant de récupérer mes pokemons !
  dbConnect
      .collection("pokedex")
      //on code ensuite l'insertion dans mongoDB, lisez la doc hehe !!
      .insertOne({...body});
  res.json(body);
});

app.delete('/pokedex/delete', jsonParser, (req, res) => {
const body = req.body;  
//on se connecte à la DB MongoDB
const dbConnect = dbo.getDb();
//premier test permettant de récupérer mes pokemons !
dbConnect
    .collection("pokedex")
    //on code ensuite l'insertion dans mongoDB, lisez la doc hehe !!
    .deleteOne({name:body.name});
res.json(body);
});

app.get("/types/list", function (req, res) {
  //on se connecte à la DB MongoDB
  const dbConnect = dbo.getDb();
  //premier test permettant de récupérer mes pokemons !
  dbConnect
    .collection("types")
    .find({}) // permet de filtrer les résultats
    /*.limit(50) // pourrait permettre de limiter le nombre de résultats */
    .toArray(function (err, result) {
      if (err) {
        res.status(400).send("Error fetching types!");
      } else {
        res.json(result);
      }
    });
    /*
    Bref lisez la doc, 
    il y a plein de manières de faire ce qu'on veut :) 
    */
    
});