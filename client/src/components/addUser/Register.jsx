import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './register.css'
import { Link } from 'react-router-dom'
const Register = () => {

  const navigate = useNavigate('');
  const [user, setUser] = useState({
    name: '',
    email: '',
    dateOfBirth: '',
    password: ''
  });

  const handleChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      const res= await axios.post('http://localhost:5000/register', user)
      navigate('/')
      alert(res.data.message)
   
      
      
    } catch (err) {
      console.error(err.response.data);
      alert(err.response.data.message)
    }
  };

  return ( <div className='parent'>
    <form onSubmit={handleSubmit} className='formregi'>
      <input
        type="text"
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="Name"
        required
      />
      <input
        type="email"
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="Email"
        required
      />
      <input
        type="date"
        name="dateOfBirth"
        value={user.dateOfBirth}
        onChange={handleChange}
        placeholder="Date of Birth"
        required
      />
      
      <input
        type="password"
        name="password"
        value={user.password}
        onChange={handleChange}
        placeholder="Password"
        required
      />
      <button className='btn' type="submit">Register</button>
      <button className='btn' onClick={()=>navigate('/')}>LOGIN</button>
    </form>
    </div>
  );
};

export default Register;
