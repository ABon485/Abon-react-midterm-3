import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import Home from "./components/layout/Home";
import Navbar from "./components/layout/Navbar";
import { SearchProvider } from "./components/users/SearchContext";

const App = () => {
  const [mode, setMode] = useState("light");

  useEffect(() => {
    document.body.className = mode === "light" ? "light-mode" : "dark-mode";
  }, [mode]);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  };

  return (
    <SearchProvider>
      <Router>
        <div className="App">
          <Navbar mode={mode} toggleMode={toggleMode} />
          <Home />
        </div>
      </Router>
    </SearchProvider>
  );
};

export default App;
