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

const Courses = (props) => {
  const courses = props.courses

  let courseList = []
  for (let i=0; i < courses.length; i++) {
    courseList.push(i)
  }

  console.log('Test2', courseList)

  console.log('Courseid=1:', courses[0])
  console.log('Courseid=2:', courses[1])


  return (
    <div>
      <Course course={courses[0]} />
      <Course course={courses[1]} />
    </div>
  )
}

const App = () => {
  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ]

  return (
    <div>
      <Courses courses={courses} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('root'))