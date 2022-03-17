import { useState } from "react";



const App = () => {

  // Save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
 
  const buttonClicked = (value) => {
    if (value == "good") {
      const handler = () => setGood(good+1)
      return handler
    }
    if (value == "neutral") {
      const handler = () => setNeutral(neutral+1)
      return handler
    }
    if (value = "bad") {
      const handler = () => setBad(bad+1)
      return handler
    }
    
  }

  return (
    <div className="App">
      <h1>Give feedback</h1>
      <div>
        <button type="button" onClick={buttonClicked("good")}>good</button>
        <button type="button" onClick={buttonClicked("neutral")}>neutral</button>
        <button type="button" onClick={buttonClicked("bad")}>bad</button>
      </div>
      <Stat good={good} neutral={neutral} bad={bad}/>
    </div>
  );
}

const Stat = (props) => {
  if (props.good!=0 || props.neutral!=0 || props.bad!=0) {
    return(
      <div>
          <h2>statistics</h2>

          <p>good: {props.good}</p>
          <p>neutral: {props.neutral}</p>
          <p>bad: {props.bad}</p>
          <p>all: {props.good+props.neutral+props.bad}</p>
          <br></br>
          <p>average: {(props.good+props.neutral+props.bad)/3}</p>
          <p>positive: {props.good/(props.good+props.neutral+props.bad)*100} %</p>
      </div>
  );
  }
  else {
    return(
      <div>
        <p>No feedback given.</p>
      </div>
    )
  }
  
}

export default App;
