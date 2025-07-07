import { useState } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [NumberAllowed, setNumberAllowed]=usestate(false);
  const [charAllowed,setcharAllowed]=usestate(false);
  const [password,setPassword]=useState("")

  const passwordGenerator=()=>{
    const pass="";
    const str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";


  }

  return (
    <>
     <h1 className="text-4xl text-center">Password Generator</h1>
    </>
  )
}

export default App
