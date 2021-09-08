const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const uuidv1 = require("uuidv1");

class storeNotes {
    read() {
      return readFileAsync("db/db.json", "utf8");
    };

    write(note) {
      return writeFileAsync("db/db.json", JSON.stringify(note));
    };

    getNotes() {
      return this.read().then((notes) => {
        
        try {
          parsedNotes = [].concat(JSON.parse(notes));
        } catch (err) {
          parsedNotes = [];
        }
        return parsedNotes;
      });
    };

    addNote(note) {
      const { title, text } = note;

      if (!title || !text) {
        throw new Error("You must enter a 'Title' and text for your note!");
      }
      
      const newNote = { title, text, id: uuidv1() };
      
      return this.getNotes()
        .then((notes) => [...notes, newNote])
        .then((updatedNotes) => this.write(updatedNotes))
        .then(() => newNote);
    };

    //removeNote() {

    // }

};

module.exports = new storeNotes();