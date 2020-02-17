# Note Taker

An Application for users that need to keep track of information using express backend to save and retrieve note data when needed.

Application has following HTML routes:

GET /notes - Return the notes.html file.

GET * - Return the index.html file

The application stores the data in db.json file on the backend using the fs module.

Application also has the following API routes:

GET /api/notes - Reads the db.json file and return all saved notes as JSON.

POST /api/notes - Receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client.