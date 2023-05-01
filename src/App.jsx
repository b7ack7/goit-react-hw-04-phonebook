import React, {useEffect, useState} from "react";
import { nanoid } from "nanoid";
import { ContactForm } from "components/ContactForm";
import { Filter } from "components/Filter";
import { ContactList } from "components/ContactList";

const STORAGE_KEY = "contacts";

const initialContacts = [
  {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
  {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
  {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
  {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}
];

const saveContacts = localStorage.getItem(STORAGE_KEY);
const parsedContacts = JSON.parse(saveContacts);


export const App = () => {

  const [contacts, setContacts] = useState(parsedContacts || initialContacts);
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);


 const getFilterValue = (event) => {
    setFilter(event.target.value.toLowerCase());
  }

 const deleteContact = (id) => {
   setContacts(contacts.filter(value => value.id !== id));
  }
 
  const addContact = ({name, number}) =>  {
    if (contacts.some(value => value.name.toLowerCase() === name.toLowerCase())) {
      alert(`${name} is already in contacts.`);
      return;
    }
    if (contacts.some(value => value.number === number)) {
      const findContact = contacts.find(option => option.number === number);
      alert(`${number} is already in contacts as ${findContact.name}.`);
      return;
    }
    setContacts([...contacts, {
      id: nanoid(),
      name,
      number
  }]);  
  }

  const visibleContacts = contacts.filter(value =>  value.name.toLocaleLowerCase().includes(filter));
  
  return (
    
    <div>
    <h1>Phonebook</h1>
    <ContactForm 
    onForm={addContact}
    />

      <h2>Contacts</h2>
      <Filter 
      filter={filter}
      findContact={getFilterValue}
      />

      <ContactList
      contacts={visibleContacts}
      onDeleteContact={deleteContact}
      />
    </div>

 
);
};