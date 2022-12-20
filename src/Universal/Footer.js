import React, { useState } from "react";
import Axios from "axios";
import "../Styles/footer.css";
function footer() {
  const showPopUp = () => {
    const turnon = document.getElementsByClassName("pop-up")[0];
    if (turnon.style.visibility == "visible") {
      turnon.style.visibility = "hidden";
    } else {
      turnon.style.visibility = "visible";
    }
  };
  return (
    <>
      <div className="container bg-warning pop-up">
        <div className="mt-2">
          Register
          <br />
          Add Stats
          <br />
          Edit
        </div>
      </div>
      <div className="footer">
        <div className="row">
          <div className="col-2 mt-2 m-3">
            <i
              className="fa-solid fa-house fa-xl"
              style={{ color: "black" }}
            ></i>
          </div>
          <div className="col-2 mt-2">
            <i className="fa-solid fa-robot fa-xl"></i>
          </div>
          <div className="col-2 big-plus">
            <i
              className="fa-sharp fa-solid fa-circle-plus fa-3x"
              onClick={showPopUp}
            ></i>
          </div>
          <div className="col-2 mt-2 m-3">
            <i className="fa-sharp fa-solid fa-file-invoice fa-xl"></i>
          </div>
          <div className="col-1 mt-2 gear">
            <i className="fa-solid fa-gear fa-xl"></i>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
