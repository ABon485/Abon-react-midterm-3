import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";

const App = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    document.body.className = mode === "light" ? "light-mode" : "dark-mode";
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <div className="App">
      <Router>
        <Navbar mode={mode} toggleMode={toggleMode} />
        <Home />
      </Router>
    </div>
  );
};

export default App;
