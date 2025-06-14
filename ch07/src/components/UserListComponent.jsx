import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function UserListComponent() {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);

  useEffect(() => {
    //mount 전
    fetch(`http://localhost:3000/users`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //users 상태 업데이트
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  //핸들러
  const modifyHandler = (userid) => {
    navigate(`/user/modify?userid=${userid}`);
  };
  const deleteHandler = (userid) => {
    fetch(`http://localhost:3000/users/${userid}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        //상태 업데이트
        setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userid));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div className="UserListComponent">
      <h4>회원목록</h4>
      <table border={1}>
        <tbody>
          <tr>
            <th>아이디</th>
            <th>이름</th>
            <th>생년월일</th>
            <th>나이</th>
            <th>관리</th>
          </tr>
          {users.map((user, index) => (
            <tr key={index}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.birth}</td>
              <td>{user.age}</td>
              <td>
                <button onClick={() => modifyHandler(user.id)}>수정</button>
                <button onClick={() => deleteHandler(user.id)}>삭제</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserListComponent;
