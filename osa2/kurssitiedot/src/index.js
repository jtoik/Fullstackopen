import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
  return (
    <div>
      <h1>
        {props.course}
      </h1>
    </div>
  )
}

const Content = (props) => {
  const parts = props.parts.map(parts => 
  <p key={parts.id} >{parts.name} {parts.exercises}</p> )
  
  return (
    <div>
      {parts}
    </div>
  )
}

const Total = (props) => {
  const parts = props.parts.map(parts => parts.exercises)
  console.log(parts)
  const total = parts.reduce((x, y) => x+y)
  console.log(total)
  
  return (
    <div>  
      <p>
        Number of exercises {total}
      </p>
    </div>
  )
}

const Course = (props) => {
  const course=props.course
  return (
    <>
        <Header course={course.name} />  
        <Content parts={course.parts} />
        <Total parts={course.parts} />   
    </>
  )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        id: 1,
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        id: 2,
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        id: 3,
        name: 'State of a component',
        exercises: 14
      }
    ]
  }

  return (
    <div>
      <Course course={course} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))