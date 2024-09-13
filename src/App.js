import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Jobs from "./components/Jobs";
import Bookmarks from "./components/Bookmarks";
import JobDetail from "./components/JobDetail"; // Import the JobDetail component

const App = () => {
  return (
    <Router>
      <div>
        <nav
          style={{
            position: "fixed",
            bottom: 0,
            width: "100%",
            backgroundColor: "#f8f9fa",
            padding: "10px",
            display: "flex",
            justifyContent: "space-around",
            opacity: 1,
            zIndex: 1000,
          }}
        >
          <Link to="/jobs">Jobs</Link>
          <Link to="/bookmarks">Bookmarks</Link>
        </nav>

        <Routes>
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/bookmarks" element={<Bookmarks />} />
          <Route path="/jobs/:id" element={<JobDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
