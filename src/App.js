import { useState } from "react";

import Wrapper from "./components/Wrapper/Wrapper.styled";
import MainHeader from "./components/MainHeader/MainHeader.styled";
import Section from "./components/Section/Section";
import Statistics from "./components/StatisticsCounter/StatisticsCouner";
import Buttons from "./components/Buttons/Buttons";
import Notification from "./components/Notification/Notification";

export default function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const feedbackTypes = { good, neutral, bad };

  const onLeaveFeedback = (name) => {
    switch (name) {
      case "good":
        setGood((state) => state + 1);
        return;
      case "neutral":
        setNeutral((state) => state + 1);
        return;
      case "bad":
        setBad((state) => state + 1);
        return;
      default:
        return;
    }
  };
  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    const PositiveFeedbackPercentage = Math.round((good * 100) / total);
    return PositiveFeedbackPercentage;
  };
  return (
    <Wrapper>
      <MainHeader />
      <Section title={"Please leave feedback"}>
        <Buttons
          options={Object.keys(feedbackTypes)}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title={"Statistics"}>
        {good || neutral || bad ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message="There is no feedback!" />
        )}
      </Section>
    </Wrapper>
  );
}
