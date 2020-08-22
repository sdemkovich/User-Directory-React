import React from "react";
import "../styles/header.css";

function Header() {
  return (
    <div className="container-fluid">
      <div className="row d-flex justify-content-center header-box">
        <div className="col-8">
          <h1>User Directory</h1>
          <h3>A simple React.JS application using Material-UI that shows a randomly generated directory of employees.</h3>
        </div>
      </div>
    </div>
  )
}

export default Header;