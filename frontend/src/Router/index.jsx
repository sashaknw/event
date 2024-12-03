import { createBrowserRouter, redirect } from "react-router-dom";
import NotFound from "../Pages/NotFound/NotFound";
import Signup from "../Pages/Auth/Signup/Signup";
import Login from "../Pages/Auth/Login/Login";
import Root from "../Pages/Root/Root";
import Artists from "../Pages/Artists/Artists";
import ArtistProfile from "../Pages/ArtistProfile/ArtistProfile";
import Events from "../Pages/Events/Events"; 
import SingleEvent from "../Pages/SingleEvent/SingleEvent"; 

// import AdminDashboard from "../Pages/Admin/Dashboard"; // Admin page
// import UserDashboard from "../Pages/User/Dashboard"; // User page


// const checkAuthLoader = () => {
//   const token = localStorage.getItem("token");
//   const userRole = localStorage.getItem("role"); 

//   if (!token) {
//     return redirect("/auth/login"); 
//   }

//   return { token, userRole }; 
// };


// const checkAdminLoader = () => {
//   const { userRole } = checkAuthLoader(); 

//   if (userRole !== "admin") {
//     return redirect("/"); 
//   }

//   return null; 
// };

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "auth",
        children: [
          {
            path: "signup",
            element: <Signup />,
          },
          {
            path: "login",
            element: <Login />,
          },
        ],
      },
      {
        path: "artists",
        element: <Artists />, // Artists page to display search results
      },
      
      {
        path: "artists/:id",
        element: <ArtistProfile />, // Artist profile page
      },
      {
        path: "events",
        element: <Events />, // Event listing page
      },
      {
        path: "events/:id",
        element: <SingleEvent />, // Single event details page
      },
      // Dashboard route for regular users
      // {
      //   path: "user/dashboard",
      //   element: <UserDashboard />,
      //   loader: checkAuthLoader, // Protect the route for authenticated users
      // },
      // // Admin-only route
      // {
      //   path: "admin/dashboard",
      //   element: <AdminDashboard />,
      //   loader: checkAdminLoader, // Only accessible by admins
      // },
    ],
  },
]);

export default router;
