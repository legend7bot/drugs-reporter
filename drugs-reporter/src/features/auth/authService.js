import axios from 'axios';

const API_URL = 'https://drugs-reporter.herokuapp.com/api/';

// Register user
const register = async (userData) => {
  const response = await axios.post(API_URL + 'users', userData);

  // if (response.data) {
  //   console.log(response.data);
  //   localStorage.setItem('user', JSON.stringify(response.data));
  // }

  return response.data;
};

// Login user
const login = async (userData) => {
  const response = await axios.post(API_URL + 'auth', userData);

  if (response.data.data.token) {
    localStorage.setItem('user', JSON.stringify(response.data.data));
  }

  return response.data;
};

// Logout user
const logout = () => {
  localStorage.removeItem('user');
};

const authService = {
  register,
  logout,
  login,
};

export default authService;
