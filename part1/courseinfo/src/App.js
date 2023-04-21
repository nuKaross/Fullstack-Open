const Header = ({ course }) => {
  return (
    <div>
      <h1>{course.name}</h1>
    </div>
  );
};

const Content = ({ course }) => {
  return (
    <div>
      {course.parts.map((part, index) => (
        <p key={index}>
          {part.name} contains {part.exercises} exercises.
        </p>
      ))}
    </div>
  );
};

const Total = ({ course }) => {
  const totalExercises = course.parts.reduce(
    (total, part) => total + part.exercises,
    0
  );
  return <div>Total number of exercises is {totalExercises}</div>;
};

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
      },
      {
        name: "Using props to pass data",
        exercises: 7,
      },
      {
        name: "State of a component",
        exercises: 14,
      },
    ],
  };

  return (
    <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
    </div>
  );
};

export default App;
