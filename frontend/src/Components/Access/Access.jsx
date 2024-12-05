import React, { useState } from "react";
import { login } from "../../Services/authService";
import "./Access.css";

const Access = ({ onAccessSuccess }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLogin = async () => {
    try {
      const response = await login(loginData);
      console.log("Acceso correcto", response);
      onAccessSuccess(response.data); // Close the popup or handle success
    } catch (error) {
      console.error("Acceso incorrecto", error);
      alert("Credenciales incorrectas");
    }
  };

  return (
    <div className="acess-main-div">
      <h2>Acceso</h2>
      <br></br>
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
      <p className="register-text">
        ¿No tienes cuenta? <b>Regístrate</b>{" "}
      </p>
    </div>
  );
};

export default Access;
