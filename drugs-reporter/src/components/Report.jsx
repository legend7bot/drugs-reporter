import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ReportIcon from '@mui/icons-material/Report';
import axios from 'axios';

function Report(props) {
  const [anonymous, setAnonymous] = useState(false);
  function handleChange(event) {
    const { name, value } = event.target;
    props.setData((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }
  function anonymously() {
    setAnonymous((prevVal) => {
      return !prevVal;
    });
  }

  function displayData() {
    console.log(props.data);
    axios
      .post('https://drugs-reporter.herokuapp.com/api/report', {
        name: props.data.name,
        email: props.data.email,
        pincode: props.data.pincode,
        location: props.data.location,
        sightingTime: props.data.sightingTime,
        type: props.data.type,
        description: props.data.description,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <>
      <h1 className="reportHeading">
        <ReportIcon sx={{ fontSize: '4rem', marginBottom: '10px' }} />
        REPORT
      </h1>
      <form className="row g-3 reportpage">
        <div className="col-md-6">
          <label
            htmlFor="inputEmail4"
            className="form-label">
            Name
          </label>
          {!anonymous ? (
            <input
              onChange={handleChange}
              name="name"
              type="text"
              className="form-control"
              id="inputEmail4"
              placeholder="your name"
            />
          ) : (
            <input
              type="text"
              disabled
              className="form-control"
              id="inputEmail4"
              placeholder="Anonymous"
              value={''}
            />
          )}
        </div>
        <div className="col-md-6">
          <label
            htmlFor="inputPassword4"
            className="form-label">
            Email
          </label>
          {!anonymous ? (
            <input
              onChange={handleChange}
              name="email"
              type="Email"
              className="form-control"
              id="inputPassword4"
              placeholder="your email"
            />
          ) : (
            <input
              type="text"
              disabled
              className="form-control"
              id="inputPassword4"
              placeholder="Anonymous"
              value={''}
            />
          )}
        </div>
        <div className="col-12">
          <label
            htmlFor="inputAddress"
            className="form-label">
            Location
          </label>
          <input
            onChange={handleChange}
            type="text"
            name="location"
            className="form-control"
            id="inputAddress"
            placeholder="1234 Main St"
          />
        </div>
        <div className="col-md-4">
          <label
            htmlFor="inputState"
            className="form-label">
            Type
          </label>
          <select
            onChange={handleChange}
            id="inputState"
            name="type"
            className="form-select"
            placeholder="What did u see">
            <option value="Consumption">Consumption</option>
            <option value="Trading">Trading</option>
          </select>
        </div>
        <div className="col-md-6">
          <label
            htmlFor="inputZip"
            className="form-label">
            Time
          </label>
          <input
            name="sightingTime"
            onChange={handleChange}
            type="text"
            className="form-control"
            id="inputZip"
            placeholder="dd/mm/yy"
          />
        </div>
        <div className="col-md-2">
          <label
            htmlFor="inputZip"
            className="form-label">
            PIN
          </label>
          <input
            name="pincode"
            onChange={handleChange}
            type="text"
            className="form-control"
            id="inputZip"
            placeholder="1100XX"
          />
        </div>
        <div className="col-md-12">
          <label
            htmlFor="inputZip"
            className="form-label">
            Description
          </label>
          <textarea
            onChange={handleChange}
            name="description"
            className="form-control"
            placeholder="Description of the sighting.."
            rows={4}
          />
        </div>

        <div className="col-12">
          <div className="form-check">
            <input
              onChange={handleChange}
              className="form-check-input"
              type="checkbox"
              onClick={anonymously}
              id="gridCheck"
            />
            <label
              className="form-check-label"
              htmlFor="gridCheck">
              Send Anonymously
            </label>
          </div>
        </div>
        <div className="col-12">
          <NavLink to="/submitted">
            <button
              onClick={displayData}
              className="btn btn-primary">
              Send
            </button>
          </NavLink>
        </div>
      </form>
    </>
  );
}

export default Report;
