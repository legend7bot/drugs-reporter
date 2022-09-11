import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import { useDispatch } from 'react-redux';
import { register } from '../features/auth/authSlice';

function Signup() {
  // ye data hai yahan se fetch krne ka
  const [data, setData] = useState({
    firstName: '',
    lastName: '',
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
  function handleClick() {
    dispatch(register(data));
  }
  return (
    <>
      <Navbar />
      <form>
        <input
          type={'text'}
          name="firstName"
          placeholder="first-name"
          onChange={handleChange}></input>
        <br></br>
        <input
          type={'text'}
          name="lastName"
          placeholder="last-name"
          onChange={handleChange}></input>
        <br></br>
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
        signup
      </button>
    </>
  );
}

export default Signup;
