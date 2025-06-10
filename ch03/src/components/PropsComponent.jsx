function PropsComponent(props){
    //props는 부모 컴포넌트에서 전달된 속성(properties)을 담고 있는 객체입니다.
    return (
        <div className="PropsComponent">
            <h4>PropsComponent</h4>
            <p>
                title : {props.title}<br/>
                message : {props.message}<br/>
            </p>
        </div>
    );
}

export default PropsComponent;