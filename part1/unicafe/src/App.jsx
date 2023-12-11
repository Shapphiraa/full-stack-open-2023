import { useState } from 'react'

const Button = (props) => <button onClick={props.handleClick}>{props.text}</button>

const StatisticLine = (props) => <p>{props.name} {props.value}</p>

const Title = (props) => <h1 className="text-lg font-semibold">{props.title}</h1>

const Statistics = (props) => (
  <div>
  <StatisticLine name="good" value={props.good}/>
  <StatisticLine name="neutral" value={props.neutral}/>
  <StatisticLine name="bad" value={props.bad}/>
  <StatisticLine name="all" value={props.allClicks}/>
  <StatisticLine name="average" value={(props.good - props.bad) / props.allClicks}/>
  <StatisticLine name="positive" value={props.good / props.allClicks * 100 + "%"}/>
  </div>
)

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [allClicks, setAllClicks] = useState(0)

  return (
    <div>
    <Title title="give feedback"/>
      <Button handleClick={() => {
        setGood(good + 1)
        setAllClicks(allClicks + 1)}
        } text="good" />
      <Button handleClick={() => {
        setNeutral(neutral + 1)
        setAllClicks(allClicks + 1)}
      } text="neutral" />
      <Button handleClick={() => {
        setBad(bad + 1)
        setAllClicks(allClicks + 1)}
      } text="bad" />


    <Title title="statistics"/>
    {allClicks ? <Statistics good={good} neutral={neutral} bad={bad} allClicks={allClicks}/> : "No feedback given"}
    
    </div>
  )
}

export default App