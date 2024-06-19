import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'
function App() {
 let myObj = {
  username:"shraddha",
  age:21
 }

  return (
    <>
     <h1 className='bg-green-700 text-black p-4 rounded-xl mb-4'>tailwind test</h1>
     <Card username="chaiaurcode" btnText = "click me"/>
     <Card username="shraddha" btnText ="visit me" />

    </>
  )
}

export default App
