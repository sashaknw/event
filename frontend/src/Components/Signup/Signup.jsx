// In Components/SignupComponent.jsx
import React, { useState } from "react";
import { signup } from "../../Services/authService"; // Adjust the path if necessary

const SignupComponent = ({ onSignupSuccess }) => {
  const [signupData, setSignupData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",

  });

  const handleSignup = async () => {
     if (signupData.password !== signupData.confirmPassword) {
       alert("Contraseñas no coinciden");
       return;
     }


    try {
      const response = await signup(signupData); // Make the API call to signup
      console.log("Registro correcto", response);
      onSignupSuccess(response.data); // Pass the signup success data to the parent
    } catch (error) {
      console.error("Registro incorrecto", error);
    }
  };

  return (
    <div>
      <h2>Signup</h2>
      <input
        type="text"
        value={signupData.name}
        onChange={(e) => setSignupData({ ...signupData, name: e.target.value })}
        placeholder="Nombre"
      />
      <input
        type="email"
        value={signupData.email}
        onChange={(e) =>
          setSignupData({ ...signupData, email: e.target.value })
        }
        placeholder="Email"
      />
      <input
        type="password"
        value={signupData.password}
        onChange={(e) =>
          setSignupData({ ...signupData, password: e.target.value })
        }
        placeholder="Contraseña"
      />
      <input
        type="password"
        value={signupData.confirmPassword}
        onChange={(e) =>
          setSignupData({ ...signupData, confirmPassword: e.target.value })
        }
        placeholder="Confirma contraseña"
      />

      <button onClick={handleSignup}>Sign Up</button>
    </div>
  );
};

export default SignupComponent;
