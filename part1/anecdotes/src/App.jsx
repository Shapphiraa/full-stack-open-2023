import { useState } from 'react'

const Button = (props) => <button onClick={props.onClick}>{props.name}</button>

const Title = (props) => <h1>{props.name}</h1>

const Anecdote = (props) => <p>{props.text}</p>

const Votes = (props) => <p>has {props.points} votes</p>

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState(Array(anecdotes.length).fill(0))

  const handleNext = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const handleVote = () => {
    const copy = [...points]

    copy[selected] += 1

    setPoints(copy)
  }

  return (
    <div>
      <Title name="Anecdote of the Day"/>
      <Anecdote text={anecdotes[selected]}/>
      <Votes points={points[selected]} />
      <Button onClick={handleVote} name="vote"></Button>
      <Button onClick={handleNext} name="next anecdote"></Button>

      <Title name="Anecdote with most votes"/>
      <Anecdote text={anecdotes[points.indexOf(Math.max(...points))]}/>
      <Votes points={points[points.indexOf(Math.max(...points))]} />
    </div>
  )
}

export default App