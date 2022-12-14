import "./App.css";
import React from "react";
import CardLazy from "./components/cardLazy";
import { useState, useEffect } from "react";

const Profiles = React.lazy(() => import("./components/profiles"));

function App() {
  const [profiles, setProfiles] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    setTimeout(() => {
      const fetchData = () => {
        fetch(url)
          .then((response) => response.json())
          .then((data) => setProfiles(data));
      };
      fetchData();
    }, 800);
  }, []);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>PROFILES</h1>
      <React.Suspense fallback={<CardLazy />}>
        <Profiles data={profiles} />
      </React.Suspense>
    </div>
  );
}

export default App;
