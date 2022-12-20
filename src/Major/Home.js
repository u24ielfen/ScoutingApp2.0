import React, { useEffect, useState } from "react";
import "../Styles/home.css";
function Home() {
  const [teamsList, setTeamsList] = useState([]);
  useEffect(() => {
    const getTeamStats = async () => {
      const { data: post } = await Axios.get(
        `https://https://scouting2.herokuapp.com/getTeams`
      );
      setTeamsList(post);
    };
    getTeamStats();
  }, []);
  return (
    <div>
      <div className="container teams ">
        <br />
        <div className="headers">Teams</div>
        {teamsList.map((value, key) => {
          return <>{value.team_name}</>;
        })}
      </div>
    </div>
  );
}

export default Home;
