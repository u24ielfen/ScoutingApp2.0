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
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
