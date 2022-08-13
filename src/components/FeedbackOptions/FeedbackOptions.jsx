import PropTypes from "prop-types"
import {Container, Button} from "./FeedbackOptions.styled"

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
      <Container>
        {options.map((but, index) => <Button type="button" onClick={onLeaveFeedback} key={index}>
            {but}
          </Button>)}
        </Container>
    )
}

FeedbackOptions.propTypes = {
  onLeaveFeedback: PropTypes.func.isRequired,
  options: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired
  })
}
