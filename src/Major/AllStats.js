import Axios from "axios";
import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "../Styles/allStats.css";
function AllStats() {
  const [teamsList, setTeamsList] = useState([]);
  const URL = "http://localhost:3002";
  useEffect(() => {
    const getTeamStats = async () => {
      const { data: post } = await Axios.get(`${URL}/getAllTeams`);
      setTeamsList(post);
    };
    getTeamStats();
  }, []);
  return (
    <>
      {teamsList.map((value, key) => {
        return (
          <>
            <NavLink to={`/teamStats/${value.team_number}`}>
              <div className="row m-3">
                <div className="col-3">
                  <div className="image-cropper">
                    <img
                      src={require(`../Images/${value.team_number}.png`)}
                      alt=""
                    />
                  </div>
                </div>
                <div className="col-8">
                  <h5 className="team">
                    {value.team_name} - {value.team_number}
                  </h5>
                </div>
              </div>
            </NavLink>
          </>
        );
      })}
    </>
  );
}

export default AllStats;
