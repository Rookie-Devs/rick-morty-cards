import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../css/index.css";

import Home from "../pages/Home";
import About from "../pages/About";

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            <Route path=":page" element={<Home />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
};

export default App;
