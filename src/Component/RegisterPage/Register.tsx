import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import { toast } from "react-toastify";
import "./RegisterModule.css";

const RegisterPage = () => {
  const [values, setValues] = useState({
    role: '',
    first_name: '',
    last_name: '',
    email: '',
    password: ''
  });
  const navigate = useNavigate();

  const handleInput = (e: any) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3800/auth/register", values);

      if (response.status === 201) {
        toast.success("Registration successful");
        navigate("/"); // Redirect to the login page after successful registration
      } else {
        toast.error(response.data.message || "Registration failed");
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Error occurred");
    }
  };

  return (
    <div className="login-container">
      <div className="left">
        <h1 className="brand">
          <span className="brand-yellow">Build</span>
          <span className="brand-blue">Rent</span>
        </h1>
        <h2 className="head">Create your account</h2>

        <form className="login-form" onSubmit={handleSubmit}>
          <input type="text" name="first_name" placeholder="First Name" value={values.first_name} onChange={handleInput} required />
          <input type="text" name="last_name" placeholder="Last Name" value={values.last_name} onChange={handleInput} required />
          <input type="text" name="role" placeholder="Role" value={values.role} onChange={handleInput} required />
          <input type="email" name="email" placeholder="Email" value={values.email} onChange={handleInput} required />
          <input type="password" name="password" placeholder="Password" value={values.password} onChange={handleInput} required />
          <button type="submit">Sign Up</button>
        </form>

        <p className="signup-text">
          Already have an account? <Link to="/login">Sign In</Link>
        </p>
      </div>

      <div className="right">
        <h2>Join the BuildRent Community</h2>
        <p>Sign up today and get access to the best construction equipment at the best rates.</p>
        <div className="box">
          <div>
            <strong>700+</strong>
            <p>Equipment Available</p>
          </div>
          <div>
            <strong>1200+</strong>
            <p>Trusted Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;