import "./App.css";
import Profiles from "./components/profiles";
import { useState, useEffect } from "react";

function App() {
  const [profiles, setProfiles] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";
  useEffect(() => {
    const fetchData = () => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => setProfiles(data));
    };
    fetchData();
  }, []);
  return (
    <div className="App">
      <Profiles data={profiles} />
      {console.log(profiles)}
    </div>
  );
}

export default App;
