import React, { useState } from 'react'
import Persons from './components/Persons';
import PersonForm from './components/PersonForm';
import Filter from './components/Filter';

const App = () => {
    const [persons, setPersons ] = useState([
        {name: 'Arto Hellas', phone: '556789434'},
        {name: 'Carolina Graniel', phone: '556235554'},
        {name: 'Diana Graniel', phone: '552146434'},
        {name: 'Javier Graniel', phone: '554789470'},
        {name: 'Adriana García', phone: '553425534'},
    ]);

    const [newPerson, setNewPerson ] = useState({ name: '', phone: ''});


    const [filter, setfilter]= useState('');


    const isNewName = persons.find(
        (person) =>
        person.name.toLocaleLowerCase() === newPerson.name.toLocaleLowerCase()

    );

    const addNewName = (event) => {
      event.preventDefault();


      if(!isNewName){
        const personObject = {
            name: newPerson.name,
            phone: newPerson.phone,
        };

        setPersons(persons.concat(personObject));
        setNewPerson({name: '', phone: ''});
      }else{
        alert(`${newPerson.name} is already added to phonebook`);

      }
    };

    const handleNewName = (event) =>
    setNewPerson({ ...newPerson, name: event.target.value});

    const handleNewPhone = (event) =>
    setNewPerson({ ...newPerson, phone: event.target.value});

    const handleFilter = (event) => setfilter(event.target.value);


    const personToShow =
    filter === ''
      ? persons
      : persons.filter(
          (person) =>
            person.name 
              .toLocaleLowerCase()
              .indexOf(filter.toLocaleLowerCase()) > -1

      );

    return (
        <div>
          <h2>Phonebook</h2>
          <Filter handleFilter={handleFilter} />
          <div>
            <h2>add a new</h2>
          </div>
          <h2>Numbers</h2>
          <PersonForm
          addNewName={addNewName}
          handleNewName={handleNewName}
          handleNewPhone={handleNewPhone}
          newPerson={newPerson}
          />

          <Persons personToShow={personToShow} />



        </div>

    );

};

export default App