import { createBrowserRouter, Navigate } from "react-router-dom";
import NotFound from "../Pages/NotFound/NotFound";
import Root from "../Pages/Root/Root";
import Artists from "../Pages/Artists/Artists";
import ArtistProfile from "../Pages/ArtistProfile/ArtistProfile";
import Events from "../Pages/Events/Events";
import SingleEvent from "../Pages/SingleEvent/SingleEvent";
import Community from "../Pages/Community/Community";
import Home from "../Pages/Home/Home";
import EditArtistProfile from "../Components/EditArtistProfile/EditArtistProfile"; // Import your new EditArtistProfile page

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "artists",
        element: <Artists />,
      },
      {
        path: "artists/:id",
        element: <ArtistProfile />,
      },
      {
        path: "events",
        element: <Events />,
      },
      {
        path: "events/:id",
        element: <SingleEvent />,
      },
      {
        path: "community",
        element: <Community />,
      },
      {
        path: "edit-artist/:id", // This will allow editing of a specific artist's profile
        element:
          localStorage.getItem("userRole") === "Artist" ? (
            <EditArtistProfile />
          ) : (
            <Navigate to="/" /> // Redirect non-artists to home
          ),
      },
    ],
  },
]);

export default router;
