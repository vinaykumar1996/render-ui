import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PageOne from "./Components/PageOne";
import PageTwo from "./Components/PageTwo";
import "./App.css";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<PageOne />} />
          <Route path="/details" element={<PageTwo />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
