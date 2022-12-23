import { useEffect, useState, useMemo, createContext } from 'react';

import Section from './Section/Section';
import Contacts from './Contacts/Contacts';
import FormAddContact from './FormAddContact/FormAddContact';
import FilterContact from './FilterContact/FilterContact';

export const ContextContacts = createContext(null);

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contactsList')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contactsList', JSON.stringify(contacts));
  }, [contacts]);

  const contactToFind = useMemo(
    () => contacts.filter(elem => elem.name.toLowerCase().includes(filter)),
    [filter, contacts]
  );

  const addContact = contact => {
    if (contacts.find(elem => elem.name === contact.name)) {
      alert('You have this contacts');
      return;
    }
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const findContactsByName = event =>
    setFilter(event.target.value.trim().toLowerCase());

  const removeContact = event => {
    const idContactToRemove = event.target.attributes.id.nodeValue;
    const arrayContacts = contacts.filter(
      elem => elem.id !== idContactToRemove
    );
    setContacts(arrayContacts);
  };

  return (
    <ContextContacts.Provider
      value={removeContact}
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
        <Contacts contacts={contactToFind} />
      </Section>
    </ContextContacts.Provider>
  );
};
