// Dependencies
// ===========================================================
const notesArray = require('./journal.json');
const path = require('path');

const express = require('express');
const app = express();
const PORT = 3001;

//Sets up the Express app to handle data parsing
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Routes
// Basic route that sends the user first to the AJAX Page
// ===========================================================
app.get('/',function(req, res) {
    //res.send('Welcome to Note Teaker Application');
    res.sendFile(path.join(__dirname, './public/index.html'));
}); 

//Route for adding notes
app.get('/notes',(re,res) => {
    res.sendFile(path.join(__dirname, './public/notes.html'));
});


//display all notes
// ===========================================================
app.get('/api/notes',function(req, res) {
    return res.json(notesArray);
}); 

//create new note - takes in JSON input
app.post('/api/notes', (req, res) => {
    const newNote = req.body;

    console.log(notesArray);
    //console.log("-----------");
    console.log(newNote);
    //console.log("-----------");
    //not required to convert to JSON
    //console.log(JSON.stringify(newNote)); 

    notesArray.push(newNote);

    res.json(newNote);
});


// Listener
// ===========================================================
app.listen(PORT, function() {
    console.log('App listening on PORT '+ PORT);
});