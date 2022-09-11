import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';
import Navbar from '../components/Navbar';

function Login() {
  const [data, setData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();
  function handleChange(event) {
    const { name, value } = event.target;
    setData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  async function handleClick() {
    dispatch(login(data));
  }

  return (
    <>
      <Navbar />
      <form>
        <input
          type={'email'}
          name="email"
          placeholder="email"
          onChange={handleChange}></input>
        <br></br>
        <input
          type={'password'}
          name="password"
          placeholder="password"
          onChange={handleChange}></input>
        <br></br>
      </form>
      <button
        className="btn btn-primary"
        onClick={handleClick}>
        Login
      </button>
    </>
  );
}

export default Login;
