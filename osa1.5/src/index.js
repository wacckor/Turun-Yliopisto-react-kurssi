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
  const course = {
    name: 'Superadvanced web and mobile programming',
    parts: [
      {
        name: 'Basics of React',
        exercises: 8
      },
      {
        name: 'Using props',
        exercises: 10
      },
      {
        name: 'Component states',
        exercises: 12
      }
    ]
  }

  return (
    <div>
      <Header course={course.name}/>
      <Contents part1 = {course.parts[0].name} number1 = {course.parts[0].exercises} 
                part2 = {course.parts[1].name} number2 = {course.parts[1].exercises} 
                part3 = {course.parts[2].name} number3 = {course.parts[2].exercises}/>
      <Total exercises1 = {course.parts[0].exercises} exercises2 = {course.parts[1].exercises} exercises3 = {course.parts[2].exercises} />
    </div>
  )
}
ReactDOM.render(
  <App />,
  document.getElementById('root')
)