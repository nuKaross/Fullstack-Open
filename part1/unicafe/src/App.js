import { useState } from "react";

const Stats = ({ allClicks }) => {
  let resultsPNB = [0, 0, 0];

  allClicks.forEach((element) => {
    if (element === "P") {
      return resultsPNB[0]++;
    } else if (element === "N") {
      return resultsPNB[1]++;
    } else if (element === "B");
    return resultsPNB[2]++;
  });

  return (
    <div>
      <p>Positive: {resultsPNB[0]}</p>
      <p>Neutral: {resultsPNB[1]}</p>
      <p>Bad: {resultsPNB[2]}</p>
    </div>
  );
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
    setAll(allClicks.concat("P"));
  };

  const handleNeutralClick = () => {
    setNeutral(neutral + 1);
    setAll(allClicks.concat("N"));
  };

  const handleBadClick = () => {
    setBad(bad + 1);
    setAll(allClicks.concat("B"));
  };

  return (
    <div>
      <h1>Give feedback</h1>

      <Button handleClick={handlePositiveClick} text="positive" />
      <Button handleClick={handleNeutralClick} text="neutral" />
      <Button handleClick={handleBadClick} text="bad" />

      <h2>Statistics</h2>
      <Stats allClicks={allClicks} />
    </div>
  );
};

export default App;
