import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UseRefComponent from './components/UseRefComponent'
import UseStateComponent from './components/UseStateComponent'

function App() {
  return (
    <>
      <h3>4.리액트 훅</h3>
      <UseRefComponent />
      <UseRefComponent />

      <UseStateComponent />
    </>
  )
}

export default App
