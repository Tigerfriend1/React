import React, { Component } from 'react';

class LifeCycleComponent extends Component{

    state = {count : 0};

    componentDidMount(){
        // 이 메서드는 컴포넌트가 처음 렌더링된 후에 호출됩니다.
        console.log('componentDidMount 호출됨');
    }
    shouldComponentUpdate() {
        // 이 메서드는 컴포넌트가 업데이트되기 전에 호출됩니다.
        // true를 반환하면 업데이트가 진행되고, false를 반환하면 업데이트가 중단됩니다.
        console.log('shouldComponentUpdate 호출됨');
        return true; // 항상 업데이트를 허용
    }

    render() {
        console.log('render 호출됨');
        return ( //버튼 클릭할 때 마다 render가 호출됨
            <div className='LifeCycleComponent'>
                <h3>LifeCycleComponent</h3>
                <p>
                    count: {this.state.count} <br />
                    <button onClick={()=>{this.setState({count: this.state.count+1})}}>증가</button>
                </p>
            </div>
        );
    }

    componentDidUpdate() {
        console.log('componentDidUpdate 호출됨');
        // 이 메서드는 컴포넌트가 업데이트된 후에 호출됩니다.
        // prevProps와 prevState를 사용하여 이전 상태와 비교할 수 있습니다.
    }
    componentWillUnmount() {
        console.log('componentWillUnmount 호출됨');
        // 이 메서드는 컴포넌트가 제거되기 전에 호출됩니다.
        // 여기서 리소스를 정리할 수 있습니다.
    }

}

export default LifeCycleComponent;