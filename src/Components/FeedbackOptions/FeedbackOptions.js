import PropTypes from "prop-types";
import { FeedbackOptionsList } from "./FeedbackOptions.styled";

export default function FeedbackOptions({ options, clickFn }) {
  return (
    <FeedbackOptionsList>
      {options.map((option) => (
        <button type="button" key={option} id={option} onClick={clickFn}>
          {option}
        </button>
      ))}
    </FeedbackOptionsList>
  );
}
FeedbackOptions.defaultProps = {
  options: [],
};

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  clickFn: PropTypes.func,
};
