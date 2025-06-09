import { Component } from "react";

class ChildComponent extends Component {
    render(){

        return (
            <div className="ChildComponent">
                <h4>자식 컴포넌트</h4>
                <p>ChildComponent 입니다.</p>
            </div>
        );
    }
}

export default ChildComponent;