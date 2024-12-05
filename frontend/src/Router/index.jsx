import { createBrowserRouter } from "react-router-dom";
import NotFound from "../Pages/NotFound/NotFound";
import Root from "../Pages/Root/Root";
import Artists from "../Pages/Artists/Artists";
import ArtistProfile from "../Pages/ArtistProfile/ArtistProfile";
import Events from "../Pages/Events/Events";
import SingleEvent from "../Pages/SingleEvent/SingleEvent";
import Community from "../Pages/Community/Community";
import Home from "../Pages/Home/Home"; // Import Home page

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />, // Use Root component as layout
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <Home />, // Home page renders here
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
    ],
  },
]);

export default router;
