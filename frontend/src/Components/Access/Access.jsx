import React, { useState } from "react";
import { login } from "../../Services/authService";
import "./Access.css";

const Access = ({ onAccessSuccess, openRegisterPopup }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // Error state to store the error message
  const [isShaking, setIsShaking] = useState(false);
  const [showRegisterText, setShowRegisterText] = useState(true);

  const handleLogin = async () => {
    try {
      const response = await login(loginData);
      const { token, role } = response.data;

localStorage.setItem("authToken", token);
localStorage.setItem("authRole", role);

    
      onAccessSuccess(response.data);
      console.log("Estas logead@", response.data);
    } catch (error) {
      console.error("Acceso incorrecto", error);
      setError("¡Ups! Credenciales incorrectas");
      setIsShaking(true);
      setShowRegisterText(false);

      // Reset shake effect after animation duration
      setTimeout(() => setIsShaking(false), 600); // 600ms shake duration
      setTimeout(() => {
        setError(""), setShowRegisterText(true);
      }, 2000);
    }
  };

  return (
    <div className={`acess-main-div ${isShaking ? "shake" : ""}`}>
      <h2>Acceso</h2>
      <br />
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
        placeholder="Contraseña"
      />
      <button className="entrar-button" onClick={handleLogin}>
        ENTRAR
      </button>
      {/* Display error message if there's one */}
      {error && <p className="error-message">{error}</p>}

      {/* "Regístrate" text with pointer and underline effect */}
      {showRegisterText && (
        <p className="register-text">
          ¿No tienes cuenta? <b onClick={openRegisterPopup}>Regístrate</b>
        </p>
      )}
    </div>
  );
};

export default Access;
