// // In Pages/Auth/Signup.jsx
// import React from "react";
// import { useNavigate } from "react-router-dom"; 
// import SignupComponent from "../../../Components/Access/Access"; 

// const Signup = () => {
//   const navigate = useNavigate(); 
  
//   const handleSignupSuccess = (data) => {
//     const { token, role } = data;
//     localStorage.setItem("token", token);
//     localStorage.setItem("role", role);

    
//     if (role === "admin") {
//       navigate("/admin/dashboard");
//     } else {
//       navigate("/user/dashboard");
//     }
//   };

//   return (
//     <div>
//       <SignupComponent onSignupSuccess={handleSignupSuccess} />
//     </div>
//   );
// };

// export default Signup;
