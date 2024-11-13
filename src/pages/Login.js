import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import logo from "../images/TwosLogo.png";

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      username,
      password,
    };

    try {
      const response = await fetch("http://localhost:5000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        const result = await response.json();
        console.log(result);

        navigate("/home");
      } else {
        const errorData = await response.json();
        setError(errorData.message);
      }
    } catch (err) {
      console.error("Error:", err);
      setError("Server error. Please try again later.");
    }
  };

  return (
    <div className="base-content">
      <div className="login-page">
        <div className="login-container fade-in">
          <form className="login-form" onSubmit={handleSubmit}>
            <div id="logoContainer">
              <img src={logo} alt="Logo" className="LogoLI" />
            </div>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                id="username"
                name="username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <div id="loginBtn">
              <button className="login-btn" type="submit">
                Login
              </button>
            </div>
          </form>
          {error && <p className="error-message">{error}</p>}
          <p>
            Don't have an account yet?{" "}
            <Link to="/Signup" className="register-link">
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
