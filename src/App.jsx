import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { ContactForm } from 'components/ContactForm';
import { Filter } from 'components/Filter';
import { ContactList } from 'components/ContactList';

const STORAGE_KEY = 'contacts';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  componentDidMount() {
    const contacts = localStorage.getItem(STORAGE_KEY);
    const parsedContacts = JSON.parse(contacts);
    if (parsedContacts) {
      this.setState({ contacts: parsedContacts });
    }
  }

  componentDidUpdate(preProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.state.contacts));
    }
  }

  getFilterValue = event => {
    this.setState({ filter: event.target.value.toLowerCase() });
  };

  deleteContact = event => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        value => value.id !== event.target.dataset.id
      ),
    }));
  };

  addContact = ({ name, number }) => {
    if (
      this.state.contacts.some(
        value => value.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      alert(`${name} is already in contacts.`);
      return;
    }
    if (this.state.contacts.some(value => value.number === number)) {
      const findContact = this.state.contacts.find(
        option => option.number === number
      );
      alert(`${number} is already in contacts as ${findContact.name}.`);
      return;
    }
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name,
          number,
        },
      ],
    }));
  };

  getVisibleContacts = (contacts, filter) => {
    return contacts.filter(value =>
      value.name.toLocaleLowerCase().includes(filter)
    );
  };

  render() {
    const { contacts, filter } = this.state;
    const { addContact, getFilterValue, deleteContact, getVisibleContacts } =
      this;
    const visibleContacts = getVisibleContacts(contacts, filter);

    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={addContact} />

        <h2>Contacts</h2>
        <Filter filter={filter} findContact={getFilterValue} />

        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      </div>
    );
  }
}