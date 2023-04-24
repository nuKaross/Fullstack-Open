import { useState } from "react";

// Feedback statistics
const Stats = ({ allClicks }) => {
  const resultsPNB = [0, 0, 0];
  //Counts each vote and puts it as a number
  //Index[0]= P, [1]=N, [2]=B
  allClicks.forEach((element) => {
    if (element === "P") {
      return resultsPNB[0]++;
    } else if (element === "N") {
      return resultsPNB[1]++;
    } else if (element === "B");
    return resultsPNB[2]++;
  });

  //All counts sum:
  const sum = resultsPNB.reduce((total, num) => total + num, 0);
  //Positive feedback percentage:
  const positiveFeedBack = (resultsPNB[0] / sum) * 100;
  //Returns avg feedback as if: good = 1, bad = -1:
  const avgFeedBack =
    (resultsPNB[0] - resultsPNB[2]) / (resultsPNB[0] + resultsPNB[2]);

  //What app renders:
  return (
    <div>
      <p>Positive: {resultsPNB[0]}</p>
      <p>Neutral: {resultsPNB[1]}</p>
      <p>Bad: {resultsPNB[2]}</p>
      <p>All results: {sum} </p>
      <p>
        Positive feedback: {isNaN(positiveFeedBack) ? 0 : positiveFeedBack}%
      </p>
      <p>Average feedback: {isNaN(avgFeedBack) ? 0 : avgFeedBack} </p>
    </div>
  );
};

//Reusable generic button
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
