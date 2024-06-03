// src/components/SignIn.js
import React, { useState } from 'react';
import { signIn } from '../../api/api.js';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
    const [formData, setFormData] = useState({
      loginId: '',
      loginPw: '',
    });
    const navigate = useNavigate();
  
    const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      try {
        const response = await signIn(formData);
        localStorage.setItem('token', response.data.accessToken);
        alert('로그인 성공');
        navigate('/memberInfo'); // 로그인 성공 후 memberInfo 페이지로 이동
      } catch (error) {
        console.error('로그인 실패:', error);
      }
    };
  
    return (
        <form onSubmit={handleSubmit}>
          <h2>로그인</h2>
          <label>
            로그인 아이디:
            <input type="text" name="loginId" value={formData.loginId} onChange={handleChange} />
          </label>
          <label>
            비밀번호:
            <input type="password" name="loginPw" value={formData.loginPw} onChange={handleChange} />
          </label>
          <button type="submit">로그인</button>
        </form>
    )
  };
  
  export default SignIn;