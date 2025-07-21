import { use, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <div>
    <h1>Hello i am rutuja</h1>
    {<UserName/>}
    </div>
  )
}



function UserName(){
  return <p>I am fron taharabad</p>

}

export default App
