import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import GlobalStyles from "./styles/GlobalStyles";
import Home from "./pages/Home";
import WaitingList from "./pages/WaitingList";


function App() {

  return (
    <Router>
      <GlobalStyles />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lista-de-espera" element={<WaitingList />} />
      </Routes>
    </Router>
  );
}

export default App;