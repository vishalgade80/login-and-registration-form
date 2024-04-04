import React, { useState,useEffect } from 'react';
import axios from 'axios';
import './Home.css'
import {Link} from 'react-router-dom'

const Home = () => {

const [Data,setData] =useState(
  {
    name: '',
    email: '',
    dateOfBirth: ''
  }
)
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:4999/getAll');
        setData(response.data);
      } catch (error) {
        console.log(error)
      } 
    };

    fetchData();
  }, []);

console.log(Data)






  return (
    <div className='userTable'>
      
      <table border={1} cellPadding={10} cellSpacing={0}>
        <thead>
          <tr>
            <th>S.NO</th>
            <th>USER NAME</th>
            <th>USER EMAIL</th>
            <th>DATE OF BIRTH</th>
          </tr>
        </thead>
        <tbody>
        {

Data && Data.map && Data.map((user, index)=>{

              return(
                <tr key={index +1}>
                <td>{index +1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.dateOfBirth.slice(0,10)}</td>
                
              </tr>
              )
            })
  

            }

        
        </tbody>
      </table>
    </div>
  )
}

export default Home
