const Header = (header) =>{
  return(
  <div>
   <h1>{header.course}</h1>
  </div>
  )
}

const Content = (props) =>{
  return(
  <div>
  <h2>Contents of lesson:</h2>
  <p> {props.content[0]} contains {props.numberOfEx[0]} exercises.</p>
  <p> {props.content[1]} contains {props.numberOfEx[1]} exercises.</p>
  <p> {props.content[2]} contains {props.numberOfEx[2]} exercises.</p>
  </div>
  )
}

const Total = (props) =>{
  return(
  <div>
   Total number of exercises: {props.numberOfEx[0] + props.numberOfEx[1] + props.numberOfEx[2]}
  </div>
  )
}


const App = () => {
  const course = 'Half Stack application development'
  const content = ['Fundamentals of React','Using props to pass data','State of a component']
  const numberOfEx = [10,7,14]

  return (
    <div>
    <Header course = {course}/>  
    <Content content = {content} numberOfEx = {numberOfEx}/>
    <Total numberOfEx = {numberOfEx}/> 
    </div>
  )
}


export default App;
