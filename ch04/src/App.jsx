import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import UseRefComponent from "./components/UseRefComponent";
import UseStateComponent from "./components/UseStateComponent";
import UseReducerComponent from "./components/UseReducerComponent";
import UseMemoComponent from "./components/useMemoComponent";
import UseCallbackComponent from "./components/useCallbackComponent";
import UseEffectComponent from "./components/UseEffectComponent";

function App() {
  return (
    <>
      <h3>4.리액트 훅</h3>
      <UseRefComponent />
      <UseRefComponent />
      <UseStateComponent />
      <UseReducerComponent />
      <UseMemoComponent />
      <UseCallbackComponent />
      <UseEffectComponent />
    </>
  );
}

export default App;
