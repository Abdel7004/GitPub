const express = require('express');
const app = express();
const port = 3000

// Set up a route for the root URL
app.get('/', (req, res) => {
    res.send('Welcome to the Gitpub App!');
  });

 // Drinks Variable and route
const drinks = require('./models/drinks')

app.get('/drinks', (req,res)=>{
  res.render('drinks_index.ejs', {
      allDrinks: drinks,
  });
});

// Listen at the bottom
app.listen(port, () => {
    console.log(`🏝️ Server is listening to PORT ${port} 🎧`)
})