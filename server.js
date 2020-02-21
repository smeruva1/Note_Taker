// Dependencies
// ===========================================================
//const notesArray = require('./journal.json');
const path = require('path');
const fs = require('fs');

const apiRoutes = require('./routes/apiRoutes/notes-route');
const htmlRoutes = require('./routes/htmlRoutes/html-route');


const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

//import all routes at once
// const routes = require('./routes');


//Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static('public'));

// Use apiRoutes -----give it after middleware
app.use(apiRoutes);
app.use(htmlRoutes);

// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log('App listening on PORT '+ PORT);
});