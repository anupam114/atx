import React, { Suspense } from "react";
import Spinner from "react-bootstrap/Spinner";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Privacy from "./Pages/Privacy";
import Contact from "./Pages/Contact";
import Terms from "./Pages/Terms";
import Navigation from "./components/Navigation";
import ClosoureMap from "./components/ClosureMap";
// import CrossingsMap from "./components/CrossingsMap";
import CamerasMap from "./components/CamerasMap";
import Spinners from "./components/Spinners";

const CrossingsMap = React.lazy(() => import("./components/CrossingsMap"));

// const loading = (
//   <Spinner animation="border" role="status">
//   <span className="visually-hidden">Loading...</span>
// </Spinner>
// );

function App() {
  return (
    <Router>
        <div className="App">
        <Suspense fallback={<Spinners />}>
          <Navigation />
          <Routes>
            <Route
              path="/"
              element={
                <Home>
                  <ClosoureMap />
                </Home>
              }
            />
            <Route
              path="/crossings"
              element={
                <Home>
                  <CrossingsMap />
                </Home>
              }
            />
            <Route
              path="/cameras"
              element={
                <Home>
                  <CamerasMap />
                </Home>
              }
            />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="contact" element={<Contact />} />
          </Routes>
          </Suspense>
        </div>
    </Router>
  );
}

export default App;
