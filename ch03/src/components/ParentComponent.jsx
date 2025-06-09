import { Component } from "react";
import ChildComponent from "./ChildComponent";

//부모컴포넌트에서 자식컴포넌트를 호출하는 관계
class ParentComponent extends Component {
    render(){

        return (
            <div className="ParentComponent">
                <h4>부모 컴포넌트</h4>
                <ChildComponent/>
            </div>
        );
    }
}

export default ParentComponent;