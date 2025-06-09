import { Component } from "react";

//클래스형 컴포넌트 예시(실제로는 잘 안쓰고 함수형 컴포넌트 장려)
class ClassTypeComponents extends Component {

    render(){
        return (
            <div className="ClassTypeComponents">
                <h4>클래스형 컴포넌트</h4>
                <p>클래스형 컴포넌트 입니다.</p>
            </div>
        )
    }
}

//외부로 컴포넌트 내보내기.
export default ClassTypeComponents;