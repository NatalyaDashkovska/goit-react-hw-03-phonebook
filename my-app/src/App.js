import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';

import styles from './index.module.css';

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };
  makeCard = (name, number) => {
    const newCard = {
      text: name,
      id: uuidv4(),
      number,
    };
    const oldCard = this.state.contacts.find(newCard => name === newCard.text);

    if (oldCard) {
      alert(`${oldCard.text}  is already in contacts`);
      return;
    } else {
      this.setState(({ contacts }) => ({
        contacts: [newCard, ...contacts],
      }));
    }
  };
  deleteCard = contactsId => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(
        contacts => contacts.id !== contactsId,
      ),
    }));
  };
  filterValue = e => {
    this.setState({ filter: e.target.value });
  };
  componentDidMount() {
    const contacts = localStorage.getItem(`contacts`);
    const parsedContacts = JSON.parse(contacts);
    this.setState({contacts: parsedContacts})
  }
  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem(`contacts`, JSON.stringify(this.state.contacts))
    }
  }
  render() {
    const { filter } = this.state;
    const visible = this.state.contacts.filter(contacts =>
      contacts.text.toLowerCase().includes(this.state.filter.toLowerCase()),
    );

    return (
      <div className={styles.section}>
        <h1 className={styles.title}>Phonebook</h1>
        <ContactForm onSubmit={this.makeCard} />

        <h2 className={styles.title}>Contacts</h2>
        <Filter value={filter} onChange={this.filterValue} />
        <ContactList contacts={visible} onDeleteCard={this.deleteCard} />
      </div>
    );
  }
}

export default App;
