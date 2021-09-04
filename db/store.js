const fs = require("fs");
const util = require("util");
const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);
const uuidv1 = require("uuidv1");

class storeNotes {
    read() {
      return readFileAsync("db/db.json", "utf8");
    }
    write(note) {
      return writeFileAsync("db/db.json", JSON.stringify(note));
    }

};


module.exports = new storeNotes();