import PropTypes from "prop-types"
import { Span } from "./Statistics.styled"

export const Statisctics = ({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) => {
  return  <>
    <Span>Good: {good}</Span>
    <Span>Neutral: {neutral}</Span>
    <Span>Bad: {bad}</Span>
    <Span>Total: {total}</Span>
    <Span>Positive feedback: {positivePercentage}%</Span>
  </>     
};

Statisctics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired
}