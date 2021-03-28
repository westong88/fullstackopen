import React from 'react'

const App = () => {
  const Header = ({ course }) => {
    return (
      <p>{course}</p>
    )
  }

  const Content = ({ parts }) => {
    return (
      parts.map(part => <Part name={part.name} exercises={part.exercises} />)
    )
  }

  const Part = ({ name, exercises }) => {
    return (
      <p>{name} {exercises}</p>
    )
  }

  const Total = ({ exercises }) => {
    return (
      <p>Number of exercises {exercises.reduce((a, b) => a + b, 0)}</p>
    )
  }
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  };
  const { name, parts } = course;
  const ex = parts.map(part => part.exercises)
  return (
    <div>
      <Header course={name} />
      <Content parts={parts} />
      <Total exercises={ex} />
    </div>
  )
}

export default App


