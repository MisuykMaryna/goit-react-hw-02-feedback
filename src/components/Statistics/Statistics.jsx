import PropTypes from 'prop-types';

export const Statistics = ({
  good, neutral, bad ,
  total,
  positiveFeedback,
}) => {
  return (
    <ul>
      <li>Good:<span> {good}</span></li>
      <li>Neutral:<span> {neutral}</span></li>
      <li>Bad:<span> {bad}</span></li>
      <li>Total:<span> {total}</span></li>
      <li>Positive feedback:<span>{positiveFeedback}%</span></li>
    </ul>
  );
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positiveFeedback: PropTypes.number.isRequired,
};
