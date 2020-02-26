//const express = require('express');
const router = require('express').Router();
const path = require('path');

// Routes
// Basic route that sends the user first to the AJAX Page
// ===========================================================
router.get('/', (req, res) => {
    //res.send('Welcome to Note Teaker Application');
    res.sendFile(path.join(__dirname, '../../public/index.html'));
}); 

//Route for adding notes
router.get('/notes', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/notes.html'));
});


//Route for any other selected
router.get('*', (req,res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
});

module.exports = router;
