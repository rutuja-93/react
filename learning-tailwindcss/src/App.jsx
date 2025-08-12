import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
  <>
<h1 className=" text-black p-2 text-center font-bold hover:bg-blue-700 ">Hello there</h1>
<div className='h-50 w-50 bg-green-400 hover:bg-yellow-200'></div>
<br /><br />

{/* responsiveness using tailwindcss */}

<div className='bg-blue-400 p-8 flex flex-col gap-8 md:flex-row'>
<div className='w-full h-48 bg-slate-900'></div>
<div className='w-full h-48 bg-slate-900'></div>

</div>
</>
  )
}

export default App
