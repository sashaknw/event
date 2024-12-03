import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Events from "./Pages/Events/Events"; // The event listing page
import SingleEvent from "./Pages/SingleEvent/SingleEvent"; // The single event details page

function App() {
  return (
    <Router>
      <Routes>
        {/* Route for the event listing page */}
        <Route path="/events" element={<Events />} />

        {/* Route for the single event page */}
        <Route path="/events/:id" element={<SingleEvent />} />
      </Routes>
    </Router>
  );
}

export default App;
