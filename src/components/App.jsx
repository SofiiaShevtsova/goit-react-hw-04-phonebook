import { useEffect, useState } from "react";

import Section from './Section/Section';
import Contacts from './Contacts/Contacts';
import FormAddContact from './FormAddContact/FormAddContact';
import FilterContact from './FilterContact/FilterContact';

export const App = () => {
  const [contacts, setContacts] = useState(() => JSON.parse(localStorage.getItem('contactsList')) || [])
  const [filter, setFilter] = useState("")

  const addContact = contact => {
    if (contacts.find(elem => elem.name === contact.name)) {
      alert('You have this contacts');
      return;
    }
    setContacts(prevContacts => [...prevContacts, contact]);
};

  const removeContact = event => {
    const idContactToRemove = event.target.attributes.id.nodeValue;
    const arrayContacts = contacts.filter(
      elem => elem.id !== idContactToRemove
    );
    setContacts(arrayContacts);
};

 const findContactsByName = event =>
    setFilter(event.target.value.trim().toLowerCase());
 
  useEffect(() => {
    localStorage.setItem("contactsList", JSON.stringify(contacts));
  }, [contacts]); // render-1 -> uE | render-2 -> uE | render-3 -> uE

    const contactToFind = contacts.filter(elem =>
      elem.name.toLowerCase().includes(filter)
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
          <FormAddContact addContactOnSubmit={addContact} />
        </Section>
        <Section title={'Contacts'}>
          <FilterContact
            findContactsByName={findContactsByName}
            filters={filter}
          />
          <Contacts
            contacts={contactToFind}
            removeContacts={removeContact}
          />
        </Section>
      </div>
    );
  }

