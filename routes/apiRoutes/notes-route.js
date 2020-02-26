const router = require('express').Router();
const notesArray = require('../../journal.json');
const path = require('path');
const fs = require('fs');


//display all notes
// ===========================================================
router.get('/api/notes', (req, res) => {

    // fs.readFile(notesArray, 'utf8', (err, jsonString) => {
    //     if (err) {
    //         console.log("File read failed:", err);
    //         return;
    //     }
    //     console.log('File data:', jsonString);
    // })

    fs.readFile(path.join(__dirname, '../../journal.json'), (err, data) => {
        if (err) {
            console.error("*************ERROR************");
            console.error(err);
            return;
        }
        console.error("*************S U C E S S ************");
        console.log(data);
        return res.json(JSON.parse(data));
    })

    // let rawdata = fs.readFileSync('../../journal.json');
    // let notes1 = JSON.parse(rawdata);
    // console.log(notes1);
    //});

    // res.json(fs.readFile('../../journal.json'), (err, data) => {
    //     if (err) {
    //         console.error(err);
    //         return;
    //     }
    //     console.log(data);
    //     return data;
    // })


    //res.json(fs.readFile(notesArray));
    // console.log(notesArray);
    // res.json(notesArray);
});

//create new note - takes in JSON input
//Data should be in this format
// "title": "tests",
//     "body": "asfdfsd",
//         "journal": "food"
//   }* /

router.post('/api/notes', (req, res) => {

    // set id based on what the next index of the array will be
    req.body.id = (notesArray.length + 1).toString();
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

router.delete('/api/notes/:id', (req, res) => {

    console.log("---@@@@@---- " + req.params.id);
    //console.log(req.body.id);

    // function findById(id, zookeepers) {
    //     const result = zookeepers.filter(zookeeper => zookeeper.id === id)[0];
    //     return result;
    //   }


    newNotesArr = notesArray.filter(Note => Note.id !== req.params.id);

    console.log("---################--------");
    console.log(newNotesArr);
    console.log("---################--------");

    // notesArray.push(newNote);
    // console.log(notesArray);

    fs.writeFileSync(
        path.join(__dirname, '../../journal.json'),
        JSON.stringify(newNotesArr, null, 2)
    );

    res.json(newNotesArr);
});

module.exports = router;
