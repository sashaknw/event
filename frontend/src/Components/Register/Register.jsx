import React, { useState } from "react";
import { signup } from "../../Services/authService"; // Assuming you already have this function
import "./Register.css"; // We'll style it just like Access.css

const Register = ({ onRegisterSuccess, openAccessPopup, onClose }) => {
  const [registerData, setRegisterData] = useState({
    artistName: "",
    email: "",
    photo: null,
    bio: "",
  });

  const [isError, setIsError] = useState(false); // To show error message on failed registration
  const [isShaking, setIsShaking] = useState(false); // To trigger the shake animation
  const [invalidFields, setInvalidFields] = useState({
    artistName: false,
    email: false,
    photo: false,
    bio: false,
  }); // Track invalid fields for adding a black border

  const handleRegister = async () => {
    const { artistName, email, photo, bio } = registerData;

    let invalid = false;
    let newInvalidFields = { ...invalidFields };

    // Validate inputs
    if (!artistName) {
      newInvalidFields.artistName = true;
      invalid = true;
    } else {
      newInvalidFields.artistName = false;
    }

    if (!email) {
      newInvalidFields.email = true;
      invalid = true;
    } else {
      newInvalidFields.email = false;
    }

    if (!photo) {
      newInvalidFields.photo = true;
      invalid = true;
    } else {
      newInvalidFields.photo = false;
    }

    if (!bio) {
      newInvalidFields.bio = true;
      invalid = true;
    } else {
      newInvalidFields.bio = false;
    }

    setInvalidFields(newInvalidFields);

    if (invalid) {
      setIsError(true); // Show error if any field is empty
      setIsShaking(true); // Trigger shake animation
      return;
    }

    try {
      const response = await signup(registerData); // Your signup service function
      console.log("Solicitud de registro enviada", response);
      onRegisterSuccess(response.data);
    } catch (error) {
      console.error("Fallo en el envío de la solicitud", error);
      setIsError(true);
      setIsShaking(true); // Trigger shake animation if an error occurs
    }

    // Reset shake effect after animation duration
    setTimeout(() => setIsShaking(false), 600); // 600ms shake duration
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const handleImageChange = (e) => {
    setRegisterData({ ...registerData, photo: e.target.files[0] });
  };

  const handleOpenAccessPopup = () => {
    onClose(); // Close Register popup
    openAccessPopup(); // Open Access popup
  };

  return (
    <div
      className={`register-main-div ${isShaking ? "shake" : ""}`} // Apply shake class if shaking is true
    >
      <p className="register-title">Crea tu perfil de artista</p>
      <input
        type="text"
        name="artistName"
        value={registerData.artistName}
        onChange={handleInputChange}
        placeholder="Nombre de artista"
        className={invalidFields.artistName ? "invalid-input" : ""}
      />
      <input
        type="email"
        name="email"
        value={registerData.email}
        onChange={handleInputChange}
        placeholder="Email"
        className={invalidFields.email ? "invalid-input" : ""}
      />
      <input
        type="file"
        name="photo"
        accept="image/*"
        onChange={handleImageChange}
        className={invalidFields.photo ? "invalid-input" : ""}
      />
      <textarea
        name="bio"
        value={registerData.bio}
        onChange={handleInputChange}
        placeholder="Biografía"
        maxLength="500"
        className={invalidFields.bio ? "invalid-input" : ""}
      ></textarea>

      {isError && (
        <p className="error-message">
          ¡Ups! Por favor, completa todos los campos correctamente.
        </p>
      )}

      <button className="register-button" onClick={handleRegister}>
        REGÍSTRATE
      </button>

      <p className="login-text">
        Si ya tienes cuenta,{" "}
        <b onClick={handleOpenAccessPopup} style={{ cursor: "pointer" }}>
          entra aquí
        </b>
      </p>

      {/* The Close Button should only be rendered once */}
      <button className="close-btn" onClick={onClose}>
        
      </button>
    </div>
  );
};

export default Register;
