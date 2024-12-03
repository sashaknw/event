// In your React component, e.g., LoginComponent.js
import React, { useState } from "react";
import { login } from "../../Services/authService"; // Adjust the path if necessary

const LoginComponent = ({ onLoginSuccess }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await login(loginData);
      console.log("Login successful", response);
       onLoginSuccess(response.data); 
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  return (
    <div>
      <input
        type="email"
        value={loginData.email}
        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
        placeholder="Email"
      />
      <input
        type="password"
        value={loginData.password}
        onChange={(e) =>
          setLoginData({ ...loginData, password: e.target.value })
        }
        placeholder="Password"
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default LoginComponent;
