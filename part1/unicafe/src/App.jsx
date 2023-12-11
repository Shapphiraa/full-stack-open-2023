import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const Total = (props) => <p>{props.name} {props.total}</p>

const Title = (props) => <h1 className="text-lg font-semibold">{props.title}</h1>

const Extra = (props) => <p>{props.name} {props.calculation}</p>

const Statistics = (props) => (
  <div>
  <Title title="statistics"/>
  <Total name="good" total={props.good}/>
  <Total name="neutral" total={props.neutral}/>
  <Total name="bad" total={props.bad}/>
  <Extra name="all" calculation={props.good + props.neutral + props.bad}/>
  <Extra name="average" calculation={(props.good - props.bad) / (props.good + props.neutral + props.bad)}/>
  <Extra name="positive" calculation={props.good / (props.good + props.neutral + props.bad) * 100 + "%"}/>
  </div>
)

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

    <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App