import PropTypes from "prop-types";
import { StatisticsList } from "./Statistics.styled";

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => (
  <StatisticsList>
    <li className="statistics__item">Good: {good}</li>
    <li className="statistics__item">Neutral: {neutral}</li>
    <li className="statistics__item">Bad: {bad}</li>
    <li className="statistics__item">Total: {total}</li>
    <li className="statistics__item">
      Positive feedback: {positiveFeedback} %
    </li>
  </StatisticsList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};

export default Statistics;
