import PropTypes from 'prop-types';

import { Formik } from 'formik';
import * as Yup from 'yup';
import StyleList from '../ComponentStyles/PhonebookStyles';

import { nanoid } from 'nanoid';

const { FormStyle, FieldStyles, BtnStyle, ErrorMessageStyle } = StyleList;

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .matches(
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
    .required('Required'),

  number: Yup.mixed().test({
    name: 'number',
    message:
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +',
    test: value => {
      return /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/.test(
        value
      );
    },
  }),
});

const FormAddContact = props => {
  const { addContactOnSubmit } = props;
  return (
    <div>
      <Formik
        initialValues={{
          name: ``,
          number: ``,
        }}
        validationSchema={SignupSchema}
        onSubmit={(values, actions) => {
          addContactOnSubmit({
            name: values.name.trim(),
            id: `${nanoid()}`,
            number: values.number.trim(),
          });
          actions.setSubmitting(false);
          actions.resetForm();
        }}
      >
        {props => (
          <FormStyle>
            <label htmlFor="name">Name</label>
            <FieldStyles type="text" name="name" />
            {props.errors.name && (
              <ErrorMessageStyle id="feedback">
                {props.errors.name}
              </ErrorMessageStyle>
            )}
            <label htmlFor="number">Number</label>
            <FieldStyles type="tel" name="number" />
            {props.errors.number && (
              <ErrorMessageStyle id="feedback">
                {props.errors.number}
              </ErrorMessageStyle>
            )}

            <BtnStyle type="submit">Add contact</BtnStyle>
          </FormStyle>
        )}
      </Formik>
    </div>
  );
};

FormAddContact.propTypes = {
  addContactOnSubmit: PropTypes.func.isRequired,
};

export default FormAddContact;
