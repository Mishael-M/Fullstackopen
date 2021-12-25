const mongoose = require('mongoose');

if (process.argv.length < 3 || process.argv.length > 5) {
  console.log(
    'Please provide the password, name, and number as an argument: node mongo.js <password> <name> <number>'
  );
  process.exit(1);
}

const password = process.argv[2];
const name = process.argv[3];
const number = process.argv[4];

const url = `mongodb+srv://fullstack:${password}@cluster0.ky0ax.azure.mongodb.net/note-app?retryWrites=true&w=majority`;

mongoose.connect(url);

const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
  name: name,
  number: number,
});

if (process.argv.length === 5) {
  person.save().then((result) => {
    console.log('person saved!');
    mongoose.connection.close();
  });
} else {
  Person.find({}).then((result) => {
    console.log('Phonebook: ');
    result.forEach((persons) => {
      console.log(persons.name, persons.number);
    });
    mongoose.connection.close();
  });
}
