import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import RouterMainComponent from "./components/sub1/RouterMainComponent";
import { BrowserRouter } from "react-router-dom";
import RouterParamComponent from "./components/sub2/RouteParamComponent";

/*
  React Router 의존성 설치
  > npm install react-router-dom
*/

function App() {
  return (
    <>
      <h3>5. 리액트 라우터</h3>
      {/* React Router를 사용하기 위해 BrowserRouter로 감싸줍니다. */}
      <BrowserRouter>
        <RouterMainComponent />
      </BrowserRouter>
      <BrowserRouter>
        <RouterParamComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
