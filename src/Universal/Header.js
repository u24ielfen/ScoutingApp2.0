import React from "react";
import header from "../Styles/header.css";
function Header(props) {
  const mayBeIcon = () => {
    if (props.hasBack == "true") {
    }
  };
  return (
    <div className="header">
      <div className="row">
        <div className="col-2 m-3">
          <i className="fa-solid fa-arrow-left fa-xl arrow"></i>
          {mayBeIcon}
        </div>
        <div className="col-3 m-2">
          <p className="text"> {props.name}</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
