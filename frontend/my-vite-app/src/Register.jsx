import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Register() {
    const [values , SetValues]= useState({
        name:"",
        email:"",
        password:"",
    })
    const navigate= useState()
const handleSubmit = (event) =>{
    event.preventDefault();
    axios.post("http://localhost:8081/register", values)
    .then (res =>{
        if(res.data.Status === "Success"){
           navigate('/login')
        } else{
            alert("Error")
        }
    })
    .then(err=>console.log(err));
}

  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded w-25">
        <h2>Sign-Up</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name">
              <strong>Name</strong>
            </label>
            <input
              type="text"
              placeholder="Enter Name"
              name="name"
              onChange={e => SetValues({...values, name: e.target.value})}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Enter Email"
              name="email"
              onChange={e => SetValues({...values, email: e.target.value})}
              className="form-control rounded-0"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              name="password"
              onChange={e => SetValues({...values, password: e.target.value})}
              className="form-control rounded-0"
            />
          </div>
          <button type="submit" className="btn btn-success w-100 rounded-0">
            Sign up
          </button>
        </form>
        <p className="mt-3 text-center">
          By signing up, you agree to our <a href="#">terms and policies</a>.
        </p>
        <Link to="/login" className="btn btn-default border w-100 bg-light rounded-0 text-decoration-none">
       Log in
        </Link>
      </div>
    </div>
  );
}

export default Register;
