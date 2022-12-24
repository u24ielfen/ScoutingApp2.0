import Axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../Styles/botstats.css";
function BotStats() {
  const URL = `http://localhost:3002`;
  const [botStats, setBotStats] = useState([]);
  const [matchNames, setMatchNames] = useState([]);
  const params = useParams("/teamStats/:teamNumber");
  const { teamNumber } = params;
  useEffect(() => {
    const getStats = async () => {
      const { data: post } = await Axios.get(
        `${URL}/getTeamStats/${teamNumber}`
      );

      setBotStats(post);
    };
    const getMatch = async () => {
      const { data: post } = await Axios.get(
        `${URL}/getMatchNames/${teamNumber}`
      );
      setMatchNames(post);
    };
    getStats();
    getMatch();
    console.log(botStats);
  }, []);
  return (
    <div>
      {botStats.map((value, key) => {
        {
          if (value.climb_level === 0) {
            value.climb_level = "None";
          } else if (value.climb_level === 1) {
            value.climb_level = "Low Bar";
          } else if (value.climb_level === 2) {
            value.climb_level = "Mid Bar";
          } else if (value.climb_level === 3) {
            value.climb_level = "High Bar";
          } else if (value.climb_level === 4) {
            value.climb_level = "Traversal Bar";
          }
          if (value.drive_train === 0) {
            value.drive_train = "Mecanum Drive";
          } else if (value.drive_train === 1) {
            value.drive_train = "Swerve Drive";
          } else if (value.drive_train === 2) {
            value.drive_train = "Tank Drive";
          }
          if (value.shoot_height === 0) {
            value.shoot_height = "Low Hub";
          } else if (value.shoot_height === 1) {
            value.shoot_height = "High Hub";
          } else if (value.shoot_height === 2) {
            value.shoot_height = "Both Hubs";
          } else if (value.shoot_height === 3) {
            value.shoot_height = "No Shooting";
          }
          if (value.drive_motors === 0) {
            value.drive_motors = "NEO Motors";
          } else if (value.drive_motors === 1) {
            value.drive_motors = "SIM Motors";
          } else if (value.drive_motors === 2) {
            value.drive_motors = "Falcon Motors";
          }
          if (value.is_DefenseBot === 0) {
            value.is_DefenseBot = "Always";
          } else if (value.is_DefenseBot === 1) {
            value.is_DefenseBot = "Never";
          } else if (value.is_DefenseBot === 2) {
            value.is_DefenseBot = "Mostly";
          } else if (value.is_DefenseBot === 3) {
            value.is_DefenseBot = "Rarely";
          }
        }
        return (
          <>
            <div className="cropContainer">
              <img
                src={require(`../Images/${value.team_number}.png`)}
                alt=""
                className="image slow"
                id="slowDiv"
              />
            </div>
            <div className="slider">
              <div className="row">
                <div className="col-3" style={{ marginLeft: "2%" }}>
                  Scouting
                </div>
                {matchNames.map((val, key) => {
                  return (
                    <>
                      <div className="col-3">
                        {val.match_type} {val.match_number}
                      </div>
                    </>
                  );
                })}
              </div>
            </div>
            <div className="">
              <h4
                className="biggerDiv "
                style={{ marginTop: "-4%", marginLeft: "2%" }}
              >
                {value.team_name} - {value.team_number}
              </h4>
              <div className="info-container container mt-3">
                <small style={{ fontSize: "15px" }}>BASIC INFO</small>
                <hr />
                <p>Auto Points: {value.auto_points}</p>
                <p>Teleop Points: {value.teleop_points}</p>
                <p>Climb Level: {value.climb_level}</p>
                <p>Drivetrain: {value.drive_train}</p>
                <br />
                <small style={{ fontSize: "15px" }}>ADVANCED INFO</small>
                <hr />
                <p>Drive Motors: {value.drive_motors}</p>
                <p>Point Consistency: {value.point_consistency}</p>
                <p>Climb Consistency: {value.climb_consistency}</p>
                <p>Defense Bot: {value.is_DefenseBot}</p>
                <p>
                  Notes: <br />
                  <p style={{ marginLeft: "5%" }}>{value.notes}</p>
                </p>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}

export default BotStats;
