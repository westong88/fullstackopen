import React from 'react'

const Course = ({course}) => {
    const Header = ({ course }) => {
        return (
            <h1>{course}</h1>
        )
    }
    
    const Content = ({ parts }) => {
    return (
        parts.map(part => <Part name={part.name} exercises={part.exercises} key={part.id}/>)
    )
    }

    const Part = ({ name, exercises }) => {
    return (
        <p>{name} {exercises}</p>
    )
    }

    const Total = ({ exercises }) => {
    return (
        <b>total of {exercises.reduce((a, b) => a + b, 0)} exercises</b>
    )
    }
    const name = course.name
    const parts = course.parts
    const ex = parts.map(part => part.exercises)
    return (
        <div>
          <Header course={name} />
          <Content parts={parts} />
          <Total exercises={ex} />
        </div>
      )
}

export default Course