import { useState } from "react";

const InputChecker = ({ allClicks }) => {
  if (allClicks.length === 0) {
    return <h4>No feedback given</h4>;
  }
};

const PositiveNum = ({ allClicks, text }) => {
  const count = allClicks.reduce((count, num) => {
    if (num === 1) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
  return (
    <tr>
      <td>{text}</td> <td>{count}</td>
    </tr>
  );
};

const NeutralNum = ({ allClicks, text }) => {
  const count = allClicks.reduce((count, num) => {
    if (num === 0) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
  return (
    <tr>
      <td>{text}</td> <td>{count}</td>
    </tr>
  );
};

const NegativeNum = ({ allClicks, text }) => {
  const count = allClicks.reduce((count, num) => {
    if (num === -1) {
      return count + 1;
    } else {
      return count;
    }
  }, 0);
  return (
    <tr>
      <td>{text}</td> <td>{count}</td>
    </tr>
  );
};

const SumCount = ({ allClicks, text }) => {
  let sum = 0;
  allClicks.forEach((element) => {
    return sum++;
  });
  return (
    <tr>
      <td>{text}</td> <td>{sum}</td>
    </tr>
  );
};

const Average = ({ allClicks, text }) => {
  const sumForAvg = allClicks.reduce((total, num) => {
    return total + num;
  }, 0);
  let avg = (sumForAvg / allClicks.length).toFixed(4);
  return (
    <tr>
      <td>{text}</td> <td>{avg}</td>
    </tr>
  );
};

const PositivePerc = ({ allClicks, text }) => {
  let positive = allClicks.filter((click) => click === 1);
  let total = allClicks.length;
  let percentage = ((positive.length / total) * 100).toFixed(2);
  return (
    <tr>
      <td>{text}</td> <td>{percentage}%</td>
    </tr>
  );
};

const Button = ({ handleClick, text }) => {
  return <button onClick={handleClick}>{text}</button>;
};

//- - - - - - - - - - - - - - - - - - - - - - - - -||
//_________________Main App________________________||
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
  //--------------------------------
  return (
    <div>
      <h1>Give feedback</h1>

      <Button handleClick={handlePositiveClick} text="positive" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <h2>Statistics</h2>
      <InputChecker allClicks={allClicks} />
      {allClicks.length === 0 ? null : (
        <table>
          <PositiveNum allClicks={allClicks} text="Good" />
          <NeutralNum allClicks={allClicks} text="Neutral" />
          <NegativeNum allClicks={allClicks} text="Bad" />
          <SumCount allClicks={allClicks} text="Total" />
          <Average allClicks={allClicks} text="Average" />
          <PositivePerc allClicks={allClicks} text="Positive" />
        </table>
      )}
    </div>
  );
};

export default App;
