import React, { useEffect, useState } from "react";
import "../Styles/home.css";
import Axios from "axios";
function Home() {
  const [teamsList, setTeamsList] = useState([]);
  useEffect(() => {
    const getTeamStats = async () => {
      const { data: post } = await Axios.get(
        `https://scouting2.herokuapp.com/getTeams`
      );
      setTeamsList(post);
    };
    getTeamStats();
  }, []);
  return (
    <div>
      <div className="container teams ">
        <br />
        <div className="headers">Teams bruh</div>
        {teamsList.map((value, key) => {
          return <>hi {value.team_name}</>;
        })}
      </div>
    </div>
  );
}

export default Home;
