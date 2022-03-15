import Content from './content';
import Total from './total';
import Header from './header';

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: 
    [
      {
        name: 'Fundamentals of React',
        exercises1: 10
      }, 

      {
        name: 'Using props to pass data',
        exercises2: 7
      },

      {
        name: 'State of a component',
        exercises3: 14
      }
    ]
  }


  return (
    <div className="App">
      <Header course ={course}/>
      <Content parts={parts} />
      <Total parts={parts}/>
    </div>
  );
}

export default App;
