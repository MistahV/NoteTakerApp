const path = require("path");
const router = require("express").Router();



//GET for index.html 
 router.get("/", (req, res) => {
   res.sendFile(path.join(__dirname, "../public/index.html"));
 });

 //GET for the note.html
 router.get("/notes", (req, res) => {
   res.sendFile(path.join(__dirname, "../public/notes.html"));
 });


 
module.exports = router;