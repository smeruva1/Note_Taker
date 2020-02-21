const router = require('express').Router();

const notesArray = require('../../journal.json');
const path = require('path');
const fs = require('fs');


//display all notes
// ===========================================================
router.get('/api/notes', (req, res) => {
    res.json(notesArray);
}); 

//create new note - takes in JSON input
//Data should be in this format
/*{
    "title": "tests",
    "body": "asfdfsd",
    "journal": "food"
  }*/

  router.post('/api/notes', (req, res) => {
    
    // set id based on what the next index of the array will be
    req.body.id = (notesArray.length+1).toString();
    const newNote = req.body;

    //console.log(notesArray);
    console.log("-----------");
    console.log(newNote);
    console.log("-----------");
    //not required to convert to JSON
    //console.log(JSON.stringify(newNote)); 
    
    notesArray.push(newNote);
    console.log(notesArray);
    
    fs.writeFileSync(
        path.join(__dirname, '../../journal.json'),
        JSON.stringify(notesArray, null, 2)
    );

    res.json(newNote);
});

module.exports = router;
