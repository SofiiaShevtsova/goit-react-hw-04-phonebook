import PropTypes from 'prop-types';

import StyleList from '../ComponentStyles/PhonebookStyles';

const { ListOfContactsStyle, BtnDeleteContact, IsEmptyList } = StyleList;

const Contacts = props => {
  const { contacts, removeContacts } = props;
  return contacts.length > 0 ? (
    <ListOfContactsStyle>
      {contacts.map(elem => (
        <Contact
          name={elem.name}
          number={elem.number}
          id={elem.id}
          key={elem.id}
          removeContacts={removeContacts}
        />
      ))}
    </ListOfContactsStyle>
  ) : (
    <>
      <IsEmptyList>"There is no contacts"</IsEmptyList>
    </>
  );
};

Contacts.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
      PropTypes.array
    ),
  ]),
  removeContacts: PropTypes.func.isRequired,
};

const Contact = props => {
  const { name, number, removeContacts, id } = props;
  return (
    <li>
      {name}: <span>{number}</span>
      <BtnDeleteContact type="button" id={id} onClick={removeContacts}>
        Delete
      </BtnDeleteContact>
    </li>
  );
};

Contact.propTypes = {
  contacts: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.shape({
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
        id: PropTypes.string.isRequired,
      }),
      PropTypes.array
    ),
  ]),
  removeContacts: PropTypes.func.isRequired,
};

export default Contacts;
