import React from 'react';

const Persons = ({ persons, filter }) => {
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
        {person.name} {person.number}
      </p>
    ));
  }

  return <p>No persons data available</p>;
};

export default Persons;
