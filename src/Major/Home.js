import React, { useEffect, useState } from "react";
import "../Styles/home.css";
import Axios from "axios";
import { NavLink } from "react-router-dom";
function Home() {
  // const URL = "https://scouting2.herokuapp.com"
  const URL = "http://localhost:3002";

  const [teamsList, setTeamsList] = useState([]);
  const [matchList, setMatchList] = useState([]);
  const [userStats, setUserStats] = useState([]);
  useEffect(() => {
    const getTeamStats = async () => {
      const { data: post } = await Axios.get(`${URL}/getTeams`);
      setTeamsList(post);
    };
    getTeamStats();
  }, []);
  useEffect(() => {
    const getMatchList = async () => {
      const { data: post } = await Axios.get(`${URL}/getMatchList`);
      setMatchList(post);
    };
    getMatchList();
  }, []);
  return (
    <div>
      <div className="container teams ">
        <br />
        <div className="headers">Teams</div>
        {teamsList &&
          teamsList.map((value, key) => {
            return (
              <>
                <NavLink
                  to={`/teamStats/${value.team_number}`}
                  style={{ textDecoration: "none" }}
                >
                  <h5 className="team">
                    {value.team_name} - {value.team_number}
                  </h5>
                </NavLink>
              </>
            );
          })}
        <NavLink
          to="/allTeams"
          style={{
            fontSize: "12px",
            marginLeft: "5%",
            textDecoration: "none",
            color: "black",
          }}
        >
          See More <i className="fa-solid fa-chevron-right ml-3"></i>
          <br />
        </NavLink>
      </div>
      <div className="container matches ">
        <br />
        <div className="headers">Matches</div>
        {matchList &&
          matchList.map((value, key) => {
            return (
              <h5 className="team">
                {value.match_type} {value.match_number}
              </h5>
            );
          })}
        <NavLink
          to="/allMatches"
          style={{
            fontSize: "12px",
            marginLeft: "5%",
            textDecoration: "none",
            color: "black",
          }}
        >
          See More <i className="fa-solid fa-chevron-right ml-3"></i>
        </NavLink>

        <br />
      </div>
    </div>
  );
}

export default Home;
