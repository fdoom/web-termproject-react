import React, { useState } from 'react';
import { signUp } from '../../api/api.js';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
    const [formData, setFormData] = useState({
      loginId: '',
      loginPw: '',
      name: '',
      stuNum: '',
      major: '',
      phoneNum: '',
      email: '',
      gender: '',
      birthDate: '',
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
        await signUp(formData);
        alert('회원가입 성공');
        navigate('/signIn');
      } catch (error) {
        console.error('회원가입 실패:', error);
      }
    };
  
    return (
        <form onSubmit={handleSubmit}>
          <h2>회원가입</h2>
          <label>
            로그인 아이디:
            <input type="text" name="loginId" value={formData.loginId} onChange={handleChange} />
          </label>
          <label>
            비밀번호:
            <input type="password" name="loginPw" value={formData.loginPw} onChange={handleChange} />
          </label>
          <label>
            이름:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            학번:
            <input type="text" name="stuNum" value={formData.stuNum} onChange={handleChange} />
          </label>
          <label>
            전공:
            <input type="text" name="major" value={formData.major} onChange={handleChange} />
          </label>
          <label>
            전화번호:
            <input type="text" name="phoneNum" value={formData.phoneNum} onChange={handleChange} />
          </label>
          <label>
            이메일:
            <input type="email" name="email" value={formData.email} onChange={handleChange} />
          </label>
          <label>
            성별:
            <select name="gender" value={formData.gender} onChange={handleChange}>
              <option value="">선택</option>
              <option value="MALE">남성</option>
              <option value="FEMALE">여성</option>
            </select>
          </label>
          <label>
            생년월일:
            <input type="date" name="birthDate" value={formData.birthDate} onChange={handleChange} />
          </label>
          <button type="submit">회원가입</button>
        </form>
    )
  };
  
  export default SignUp;
