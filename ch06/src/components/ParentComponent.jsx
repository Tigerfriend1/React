import React, { useContext } from "react";
import CounterContext from "../contexts/CounterContext";
import ChildComponent from "./ChildComponent";

const ParentComponent = () => {
  const { count, increment, decrement, reset } = useContext(CounterContext);

  return (
    <div className="ParentComponent">
      <h4>ParentComponent</h4>
      <p>count : {count}</p>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={() => reset(1)}>초기화</button>
      <ChildComponent />
    </div>
  );
};

export default ParentComponent;
