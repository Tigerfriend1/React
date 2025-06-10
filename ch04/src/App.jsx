import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseRefComponent from './components/UseRefComponent'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h3>4.리액트 훅</h3>
      <UseRefComponent />
      <UseRefComponent />
    </>
  )
}

export default App
