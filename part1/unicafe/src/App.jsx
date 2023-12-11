import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Total = (props) => <p>{props.name} {props.total}</p>

const Title = (props) => <h1 className="text-lg font-semibold">{props.title}</h1>

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
    <Title title="give feedback"/>
      <Button handleClick={() => setGood(good + 1)} text="good" />
      <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button handleClick={() => setBad(bad + 1)} text="bad" />

    <Title title="statistics"/>
    <Total name="good" total={good}/>
    <Total name="neutral" total={neutral}/>
    <Total name="bad" total={bad}/>
    <p>all {good + neutral + bad}</p>
    <p>average {(good - bad) / (good + neutral + bad)}</p>
    <p>positive {good / (good + neutral + bad) * 100}%</p>
    </div>
  )
}

export default App