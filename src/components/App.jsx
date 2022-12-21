import { Component } from 'react';

import Section from './Section/Section';
import Contacts from './Contacts/Contacts';
import FormAddContact from './FormAddContact/FormAddContact';
import FilterContact from './FilterContact/FilterContact';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsList = JSON.parse(localStorage.getItem('contactsList'));
    if (contactsList) {
      this.setState({ contacts: contactsList });
    }
  }

  componentDidUpdate(prevProps, prevState, snapsshot) {
    if (prevState.contacts !== this.state.contacts) {
      localStorage.setItem('contactsList', JSON.stringify(this.state.contacts));
    }
  }

  addContact = contact => {
    if (this.state.contacts.find(elem => elem.name === contact.name)) {
      alert('You have this contacts');
      return;
    }
    this.setState(prevState => {
      return { contacts: [...prevState.contacts, contact] };
    });
  };

  removeContact = event => {
    const idContactToRemove = event.target.attributes.id.nodeValue;
    const arrayContacts = this.state.contacts.filter(
      elem => elem.id !== idContactToRemove
    );
    this.setState({ contacts: arrayContacts });
  };

  findContactsByName = event =>
    this.setState({ filter: event.target.value.trim().toLowerCase() });

  render() {
    const contactToFind = this.state.contacts.filter(elem =>
      elem.name.toLowerCase().includes(this.state.filter)
    );
    return (
      <div
        style={{
          height: '100%',
          display: 'flex',
          flexDirection: `column`,
          alignItems: `center`,
          color: '#010101',
        }}
      >
        <Section title={'Phonebook'}>
          <FormAddContact addContactOnSubmit={this.addContact} />
        </Section>
        <Section title={'Contacts'}>
          <FilterContact
            findContactsByName={this.findContactsByName}
            filters={this.state.filter}
          />
          <Contacts
            contacts={contactToFind}
            removeContacts={this.removeContact}
          />
        </Section>
      </div>
    );
  }
}
