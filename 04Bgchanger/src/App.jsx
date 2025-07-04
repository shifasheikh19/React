import { useState } from 'react'
function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor:color}}
    >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 ">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button onClick={()=>setColor("Red")} className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"red"}}>Red
        </button>
        <button onClick={()=>setColor("Green")}className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"green"}}>Green
        </button>
        <button onClick={()=>setColor("Blue")}className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"blue"}}>Blue
        </button>
        <button onClick={()=>setColor("Purple")}className="outline-none px-4 rounded-full text-white shadow-lg"
        style={{backgroundColor:"purple"}}>Purple
        </button>
        
        
      </div>
    </div>
      

    </div>
  )
}

export default App
