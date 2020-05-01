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

  const sum = (p1, p2) => {
    console.log(p1)
    console.log(p2)
    return p1 + p2
  }
  
  const Total = sum(part1.exercises, part2.exercises, part3.exercises)
  console.log(Total)

  return (
    <div>
        <Header course={course} />  
        <p>
          {part1.name} {part1.exercises}
        </p>
        <p>
          {part2.name} {part2.exercises}
        </p>
        <p>
          {part3.name} {part3.exercises}
        </p>
        <p>
          Number of exercises {Total}
        </p>
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))