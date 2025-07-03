import './App.css'
import {useState} from 'react'

function App() {
  const [counter,setCounter]=useState(15)
  // let counter=5
  const addValue=()=>{

    counter=counter+1;
  }
 

  return (
    <>
     <h1>Chai aur React</h1>
     <h2>Counter value:{counter}</h2>
     <button onClick={addValue}>Add value</button>
     <br/>
     <button>Remove value</button>
    </>
  )
}

export default App
