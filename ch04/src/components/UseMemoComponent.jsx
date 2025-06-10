import React from "react";
import { useState } from "react";
import { useMemo } from "react";

const hardCalc = (num) => {
  console.log("hardCalc....");
  for (let i = 0; i < 1_000_000_000; i++) {}
  return num + 1000;
};

const easyCalc = (num) => {
  console.log("easyCalc....");
  return num + 1000;
};

const UseMemoComponent = () => {
  const [hardNum, setHardNum] = useState(0);
  const [easyNum, setEasyNum] = useState(0);

  //useMemo()를 사용하지 않으면 easyNum 상태를 업데이트 할때마다 hardCalc()가 매번 실행되기 때문에 성능 저하
  //const hardResult = hardCalc(hardNum);

  //useMemo()를 사용하여, hardCalc의 연산 결과를 캐싱, easyCalc 값을 수정할 때 불필요한 연산제거
  const hardResult = useMemo(() => {
    //캐싱된 값으로 바로 표현
    return hardCalc(hardNum);
  }, [hardNum]);

  const easyResult = easyCalc(easyNum);

  return (
    <div className="UseMemoCmponent">
      <h4>useMemo() Hook 실습</h4>
      <p>
        hardNum :{" "}
        <input
          type="number"
          value={hardNum}
          onChange={(e) => {
            setHardNum(e.target.value);
          }}
        />
        <span>hardResult : {hardResult}</span>
      </p>
      <p>
        easyNum :{" "}
        <input
          type="number"
          value={easyNum}
          onChange={(e) => {
            setEasyNum(e.target.value);
          }}
        />
        <span>easyResult : {easyResult}</span>
      </p>
    </div>
  );
};

export default UseMemoComponent;
