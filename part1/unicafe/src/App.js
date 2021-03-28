import React, { useState } from 'react'

const Statistic = (props) => {
  return (<tr>
    <td>{props.text}</td>
    <td>{props.value}</td>
  </tr>)
}

const Statistics = (props) => {
  const total = getTotal(props.good, props.neutral, props.bad)
  if (total === 0) {
    return <p>No feedback given</p>
  }
  return (<table>
    <tbody>
      <Statistic text="good" value={props.good} />
      <Statistic text="neutral" value={props.neutral} />
      <Statistic text="bad" value={props.bad} />
      <Statistic text="all" value={getTotal(props.good, props.neutral, props.bad)} />
      <Statistic text="average" value={getAverage(props.good, props.neutral, props.bad)} />
      <Statistic text="positive" value={getPositivePercentage(props.good, props.neutral, props.bad)} />
    </tbody>
  </table>)
}

const getTotal = (good, neutral, bad) => {
  return good + neutral + bad
}

const getAverage = (good, neutral, bad) => {
  const total = getTotal(good, neutral, bad)
  if (total === 0) return 0
  return (good + -1 * bad) / total
}

const getPositivePercentage = (good, neutral, bad) => {
  const total = getTotal(good, neutral, bad)
  const p = good / total * 100
  const str = ""
  if (total === 0) return 0
  return str.concat(p, " %")
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <button onClick={() => setGood(good + 1)}>good</button>
      <button onClick={() => setNeutral(neutral + 1)}>neutral</button>
      <button onClick={() => setBad(bad + 1)}>bad</button>
      <h1>statistics</h1>
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App