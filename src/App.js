import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import Navbar from "./components/navbar"
// import Header from "./components/header.js";
import Footer from "./components/footer"
import Home from "./components/home"

function App() {
  return (
    <Router>
      <div>
        <Route path="/" component={Home} />
        <Footer />
      </div>
    </Router>
  );
}


export default App;
