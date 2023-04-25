import { useState } from "react";

const InputChecker = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <h4>No feedback given</h4>;
  }
};

const PositiveNum = ({ allClicks }) => {
  const count = allClicks.reduce((count, num) => {
    if (num === 1) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
  return <p>Positive: {count}</p>;
};

const NeutralNum = ({ allClicks }) => {
  const count = allClicks.reduce((count, num) => {
    if (num === 0) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
  return <p>Neutral: {count}</p>;
};

const NegativeNum = ({ allClicks }) => {
  const count = allClicks.reduce((count, num) => {
    if (num === -1) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
  return <p>Negative: {count}</p>;
};

const SumCount = ({ allClicks }) => {
  let sum = 0;
  allClicks.forEach((element) => {
    return sum++;
  });
  return <p>Total: {sum}</p>;
};

const Average = ({ allClicks }) => {
  const sumForAvg = allClicks.reduce((total, num) => {
    return total + num;
  }, 0);
  let avg = sumForAvg / allClicks.length;
  return <p>Average: {avg}</p>;
};

const PositivePerc = ({ allClicks }) => {
  let positive = allClicks.filter((click) => click === 1);
  let total = allClicks.length;
  let percentage = ((positive.length / total) * 100).toFixed(2);
  return <p>Positive: {percentage}%</p>;
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const [allClicks, setAll] = useState([]);

  const handlePositiveClick = () => {
    setGood(good + 1);
    setAll(allClicks.concat(1));
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(allClicks.concat(0));
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(allClicks.concat(-1));
  };

  return (
    <div>
      <h1>Give feedback</h1>

      <Button handleClick={handlePositiveClick} text="positive" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <h2>Statistics</h2>
      <InputChecker allClicks={allClicks} />
      {allClicks.length === 0 ? null : (
        <>
          <PositiveNum allClicks={allClicks} />
          <NeutralNum allClicks={allClicks} />
          <NegativeNum allClicks={allClicks} />
          <SumCount allClicks={allClicks} />
          <Average allClicks={allClicks} />
          <PositivePerc allClicks={allClicks} />
        </>
      )}
    </div>
  );
};

export default App;
