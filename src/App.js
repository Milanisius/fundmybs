import React, {useEffect, useState} from "react";
import Project from "./Project";

import './App.css';

function App() {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    console.log("useEffects triggered");
    getProjects();
  }, []);

  const getProjects = async () => {
    const response = await fetch("/api/projectsQuery");
    const data = await response.json();
    console.log(data);
    console.log(data[0]);
    setProjects(data);
  }

  return (
    <div className="App">
      <h1> Fund my Bullshit </h1>
      {projects.map(project => (
        <Project key={project.id} projectData={project}/>
      ))}
    </div>
  );
}

export default App;
