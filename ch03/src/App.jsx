import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ClassTypeComponents from './components/ClassTypeComponent'
import FunctionTypeComponent from './components/FunctionTypeComponent'
import ParentComponent from './components/ParentComponent'
import PropsComponent from './components/PropsComponent'
import ContentComponent from './components/ContentComponent'
import LifeCycleComponent from './components/LifeCycleComponent'

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
      
      {/*<h4>컴포넌트 프로퍼티</h4>*/}
      <PropsComponent title="제목입니다." message="내용입니다."/>

      {/*<h4>내용을 갖는 컴포넌트</h4>*/}
      <ContentComponent>
        <h4>ContentComponent 제목입니다. </h4>
        <p>이곳은 ContentComponent의 children입니다.</p>
      </ContentComponent>

      {/*<h4>컴포넌트 생명주기</h4>*/}
      <LifeCycleComponent/>
    </>
  )
}

export default App
