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

const Part = (props) => {
  return (
    <div>
      <p>
        {props.name} {props.exercises}
      </p>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
      <Part name={props.part1name} exercises={props.part1exercises} />
      <Part name={props.part2name} exercises={props.part2exercises} />
      <Part name={props.part3name} exercises={props.part3exercises} />
    </div>
  )
}

const Total = (props) => {
  return (
    <div>  
      <p>
        Number of exercises {props.part1exercises + props.part2exercises + props.part3exercises}
      </p>
    </div>
  )
}

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
        <Header course={course} />  
        <Content part1name={part1.name} part2name={part2.name} part3name={part3.name} part1exercises={part1.exercises} part2exercises={part2.exercises} part3exercises={part3.exercises} />
        <Total part1exercises={part1.exercises} part2exercises={part2.exercises} part3exercises={part3.exercises} />   
    </>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))