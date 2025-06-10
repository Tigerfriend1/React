import { useReducer } from "react";

//상태 선언
const initCountState = {count : 0};

//상태 처리 : reducer 정의
function countReducer(state, action){
    switch(action.type){
        case "INCREASE":
            return {count : state.count + 1};
        case "DECREASE":
            return {count : state.count - 1};
        case "RESET":
            return {count : 0};
        default :
            return {count : state.count};
    }
}
function UseReducerComponent(){
    //useReducer() - 초기상태와 상태를 처리하는 함수(리듀서)를 처리하는 state
    const [countState, countDispatch] = useReducer(countReducer, initCountState);
    return (
        <div className="UseReducerComponent">
            <h4>useReducer() Hook 실습</h4>
            <p>
                count : {countState.count}
            </p>
            <button onClick={()=>{countDispatch({type:"INCREASE"})}}>증가</button>
            <button onClick={()=>{countDispatch({type:"DECREASE"})}}>감소</button>
            <button onClick={()=>{countDispatch({type:"RESET"})}}>리셋</button>
        </div>
    );
}

export default UseReducerComponent