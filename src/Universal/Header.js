import React, { useState } from "react";
import header from "../Styles/header.css";
import { NavLink } from "react-router-dom";

function Header(props) {
  return (
    <div className="header bg-primary">
      <div className="row">
        <div className="col-2 m-3">
          {props.hasBack == "true" ? (
            <>
              <NavLink to={`${props.linkBack}`}>
                <i className="fa-solid fa-arrow-left fa-xl arrow"></i>
              </NavLink>
            </>
          ) : null}
        </div>
        <div className="col-6" style={{ marginLeft: "-9%", marginTop: "1%" }}>
          <p className="text"> {props.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
