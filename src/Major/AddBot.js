import React, { useState } from "react";
import Axios from "axios";
function Match() {
  const [teamNumber, setTeamNumber] = useState(0);
  const [teamName, setTeamName] = useState("");
  const [autoPoints, setAutoPoints] = useState();
  const [teleopPoints, setTeleopPoints] = useState();
  const [climbLevel, setClimbLevel] = useState();
  const [driveTrain, setDriveTrain] = useState();
  const [driveMotors, setDriveMotors] = useState();
  const [pointConsistency, setPointConsistency] = useState();
  const [climbConsistency, setClimbConsistency] = useState();
  // const [startingPosition, setStartingPosition] = useState();
  const [isDefense, setIsDefense] = useState();
  const [shootHeight, setShootHeight] = useState();
  const [notes, setNotes] = useState();
  const [image, setImage] = useState();
  const basicInfo = [
    { title: "Team Number", use: setTeamNumber },
    { title: "Team Name", use: setTeamName },
    { title: "Auto Points", use: setAutoPoints },
    { title: "Teleop Points", use: setTeleopPoints },
  ];
  const advancedInfo = [
    { title: "Point Cons. %", use: setPointConsistency },
    { title: "Climb Cons. %", use: setClimbConsistency },
  ];

  const climbLevel_select = [
    "None",
    "Low Bar",
    "Mid Bar",
    "High Bar",
    "Traversal Bar",
  ];
  const driveTrain_select = ["Mecanum Drive", "Swerve Drive", "Tank Drive"];
  const driveMotors_select = ["NEO", "CIM", "Falcon"];
  const isDefense_select = ["Always", "Never", "Mostly", "Rarely"];
  const shootHeight_select = ["Low Hub", "High Hub", "Both", "None"];

  const [userInfo, setuserInfo] = useState({
    file: [],
    filepreview: null,
  });

  const handleInputChange = (event) => {
    setuserInfo({
      ...userInfo,
      file: event.target.files[0],
    });
  };

  const [isSucces, setSuccess] = useState(null);

  const submit = async () => {
    const formdata = new FormData();
    formdata.append("name", teamNumber);
    formdata.append("avatar", userInfo.file);
    Axios.post("http://localhost:3002/imageupload", formdata, {
      headers: { "Content-Type": "multipart/form-data" },
    }).then((res) => {
      // then print response status
      console.warn(res);
      if (res.data.success === 1) {
        setSuccess("Image upload successfully");
      }
    });
  };

  const URL = "http://localhost:3002";
  const URL2 = "http://localhost:3000/";
  const submitRobot = () => {
    console.log("What?");
    Axios.post("http://localhost:3002/putPit", {
      team_number: teamNumber,
      auto_points: autoPoints,
      teleop_points: teleopPoints,
      climb_level: climbLevel,
      drive_train: driveTrain,
      drive_motors: driveMotors,
      point_consistency: pointConsistency,
      climb_consistency: climbConsistency,
      // starting_pos: startingPosition,
      team_name: teamName,
      is_DefenseBot: isDefense,
      shoot_height: shootHeight,
      notes: notes,
    }).then(() => {
      console.log("W?");
    });
    submit();
    window.location.href = `${URL2}`;
  };
  return (
    <div className="container ">
      <br />
      <small style={{ fontSize: "15px" }}>BASIC INFO</small>
      <hr />
      <div className="container mr-60" style={{ marginTop: "-5%" }}>
        <div className="formdesign">
          {isSucces !== null ? <h4> {isSucces} </h4> : null}
          <div className="form-row">
            <label className="text-white">Select Image :</label>
            <input
              type="file"
              className="form-control"
              name="upload_file"
              onChange={handleInputChange}
            />
          </div>
        </div>
      </div>
      <br />
      {basicInfo.map((val, key) => {
        return (
          <>
            <div className="row">
              <div className="col-4" style={{ fontSize: "15px" }}>
                {val.title}
              </div>
              <div className="col-4">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control align-middle"
                    onChange={(e) => {
                      val.use(e.target.value);
                    }}
                    style={{ height: "30px", marginTop: "-5px" }}
                  />
                </div>
              </div>
            </div>
            <br />
          </>
        );
      })}
      <div className="row">
        <div className="col-4"> Shoot Height</div>
        <div className="col-4 form-group">
          <select
            name=""
            className="form-control"
            id=""
            style={{ width: "215px" }}
            onChange={(e) => setShootHeight(e.target.value)}
          >
            <option value="0"> Pick Value</option>
            {shootHeight_select.map((value, key) => {
              return <option value={key}> {value}</option>;
            })}
          </select>
        </div>
      </div>
      <br />

      <div className="row">
        <div className="col-4">Climb Height</div>
        <div className="col-4 form-group">
          <select
            name=""
            className="form-control"
            id=""
            style={{ width: "215px" }}
            onChange={(e) => setClimbLevel(e.target.value)}
          >
            <option value="0"> Pick Value</option>
            {climbLevel_select.map((value, key) => {
              return (
                <option value={key} id={key}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <br />

      <div className="row">
        <div className="col-4">Drive Train</div>
        <div className="col-4 form-group">
          <select
            name=""
            className="form-control"
            id=""
            style={{ width: "215px" }}
            onChange={(e) => setDriveTrain(e.target.value)}
          >
            <option value="0"> Pick Value</option>

            {driveTrain_select.map((value, key) => {
              return (
                <option value={key} id={key}>
                  {value}
                </option>
              );
            })}
          </select>
        </div>
      </div>
      <br />
      <small style={{ fontSize: "15px" }}>ADVANCED INFO</small>
      <hr />
      <br />
      <div className="row">
        <div className="col-4"> Drive Motors.</div>
        <div className="col-4 form-group">
          <select
            name=""
            className="form-control"
            id=""
            style={{ width: "215px" }}
            onChange={(e) => setDriveMotors(e.target.value)}
          >
            <option value="0"> Pick Value</option>

            {driveMotors_select.map((value, key) => {
              return <option value={key}> {value}</option>;
            })}
          </select>
        </div>
      </div>
      <br />
      {advancedInfo.map((val, key) => {
        return (
          <>
            <div className="row">
              <div className="col-4" style={{ fontSize: "15px" }}>
                {val.title}
              </div>
              <div className="col-4">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control align-middle"
                    onChange={(e) => val.use(e.target.value)}
                    style={{ height: "30px", marginTop: "-5px" }}
                  />
                </div>
              </div>
            </div>
            <br />
          </>
        );
      })}
      {/* <div className="row">
        <div className="col-4"> Starting Pos.</div>
        <div className="col-4">
          <select
            name=""
            id=""
            style={{ width: "215px" }}
            onChange={(e) => setStartingPosition(e.target.value)}
          >
            <option value="0"> Pick Value</option>
            {startingPos_select.map((value, key) => {
              return <option value={key}> {value}</option>;
            })}
          </select>
        </div>
      </div> */}
      {/* <br /> */}
      <div className="row">
        <div className="col-4"> Defense Bot?</div>
        <div className="col-4 form-group">
          <select
            name=""
            id=""
            className="form-control"
            style={{ width: "215px" }}
            onChange={(e) => setIsDefense(e.target.value)}
          >
            <option value="0"> Pick Value</option>
            {isDefense_select.map((value, key) => {
              return <option value={key}> {value}</option>;
            })}
          </select>
        </div>
      </div>
      <br />
      <div className="form-group" style={{ width: "400px" }}>
        <label htmlFor="exampleFormControlTextarea1">
          Additional Comments (if needed)
        </label>
        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          placeholder="Put strengths/weaknesses, interesting features, etc"
          onChange={(e) => setNotes(e.target.value)}
        ></textarea>
      </div>
      <br />
      <div
        className="submit btn btn-primary"
        type="button"
        style={{ marginLeft: "20px" }}
        onClick={submitRobot}
      >
        Add Robot
      </div>

      <br />
      <br />
    </div>
  );
}

export default Match;
