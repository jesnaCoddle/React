import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "./loginModule.css";
import { saveToken } from "../../utils/auth";

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await axios.post("http://localhost:3800/auth/login", {
                email,
                password,
            });

            if (response.data.status === 200 && response.data.token) {
                toast.success(response.data.message || "Login successful");
                saveToken(response.data.token);
                navigate("/home");

            } else {
                toast.error(response.data.message || "Login failed");
            }
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Login error");
        }
    };


    return (
        <div className="login-container">
            <div className="left">
                <h1 className="brand">
                    <span className="brand-yellow">Build</span>
                    <span className="brand-blue">Rent</span>
                </h1>
                <h2 className="head">Sign in to your account</h2>

                <form className="login-form" onSubmit={handleSubmit}>
                    <input
                        type="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <button type="submit">Sign In</button>
                </form>

                <p className="signup-text">
                    Don't have an account?
                    <Link to="/register">Sign Up</Link>
                </p>
            </div>

            <div className="right">
                <h2>Professional Construction Equipment Rental</h2>
                <p>Join BuildRent to access a wide range of high-quality construction equipment.</p>
                <div className="box">
                    <div>
                        <strong>500+</strong>
                        <p>Equipment Items</p>
                    </div>
                    <div>
                        <strong>1000+</strong>
                        <p>Happy Contractors</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
