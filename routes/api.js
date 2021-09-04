const router = require("express").Router();
const store = require("../db/store");


// Route retrieves all notes from db
router.get("/notes", (req, res) => {
  store
    .getNotes()
    .then((notes) => {
      return res.json(notes);
    })
    .catch((err) => res.status(500).json(err));
});


// Route sends notes to db
router.post("/notes", (req, res) => {
  store
    .addNote(req.body)
    .then((note) => res.json(note))
    .catch((err) => res.status(500).json(err));
});


module.exports = router;







// Older code below --- keeping in case necessary later...

// app.get('/api/notes', (req, res) => res.json(db.json));


// app.post('/api/notes', (req, res) => {
  
//   const newNoteTitle = req.body;

//   const newNote = 

//   // Using a RegEx Pattern to remove spaces from newCharacter
//   // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
//   newCharacter.routeName = newCharacter.name.replace(/\s+/g, '').toLowerCase();
//   console.log(newCharacter);

//   characters.push(newCharacter);
//   res.json(newCharacter);
// });

// //


