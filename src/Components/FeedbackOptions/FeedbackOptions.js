import PropTypes from "prop-types";
import { OptionsButton } from "./FeedbackOptions.styled";

export default function FeedbackOptions({ options, clickFn }) {
  return (
    <div>
      {options.map((option) => (
        <OptionsButton type="button" key={option} id={option} onClick={clickFn}>
          {option}
        </OptionsButton>
      ))}
    </div>
  );
}
FeedbackOptions.defaultProps = {
  options: [],
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  clickFn: PropTypes.func,
};
