import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Display = props => <div>{props.good} {props.good}</div>

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const Total = (props) => {
  return (
    <div>
      Total reviews: {props.good + props.neutral + props.bad}
    </div>
  )
}

const Average = (props) => {
  return (
    <div>
      Average rating: {((props.good * 1) + (props.bad * -1)) / (props.good + props.neutral + props.bad)}
    </div>
  )
}

const Percentage = (props) => {
  return (
    <div>
      Positive ratings: {100 * (props.good / (props.good + props.neutral + props.bad))}%
    </div>
  )
}

const Statistics = (props) => {
  return(
    <div>
      <h1>Stats</h1>
      <Display name='Good:' value={props.good} />
      <Display name='Neutral:' value={props.neutral} />
      <Display name='Bad:' value={props.bad} />
      <br />
      <Total good={props.good} neutral={props.neutral} bad={props.bad} />
      <Average good={props.good} neutral={props.neutral} bad={props.bad} />
      <Percentage good={props.good} neutral={props.neutral} bad={props.bad} />
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
