import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css' 
import Testing from './Testing'
import UserProvider from './UserProvider'
import Home from './Home'
import DiceRolling from './RollDice/DiceRolling'


function App() {
  return(
    <>
    {/* <Home/>
    <UserProvider/> */}
    <DiceRolling/>

    </>
  )
  
}

export default App
