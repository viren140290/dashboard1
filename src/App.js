import React, {useState} from 'react';
import Hello from './sayHello';
import Tweet from './Tweet'
import WorkFlowForm from './workflowform'

function App() {

  const [count, setCount] = useState(0)

  const increments = () => {
    setCount(count + 1);
  }

  const sayHello = () => {
    alert("hello")
  }
  return(
    <div className="app">
      <WorkFlowForm/>
    </div>
  )
}

export default App;
