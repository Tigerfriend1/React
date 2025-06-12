import { BrowserRouter } from "react-router-dom";
import "./App.css";
import UserMainComponent from "./components/UserMainComponent";

function App() {
  return (
    <>
      <h3>7.React HTTP 통신</h3>

      <BrowserRouter>
        <UserMainComponent />
      </BrowserRouter>
    </>
  );
}

export default App;
