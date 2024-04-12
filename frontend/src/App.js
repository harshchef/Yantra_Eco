

import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
 import Home from "./components/Home"; 
import AboutUsPage from "./components/AboutUs";
import AddEventForm from "./components/AddEventForm";

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/admin/add-event" element={<AddEventForm/>} />
          <Route path="/about-us" element={<AboutUsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
