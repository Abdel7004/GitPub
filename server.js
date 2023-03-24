const express = require('express');
//Set variables and routes
const drinks = require('./models/drinks');
const foods = require('./models/food')

const app = express();
const PORT = 3000;

// Set up a route for the root URL
app.get('/', (req, res)=>{
    res.send(`Welcome to the Gitpub App!`);
});

// Middleware
app.set('view engine', 'ejs');

app.get('/drinks', (req,res)=>{
    res.render('drinks_index.ejs', {
        allDrinks: drinks,
    });
});

app.get('/foods', (req,res)=>{
  res.render('food_index.ejs', {
      allFoods: foods,
  });
});

//Add a new get route for /drinks/:id
app.get('/drinks/:id', (req, res)=>{
    res.render('drinks_show.ejs', {
        drink: drinks[req.params.id],
    });
});

//Add a new get route for /foods/:id 
app.get('/foods/:id', (req, res) => {
    res.render('foods_show.ejs', {
        food: foods[req.params.id],
    });
});

//port
app.listen(PORT, ()=>{
    console.log(`Listening...`, PORT);
});