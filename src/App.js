import React, {useEffect, useState} from "react";
import Project from "./Project";

import './App.css';

function App() {


  const [projects, setProjects] = useState(["fwgf", "fgaeg"]);

  useEffect(() => {
    getProjects();
  }, []);

  const getProjects = async () => {
    const response = await fetch("/hey");
    const data = await response.json();
    console.log(data);
  }

  return (
    <div className="App">
      <h1> Hello React! </h1>
      {projects.map(project => (
        <Project projectData={project}/>
      ))}
    </div>
  );

}

export default App;
