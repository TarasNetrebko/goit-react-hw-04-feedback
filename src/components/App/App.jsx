import React, { Component } from 'react';
import { Statisctics } from '../Statistics/Statistics';
import { FeedbackOptions } from '../FeedbackOptions/FeedbackOptions';
import { Section } from '../Section/Section';
import { Notification } from "../Notification/Notification"
import { Container } from "./App.styled"

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  increaseFeedbackCount = e => {
    const targetStat = e.target.textContent.toLowerCase();
    this.setState(prevState => {
      return { [targetStat]: prevState[targetStat] + 1 };
    });
  };
  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  }
  countPositiveFeedbackPercentage() {
    return this.state.good > 0
      ? Math.round((this.state.good / this.countTotalFeedback()) * 100)
      : 0;
  }
  render() {
    return (
      <Container>
        <Section
          title={'Please leave feedback'}
          children={
            <FeedbackOptions
              options={Object.keys(this.state)}
              onLeaveFeedback={this.increaseFeedbackCount}
            />
          }
        />
        <Section
          title={'Statistics'}
          children={ this.countTotalFeedback() > 0 ?
            <Statisctics
              good={this.state.good}
              neutral={this.state.neutral}
              bad={this.state.bad}
              total={this.countTotalFeedback()}
              positivePercentage={this.countPositiveFeedbackPercentage()}
            /> : <Notification message="There is no feedback"/>
          }
        />
      </Container>
    );
  }
}
