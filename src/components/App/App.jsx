import React, {useState} from 'react';
import { Statisctics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from "../Notification/Notification"
import { Container } from "./App.styled"

export const App = () => {
  const [good, setGood] = useState(0);
  const [bad, setBad] = useState(0);
  const [neutral, setNeutral] = useState(0);

  const increaseFeedbackCount = e => {
    const targetStat = e.target.textContent.toLowerCase();
    switch (targetStat) {
      case "good":
        setGood(prevValue => prevValue + 1);
        return;
      case "neutral":
        setNeutral(prevValue => prevValue + 1);
        return;
      default:
        setBad(prevValue => prevValue + 1);
        return;
    }
  };
  function countTotalFeedback() {
    return good + neutral + bad;
  }
  function countPositiveFeedbackPercentage() {
    return good > 0
      ? Math.round((good / countTotalFeedback()) * 100)
      : 0;
  }
    return (
      <Container>
        <Section
          title={'Please leave feedback'}
          children={
            <FeedbackOptions
              options={["good", "neutral", "bad"]}
              onLeaveFeedback={increaseFeedbackCount}
            />
          }
        />
        <Section
          title={'Statistics'}
          children={ countTotalFeedback() > 0 ?
            <Statisctics
              good={good}
              neutral={neutral}
              bad={bad}
              total={countTotalFeedback()}
              positivePercentage={countPositiveFeedbackPercentage()}
            /> : <Notification message="There is no feedback"/>
          }
        />
      </Container>
    );
  }

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };
//   increaseFeedbackCount = e => {
//     const targetStat = e.target.textContent.toLowerCase();
//     this.setState(prevState => {
//       return { [targetStat]: prevState[targetStat] + 1 };
//     });
//   };
//   countTotalFeedback() {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   }
//   countPositiveFeedbackPercentage() {
//     return this.state.good > 0
//       ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
//       : 0;
//   }
//   render() {
//     return (
//       <Container>
//         <Section
//           title={'Please leave feedback'}
//           children={
//             <FeedbackOptions
//               options={Object.keys(this.state)}
//               onLeaveFeedback={this.increaseFeedbackCount}
//             />
//           }
//         />
//         <Section
//           title={'Statistics'}
//           children={ this.countTotalFeedback() > 0 ?
//             <Statisctics
//               good={this.state.good}
//               neutral={this.state.neutral}
//               bad={this.state.bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             /> : <Notification message="There is no feedback"/>
//           }
//         />
//       </Container>
//     );
//   }
// }
