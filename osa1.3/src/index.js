import React from 'react';
import ReactDOM from 'react-dom';

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Part = (props) => {
  return(
    <div>
      <p>{props.part} {props.number}</p>
    </div>
  )
}
const Contents = (props) => {
  return (
    <div>
      <Part part = {props.part1} number = {props.number1}/>
      <Part part = {props.part2} number = {props.number2}/>
      <Part part = {props.part3} number = {props.number3}/>
    </div>
  )
}
const Total = (props) => {
  return(
    <div>
      <p>Total {props.exercises1 + props.exercises2 + props.exercises3} exercises.</p>
    </div>
  )
}
const App = () => {
  const course = 'Superadvanced web and mobile programming'
  const part1 = {
    name: 'Basics of React',
    exercises: 8
  }
  const part2 = {
    name: 'Using props',
    exercises: 10
  }
  const part3 = {
    name: 'Component states',
    exercises: 12
  }

  return (
    <div>
      <Header course={course}/>
      <Contents part1 = {part1.name} number1 = {part1.exercises} part2 = {part2.name} number2 = {part2.exercises} part3 = {part3.name} number3 = {part3.exercises}/>
      <Total exercises1 = {part1.exercises} exercises2 = {part2.exercises} exercises3 = {part3.exercises} />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
