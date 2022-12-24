import React, { useState } from "react";
import Axios from "axios";
import "../Styles/footer.css";
import { NavLink } from "react-router-dom";
function footer() {
  return (
    <>
      <br />
      <div className="footer">
        <div className="row">
          <div className="col-2 mt-2 m-3">
            <NavLink to={"/"}>
              {/* H */}
              <i
                className="fa-solid fa-house fa-xl"
                style={{ color: "black" }}
              ></i>
            </NavLink>
          </div>
          <div className="col-2 mt-2">
            <NavLink to={"/registerBot"}>
              {/* B */}
              <i
                className="fa-solid fa-robot fa-xl"
                style={{ color: "black" }}
              ></i>
            </NavLink>
          </div>
          <div className="col-2 big-plus">
            <NavLink to={"/registerMatch"}>
              {/* RM */}
              <i
                className="fa-sharp fa-solid fa-circle-plus fa-3x"
                style={{ color: "black" }}
              ></i>
            </NavLink>
          </div>
          <div className="col-2 mt-2 m-3">
            <NavLink to={"/seeStats"}>
              {/* S */}
              <if
                className="fa-sharp fa-solid fa-file-invoice fa-xl"
                style={{ color: "black" }}
              ></if>
            </NavLink>
          </div>
          <div className="col-1 mt-2 gear">
            <NavLink to={"/userSettings"}>
              {/* us */}
              <i
                className="fa-solid fa-gear fa-xl"
                style={{ color: "black" }}
              ></i>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default footer;
