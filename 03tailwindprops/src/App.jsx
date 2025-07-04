import { useState } from 'react'
import './index.css';
import Card from "./components/Card";
import './App.css'


function App() {
  const [count, setCount] = useState(0)


  return (
    <>
     <Card username="shifa ltd" text="Wanna be indepent ans successful"/>
     <Card username="hitesh ltd" />
    </>
  )
}

export default App
