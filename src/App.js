import "./App.css";
import { Router } from "@reach/router";
import Home from "./component/home/home";

import React, { useState } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Router>
        <Home exact path="/" />
      </Router>
    </div>
  );
}

export default App;
