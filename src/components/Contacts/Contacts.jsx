import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ContextContacts } from 'components/App';

import StyleList from '../ComponentStyles/PhonebookStyles';

const { ListOfContactsStyle, BtnDeleteContact, IsEmptyList } = StyleList;

const Contacts = props => {
  const { contacts } = props;
  return contacts.length > 0 ? (
    <ListOfContactsStyle>
      {contacts.map(elem => (
        <Contact
          name={elem.name}
          number={elem.number}
          id={elem.id}
          key={elem.id}
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
};

const Contact = props => {
  const removeContact = useContext(ContextContacts);

  const { name, number, id } = props;
  return (
    <li>
      {name}: <span>{number}</span>
      <BtnDeleteContact type="button" id={id} onClick={removeContact}>
        Delete
      </BtnDeleteContact>
    </li>
  );
};

Contact.propTypes = {
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};

export default Contacts;
