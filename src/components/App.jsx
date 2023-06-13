import React, { useState } from 'react';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';
import { Notification } from './Notification/Notification';
import { Section } from './Section/Section';
import {Container} from './App.styled'

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const onButtonClick = key => {
    if (key === 'good') {
      setGood(prevGood => prevGood + 1);
    } else if (key === 'neutral') {
      setNeutral(prevNeutral => prevNeutral + 1);
    } else if (key === 'bad') {
      setBad(prevBad => prevBad + 1);
    }
  };

  const countTotalFeedback = () => {
        return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };

    const keys = ['good', 'neutral', 'bad'];
    const totalFeedback = countTotalFeedback();
    const positiveFeedbackPercentage = countPositiveFeedbackPercentage();

    return (
      <Container>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={keys}
            onLeaveFeedback={onButtonClick}
          />
        </Section>

        <Section title="Statistic">
          {!totalFeedback ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positiveFeedbackPercentage={positiveFeedbackPercentage}
            ></Statistics>
          )}
        </Section>
      </Container>
    );

}
