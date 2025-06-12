import React, { use, useContext } from "react";
import CounterContext from "../contexts/CounterContext";
import ZChildComponent from "./ZChildComponent";
import useCountStore from "../stores/countStore";

const ZParentComponent = () => {
  const { count, increment, decrement, reset } = useCountStore();

  return (
    <div className="ZParentComponent">
      <h4>ZParentComponent</h4>
      <p>count : {count}</p>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
      <button onClick={() => reset(0)}>초기화</button>
      <ZChildComponent />
    </div>
  );
};

export default ZParentComponent;
