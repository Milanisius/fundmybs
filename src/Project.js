import React, {useEffect, useState} from "react";

const Project = (projectData) => {
    return(
        <div>
            <h1>{projectData.name} from {projectData.ownerName}</h1>
            <p>{projectData.current} out of {projectData.goal} backed!</p>
            <p>{projectData.description}</p>
            <p>created on {projectData.creationTime}</p>
            <video controls="controls">
                <source src={projectData.video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Project;