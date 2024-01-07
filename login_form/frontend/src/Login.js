import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Validation from './LoginValidation';
import axios from 'axios';

function Login() {
  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  const navigate = useNavigate();
  const [errors, setErrors] = useState({});
  const handleInput = (e) => {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setErrors(Validation(values));
  //   if (errors.email === '' && errors.password === '') {
  //     axios
  //       .post('http://localhost:8081/login', {
  //         email: values.email,
  //         password: values.password,
  //       })
  //       .then((res) => {
  //         console.log('Server Response:', res.data);
  //         // Assuming you have a user with matching credentials
  //         if (res.data.length > 0) {
  //           navigate('/home');
  //         } else {
  //           alert('No record existed');
  //         }
  //       })
  //       .catch((err) => console.log(err));
  //   }
  // };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors(Validation(values));

    if (errors.email === '' && errors.password === '') {
      try {
        const response = await axios.post('http://localhost:8081/login', {
          email: values.email,
          password: values.password,
        });

        console.log('Server Response:', response.data);

        if (response.data === 'Success') {
          navigate('/home');
        } else if (response.data === 'Fail') {
          alert("Password didn't match");
        } else {
          alert('No record existed');
        }
      } catch (error) {
        console.error('Error during login:', error);
      }
    }
  };

  return (
    <div className="d-flex vh-100 justify-content-center align-items-center bg-primary">
      <div className="p-3 bg-white rounded-1 w-25">
        <h2 className="text-center">LogIn</h2>
        <form onSubmit={handleSubmit}>
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
            <strong>Login</strong>
          </button>
          <p>You are agree to our terms and policies</p>
          <Link
            to={'/signup'}
            className="btn btn-default border w-100 bg-light rounded-1 text-decoration-none"
          >
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
