import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return(
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Contents = (props) => {
  return(
    <div>
      <p>{props.part} {props.number}</p>
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
  const part1 = 'Basics of React'
  const exercises1 = 8
  const part2 = 'Using props'
  const exercises2 = 10
  const part3 = 'Component states'
  const exercises3 = 12

  return (
    <div>
      <Header course={course}/>
      <Contents part = {part1} number = {exercises1}/>
      <Contents part = {part2} number = {exercises2}/>
      <Contents part = {part3} number = {exercises3}/>
      <Total exercises1 = {exercises1} exercises2 = {exercises2} exercises3 = {exercises3} />
    </div>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
