import React, { useState } from 'react';

const InitEvent = () => {
  const [form1, setForm] = useState({
    username: '',
    address: ''
  });
  const { username, address } = form1;
  
  const onChange = e => {    
    const nextForm = {
      ...form1, 
      [e.target.name]: e.target.value 
    };
    setForm(nextForm);
  };

  const onClick = () => {
    alert(username + ': ' + address);  
    setForm({
        username: '',
        address: ''
      }); 
  };

  const onClear = () => {    
    setForm({
      username: '',
      address: ''
    });
  };
 
  return (
    <div>
      <h1>회원 정보 입력</h1>
      <input
        type="text"
        name="username"
        placeholder="이름"
        value={username}
        onChange={onChange} />
      <input
        type="text"
        name="address"
        placeholder="주소입력"
        value={address}
        onChange={onChange} />
      <button onClick={onClick}>확인</button>
      <button onClick={onClear}>초기화</button>
    </div>
  );
};
export default InitEvent;