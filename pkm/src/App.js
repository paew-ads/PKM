import React, { useState, useEffect } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./routes/Routes";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes />
      </Router>
    </div>
  );
}

export default App;
