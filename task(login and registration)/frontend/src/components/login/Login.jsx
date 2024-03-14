import './login.css'

import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
  const navigate = useNavigate('');
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      console.log(formData)
    const res =   await axios.post('http://localhost:5000/login', { email, password });
      const { token,message } = res.data;

      if (token) {
        alert(message)
        navigate('/Home');
    }} catch (err) {
      console.error(err.response.data);
    }
  };

  return (
    <div className='parent'>
    <form onSubmit={handleSubmit} className='formlogin'>
      <input
        type="text"
        name="email"
        
        onChange={handleChange}
        placeholder="email"
      />
      <input
        type="password"
        name="password"
        onChange={handleChange}
        placeholder="Password"
      />
      <button className='btn' type="submit">Login</button>
      <button className='btn' onClick={()=>navigate('/Register')}>SIGN IN</button>
    </form>
    </div>
  );
};

export default LoginForm;
