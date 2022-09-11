import axios from 'axios';

const API_URL = 'https://drugs-reporter.herokuapp.com/api/';

const user = JSON.parse(localStorage.getItem('user'));

// Register user
const getAll = async (userData) => {
  let config = {
    headers: {
      Authorization: 'Bearer ' + user.token,
    },
  };
  const response = await axios.get(API_URL + 'report/all', config);
  return response.data;

  // if (response.data) {
  //   console.log(response.data);
  //   localStorage.setItem('user', JSON.stringify(response.data));
  // }
};
const reportsService = {
  getAll,
};

export default reportsService;
