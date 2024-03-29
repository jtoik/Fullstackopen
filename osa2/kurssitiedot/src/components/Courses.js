import React from 'react'

const Header = (props) => {
    return (
      <div>
        <h2>
          {props.course}
        </h2>
      </div>
    )
  }
  
  const Content = (props) => {
    const parts = props.parts.map(parts => 
    <p key={parts.id} >{parts.name} {parts.exercises}</p> )
      console.log('props in this are', props)
      console.log('parts is', parts)
  
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
          <b>Number of exercises {total}</b>
        </p>
      </div>
    )
  }
  
  const Course = (props) => {
    const course=props.course
  
    console.log('course is', course)
  
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
  
    console.log('props value is', props)
  
    return (
      <div>
        {courses.map(courses => 
          <Course key={courses.id} course={courses} />)}
      </div>
    )
  }

export default Courses