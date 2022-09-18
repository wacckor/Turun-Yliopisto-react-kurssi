import React from 'react'


const Course = ({course}) => {
  return(
    <div>
      <Header course = {course.name}/>
      <Contents parts = {course.parts}/>
      <Total exercises = {course.parts.map(part => part.exercises)}/>
    </div>
  )
}

const Total = ({exercises}) => {
  //console.log(exercises);
  let sum = 0;
  exercises.map(total => sum += total);
  return(
    <div>
      <p>Total: {sum}</p>
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

export default Course