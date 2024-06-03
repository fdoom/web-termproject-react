import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import SignUp from './components/member/SignUp.js';
import SignIn from './components/member/SignIn.js';
import MemberInfo from './components/MemberInfo';

function App() {
    return (
      <Router>
        <div>
          <h1>JWT Authentication App</h1>
          <Routes>
            <Route path="/" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
            <Route path="/memberInfo" element={<MemberInfo />} />
          </Routes>
        </div>
      </Router>
    );
  }
  
  export default App;