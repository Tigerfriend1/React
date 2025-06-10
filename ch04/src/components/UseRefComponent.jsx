import { useRef } from "react";
const UseRefComponent = () => {

    //ref 생성 (id속성 대신 씀.)
    const refUid = useRef();
    const refName = useRef();

    const btn1Handler = () => {
        //const uid = document.getElementById('uid').value;
        //alert(uid);
        alert(refUid.current.value);
    };
    const btn2Handler = () => {
        //const uid = document.getElementById('name').value;
        //alert(uid);
        alert(refName.current.value);
    };

    return (
        <div className='UseRefComponent'>
            <h4>useRef hook 실습</h4>

            <p>
                <input type="text" name="uid" ref={refUid} />
                <button onClick={btn1Handler}>확인</button>
            </p>

            <p>
                <input type="text" name="name" ref={refName} />
                <button onClick={btn2Handler}>확인</button>
            </p>
        </div>
    );
};

export default UseRefComponent;