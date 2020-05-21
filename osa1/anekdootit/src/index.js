import React, { useState } from 'react'
import ReactDOM from 'react-dom'

const Button = (props) => (
  <button onClick={props.handleClick}>
    {props.text}
  </button>
)

const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [mostVotes, setMostVotes] = useState(0)
  const [points, setPoints] = useState([0, 0, 0, 0, 0, 0])

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function vote() {
    const pointsTemp = [...points];
    pointsTemp[selected] += 1;
    return pointsTemp;
  }

  function maxIndex() {
    var index = points.findIndex(x => x === Math.max(...points));
    return index;
  }

  function voteButton() {
    setPoints(vote);
    setMostVotes(maxIndex);
  }
  
  return (
    <div>
      <h1>Anecdote of the day</h1>
      <p>"{props.anecdotes[selected]}"</p>
      <p>This anecdote has {points[selected]} votes!</p>
      <Button handleClick={() => voteButton() } text='Vote for this anecdote' />
      <Button handleClick={() => setSelected(getRandomInt(6) )} text='Next anecdote' />
      <h1>Anecdote with most votes</h1>
      <p>"{props.anecdotes[mostVotes]}"</p>
      <p>The winning anecdote has {points[mostVotes]} votes!</p>
      <Button handleClick={() => maxIndex() } text='Test' />
    </div>
  )
}

const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)