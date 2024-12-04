// import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import Events from "./Pages/Events/Events"; // The event listing page
// import SingleEvent from "./Pages/SingleEvent/SingleEvent"; // The single event details page

// function App() {
//   return (
//     <Router>
//       <Routes>
//         {/* Route for the event listing page */}
//         <Route path="/events" element={<Events />} />

//         {/* Route for the single event page */}
//         <Route path="/events/:id" element={<SingleEvent />} />
//       </Routes>
//     </Router>
//   );
// }

// al tener el setup en Router index.jsx, este no es necesario
import React from "react";
import router from "./Router"; // Import the router configuration
import { RouterProvider } from "react-router-dom"; // RouterProvider for rendering routes

function App() {
  return <RouterProvider router={router} />; // Use RouterProvider to provide the routes
  
}

export default App;
