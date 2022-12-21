import PropTypes from 'prop-types';

import StyleList from '../ComponentStyles/PhonebookStyles';
const { SectionContainer, SectionTitle } = StyleList;

const Section = props => {
  const { title, children } = props;
  return (
    <SectionContainer>
      <SectionTitle>{title}</SectionTitle>
      {children}
    </SectionContainer>
  );
};

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]) ,
};

export default Section;
