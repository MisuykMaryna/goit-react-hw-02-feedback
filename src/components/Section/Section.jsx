
import PropTypes from 'prop-types';

export const Section = ({ title, children }) => (
  <Section>
    <h2>{title}</h2>
    {children}
  </Section>
);

Section.prototype = {
  title: PropTypes.string,
  children: PropTypes.array.isRequired,
}