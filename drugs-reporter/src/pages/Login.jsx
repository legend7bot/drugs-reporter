import React, { useState } from 'react'
import Navbar from '../components/Navbar';
function Login() {
  const [data, setData] = useState({
    email: "",
    password: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevValue) => {
      return ({ ...prevValue, [name]: value })
    });
  }
  return (
    <>
    <Navbar/>
      <form>
        <input type={"email"} name="email" placeholder="email" onChange={handleChange}></input><br></br>
        <input type={"password"} name="password" placeholder="password" onChange={handleChange}></input><br></br>
      </form>
      <button className='btn btn-primary' onClick={() => { console.log(data) }}>signup</button>
    </>
  )
}

export default Login