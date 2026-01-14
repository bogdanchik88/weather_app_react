import { useState } from 'react'
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='flex justify-center items-center h-[100vh]'>
        <h1 className='text-2xl text-rose-700 hover:text-violet-700 hover:scale-[120%] md:text-4xl'>Tailwind connected</h1>
      </div>
    </>
  )
}

export default App
