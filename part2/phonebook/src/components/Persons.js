import React from 'react';
import personService from '../services/persons';

const Persons = ({ persons, setPersons, filter }) => {
  const deletePerson = (currentPerson) => {
    console.log(currentPerson);
    if (window.confirm(`Would you like to delete ${currentPerson.name}?`)) {
      personService.deleteResource(currentPerson.id).then(() => {
        setPersons(persons.filter((person) => person.id !== currentPerson.id));
      });
    }
  };

  if (filter && persons.length > 0) {
    let filterArray = persons.map(
      (person) => person.name.toLowerCase().indexOf(filter) > -1
    );
    let returnArray = [];
    filterArray.forEach((element, index) => {
      if (element) {
        returnArray = returnArray.concat(persons[index]);
      }
    });
    return returnArray.map((person) => (
      <p key={person.id}>
        {person.name} {person.number}
      </p>
    ));
  }

  if (persons.length > 0) {
    return persons.map((person) => (
      <p key={person.id}>
        {person.name} {person.number}{' '}
        <button onClick={() => deletePerson(person)}>Delete</button>{' '}
      </p>
    ));
  }

  return <p>No persons data available</p>;
};

export default Persons;
