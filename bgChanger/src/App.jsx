import {useState} from 'react'

function App() {
  const [color, setColor] = useState("pink")

  return (
    <>
   <div className="w-full h-screen duration-200 " style={{backgroundColor : color}} >
  
  <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-0 ">
    <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full 3xl">
      <button onClick={()=> setColor('red')} className="outline-none rounded-full text-white shadow-lg px-4 py-1" style={{backgroundColor : "red"}}>red</button>
      <button onClick={()=> setColor('green')} className="outline-none rounded-full text-white shadow-lg px-4 py-1" style={{backgroundColor : "green"}}>green</button>
      <button onClick={()=> setColor('blue')} className="outline-none rounded-full text-white shadow-lg px-4 py-1" style={{backgroundColor : "blue"}}>blue</button>
      <button onClick={()=> setColor('olive')} className="outline-none rounded-full text-white shadow-lg px-4 py-1" style={{backgroundColor : "olive"}}>olive</button>
    </div>
   
  </div>
   </div>
    </>
  )
}

export default App
