import "./App.css";
import ParentComponent from "./components/ParentComponent";
import ZParentComponent from "./components/ZParentComponent";

function App() {
  return (
    <>
      <h3>6. 리액트 상태 관리</h3>

      <h4>Context API 실습</h4>
      <ParentComponent />

      <h4>Zustand 실습</h4>
      <ZParentComponent />
    </>
  );
}

export default App;
