import PropTypes from "prop-types";
import { TitleStyles } from "./Section.styled";

const Section = ({ title, children }) => (
  <section>
    <TitleStyles>{title}</TitleStyles>
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
