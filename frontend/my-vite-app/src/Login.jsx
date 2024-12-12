import React from "react";
import { Link } from "react-router-dom";
import { Navigate } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
function Login() {

    const [values , SetValues]= useState({
        email:"",
        password:"",
    })
    const navigate= useState()
    axios.defaults.withCredentials=true;
const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post("http://localhost:8081/login", values)
    .then (res =>{
        if(res.data.Status === "Success"){
           navigate('/')
        } else{
            alert(res.data.Error);
        }
    })
    .then(err=>console.log(err));
}
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25 shadow">
        <h2 className="text-center">Sign-In</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email"><strong>Email</strong></label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={e => SetValues({...values, email: e.target.value})}

              className="form-control rounded-0"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="password"><strong>Password</strong></label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={e => SetValues({...values, password: e.target.value})}

              className="form-control rounded-0"
            />
          </div>

          <button type="submit" className="btn btn-success w-100 rounded-0">
            Log in
          </button>
          <p className="text-center mt-2">You agree to our terms and policies</p>

          <Link to='/register' className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
            Create Account
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
