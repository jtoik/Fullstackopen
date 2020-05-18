import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => 
<tr>
  <td>{props.name}</td>
  <td>{props.value}</td>
</tr>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const StatisticLine = (props) => {
  return (
    <tr>
      <td>{props.name}</td> 
      <td>{props.value} {props.unit}</td>
    </tr>
  )
}

const Stats = (props) => {
  const total=(props.good + props.neutral + props.bad)
  const averagescore=( (props.good * 1) + (props.bad * -1) ) / total
  const percentage=100 * (props.good / total)

  if ( total === 0 ) {
    return (
      <div>
        <h1>Stats</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  
  
  return (
    <div>
      <h1>Stats</h1>
      <table>
      <tbody>
        <Display name='Good:' value={props.good} />
        <Display name='Neutral:' value={props.neutral} />
        <Display name='Bad:' value={props.bad} />
        <StatisticLine name='Total reviews:' value={total} unit='' />
        <StatisticLine name='Average rating:' value={averagescore} unit='' />
        <StatisticLine name='Positive ratings:' value={percentage} unit='%' />
      </tbody>
      </table>    
    </div>
  )
  
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>Give feedback</h1>
      <Button handleClick={() => setGood(good +1)} text='Good' />
      <Button handleClick={() => setNeutral(neutral + 1)} text='Neutral' />
      <Button handleClick={() => setBad(bad + 1)} text='Bad' />
      <Stats good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

ReactDOM.render(<App />, 
  document.getElementById('root')
)