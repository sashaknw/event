
import React from "react";
import { useNavigate } from "react-router-dom";
import LoginComponent from "../../../Components/Login/Login"; // Import the login form

const Login = () => {
  const navigate = useNavigate();


  const handleLoginSuccess = (data) => {
    const { token, role } = data;
    localStorage.setItem("token", token);
    localStorage.setItem("role", role);

    // Redirect to different pages based on user role
    if (role === "admin") {
      navigate("/admin/dashboard");
    } else {
      navigate("/user/dashboard");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <LoginComponent onLoginSuccess={handleLoginSuccess} />
      <p>¿No tienes cuenta? <a href="/auth/signup">Regístrate</a></p>
    </div>
  );
};

export default Login;
