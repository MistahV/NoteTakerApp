const path = require("path");
const router = require("express").Router();



//GET route for index.html 
 router.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "../public/index.html"));
 });

 //GET route for the note.html
 router.get("/notes", (req, res) => {
   res.sendFile(path.join(__dirname, "../public/notes.html"));
 });



module.exports = router;