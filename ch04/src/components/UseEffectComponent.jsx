import React, { useEffect, useState } from "react";

const UseEffectComponent = () => {
  const [name, setName] = useState("홍길동");
  const [age, setAge] = useState(20);

  // Mount 단계
  useEffect(() => {
    console.log("컴포넌트가 마운트 되었습니다.");
    return () => {
      // Unmount 단계
      console.log("컴포넌트가 언마운트 되었습니다.");
    };
  }, []); // 빈 배열을 전달하여 컴포넌트가 처음 마운트될 때만 실행

  // Update 단계
  useEffect(() => {
    console.log("컴포넌트가 업데이트 되었습니다.");
  });

  //의존성 배열
  useEffect(() => {
    console.log(`이름이 변경되었습니다: ${name}`);
    // name 상태가 변경될 때마다 실행되는 코드
  }, [name]); // name 상태가 변경될 때마다 실행
  // ** 만약 [name, age]로 설정하면 name과 age가 변경될 때마다 실행

  return (
    <div className="UseEffectComponent">
      <h4>useEffect() Hook 실습</h4>
      <div>
        <p>이름: {name}</p>
        <input
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div>
        <p>나이: {age}</p>
        <input
          type="text"
          value={age}
          onChange={(e) => {
            setAge(e.target.value);
          }}
        />
      </div>
    </div>
  );
};

export default UseEffectComponent;
