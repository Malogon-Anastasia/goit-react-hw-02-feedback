import PropTypes from "prop-types";
// import './Section.scss';

const Section = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

Section.defaultProps = {
  title: "",
};

Section.propTypes = {
  title: PropTypes.string,
};

export default Section;
