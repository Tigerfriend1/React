import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassTypeComponents from './components/ClassTypeComponent'
import FunctionTypeComponent from './components/FunctionTypeComponent'
import ParentComponent from './components/ParentComponent'

/*
  3. 리액트 컴보넌트 실습
*/

function App() {
  

  return (
    <>
      <h3>3. 리액트 컴포넌트 실습</h3>

      {/*<h4>클래스형 컴포넌트</h4>*/}
      <ClassTypeComponents/>
      
      {/*<h4>함수형 컴포넌트</h4>*/}
      <FunctionTypeComponent/>
      
      {/*<h4>부모자식 컴포넌트</h4>*/}
      <ParentComponent/>
      
      <h4>컴포넌트 프로퍼티</h4>
      
      <h4>컴포넌트 생명주기</h4>
      
    </>
  )
}

export default App
