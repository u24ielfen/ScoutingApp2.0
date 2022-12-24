import {
  BrowserRouter as Router,
  Routes,
  Route,
  Redirect,
  Navigate,
  Switch,
} from "react-router-dom";
import React from "react";
import Footer from "./Universal/Footer";
import Home from "./Major/Home";
import Stats from "./Major/Stats";
import Team from "./Major/Team";
import Header from "./Universal/Header";
import AddBot from "./Major/AddBot";
import RegisterMatch from "./Major/Matches/Register";
import AddStats from "./Major/Matches/AddStats";
import EditMatch from "./Major/Matches/Edit";
import BotStats from "./Major/BotStats";
import AllStats from "./Major/AllStats";
import UPLOAD from "./upload";
import Matches from "./Major/Matches";
function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header name="Home" hasBack="false" />
              <Home />
              <Footer />
            </>
          }
        />
        <Route
          path="/registerMatch"
          element={
            <>
              <Header name="Match" hasBack="true" linkBack="/" />
              <RegisterMatch />
              <Footer />
            </>
          }
        />
        <Route
          path="registerBot"
          element={
            <>
              <Header name="Register Bot" hasBack="true" linkBack="/" />
              <AddBot />
              <Footer />
            </>
          }
        />
        <Route
          path={`/teamStats/:teamNumber`}
          element={
            <>
              {" "}
              <Header name="Team Stats" hasBack="true" linkBack="/allTeams" />
              <BotStats />
              <Footer />
            </>
          }
        />
        <Route
          path="/allTeams"
          element={
            <>
              <Header name="All Teams" hasBack="true" linkBack="/" />
              <AllStats />
              <Footer />
            </>
          }
        />
        <Route
          path="/upload"
          element={
            <>
              <UPLOAD />
              <Footer />
            </>
          }
        />
        <Route
          path="/allMatches"
          element={
            <>
              <Header name="All Matches" hasBack="true" linkBack="/" />
              <Matches />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
