import React from 'react'
import ReactDOM from 'react-dom'

const Course = ({course}) => {
  return(
    <div>
      <Header course = {course.name}/>
      <Contents parts = {course.parts}/>
    </div>
  )
}
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
      <p>{props.nimi} {props.number}</p>
    </div>
  )
}
const Contents = ({parts}) => {
  return (
    <div>
      {parts.map(part => <Part key = {part.id} nimi = {part.name} number = {part.exercises}/>)}
    </div>
  )
}

const App = () => {
  const course = {
    name: 'Superadvanced web and mobile programming',
    parts: [
      {
        name: 'Basics of React',
        exercises: 8,
        id: 1
      },
      {
        name: 'Using props',
        exercises: 10,
        id: 2
      },
      {
        name: 'Component states',
        exercises: 12,
        id: 3
      }
    ]
  }
  return (
    <div>
      <Course course={course} />
    </div>
  )
}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
