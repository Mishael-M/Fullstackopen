import React, { useState } from 'react';

const Header = ({ title }) => {
  return <h1>{title}</h1>;
};
const Button = (props) => (
  <button onClick={props.handleClick}>{props.text}</button>
);

const Statistics = (props) => {
  if (props.allValue === 0) {
    return <p>No feedback given</p>;
  }
  return (
    <table>
      <StatisticLine text='Good' value={props.good} />
      <StatisticLine text='Neutral' value={props.neutral} />
      <StatisticLine text='Bad' value={props.bad} />
      <StatisticLine
        text='All'
        value={props.good + props.bad + props.neutral}
      />
      <StatisticLine
        text='Average'
        value={
          (props.good * 1 + props.bad * -1) /
          (props.good + props.bad + props.neutral)
        }
      />
      <StatisticLine
        text='Positive'
        value={props.good / (props.good + props.bad + props.neutral)}
      />
    </table>
  );
};

const StatisticLine = (props) => {
  if (props.text === 'Positive') {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.value} %</td>
      </tr>
    );
  }

  return (
    <tr>
      <td>{props.text}</td>
      <td>{props.value}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const incrementGood = () => {
    setGood(good + 1);
  };

  const incrementNeutral = () => {
    setNeutral(neutral + 1);
  };
  const incrementBad = () => {
    setBad(bad + 1);
  };

  return (
    <div>
      <Header title='Give Feedback' />
      <Button handleClick={incrementGood} text='Good' />
      <Button handleClick={incrementNeutral} text='Neutral' />
      <Button handleClick={incrementBad} text='Bad' />
      <Header title='Statistics' />
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        allValue={good + bad + neutral}
      />
    </div>
  );
};

export default App;
