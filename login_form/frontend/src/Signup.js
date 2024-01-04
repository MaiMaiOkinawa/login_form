import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Validation from './SignupValidation';

function Signup() {
  const [values, setValues] = useState({
    name: '',
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({});

  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(Validation(values));
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-warning">
      <div className="p-3 bg-white rounded-1 w-25">
        <h2 className="text-center">SignUp</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              name="name"
              type="name"
              placeholder="Enter your name"
              className="form-control rounded-1"
              onChange={handleInput}
            />
            <span>
              {errors.name && (
                <span className="text-danger">{errors.name}</span>
              )}
            </span>
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              name="email"
              type="email"
              placeholder="Enter Email"
              className="form-control rounded-1"
              onChange={handleInput}
            />
            <span>
              {errors.email && (
                <span className="text-danger">{errors.email}</span>
              )}
            </span>
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              name="password"
              type="password"
              placeholder="Enter Password"
              className="form-control  rounded-1"
              onChange={handleInput}
            />
            <span>
              {errors.password && (
                <span className="text-danger">{errors.password}</span>
              )}
            </span>
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-1">
            <strong>Sign up</strong>
          </button>
          <p>You are agree to our terms and policies</p>
          <Link
            to={'/'}
            className="btn btn-default border w-100 bg-light rounded-1 text-decoration-none"
          >
            Login
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Signup;
