import { Fragment, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

/*
  날짜 : 2025.06.09.
  이름 : 김태경
  내용 : 2장 리액트 JSX

  <JSX 기본>

  */

function App() {
  let num1 = 1;
  let num2 = 2;

  const title = 'Hello React!';
  const name = null;
  const isValue = false;

  const result = function(){
    if(isValue){
      return <p>True 입니다.</p>
    }else{
      return <p>false 입니다.</p>
    }
  }

  const cities = ['서울', '대전', '대구', '부산', '광주'];
  const users = [
    {uid:'a101', name:'김유신', age:23, addr:'김해'},
    {uid:'a102', name:'김춘추', age:21, addr:'경주'},
    {uid:'a103', name:'장보고', age:33, addr:'완도'},
    {uid:'a104', name:'강감찬', age:43, addr:'서울'},
    {uid:'a105', name:'이순신', age:53, addr:'부산'},
  ]

  return (
    <>
      <h3>2장 React JSX</h3>

      <h4>출력</h4>
      <p>num1 : {num1}</p>
      <p>num2 : {num2}</p>
      <p>title : {title}</p>
      <p>name : {name}</p>
      <p>isValue : {isValue}</p>

      <h4>조건부 연산자</h4>
      <p>
        {num1 > num2 ? (
          <span>num1은 num2보다 크다.</span>
        ) : (
          <span>num2는 num1보다 크다</span>
        )}
      </p>
      <p>{name === null && <span>name은 null입니다.</span>}</p>
      <p>{name || <span>name은 null입니다.</span>}</p>
        
      {isValue ? (
        <p>isValue 참입니다.</p>
      ) : (
        <p>isValue 거짓 입니다.</p>
      )}

      {result()}
      
      <h4>반복 연산자</h4>
      <ul>
        {cities.map((city, index)=>(
          <li className="city" key={index}>{city}</li>
        ))}
      </ul>

      {users.map((user)=>(
        <p className = "user" key={user.uid}>
          {user.uid}, {user.name}, {user.age}, {user.addr}
        </p>
      ))}


      <h4>JSX Fragment</h4>
      {/* 주석은 이렇게. Fragment는 태그요소를 감싸는 가상 태그 */}
      <Fragment>
        <p>안녕하세요.</p>
        <p>반갑습니다.</p>
      </Fragment>
      <>
        <p>안녕하세요.</p>
        <p>반갑습니다.</p>
      </>


      <h4>JSX 이벤트</h4>
      
      <h4>JSX 스타일</h4>

    </>
  )
}

export default App
