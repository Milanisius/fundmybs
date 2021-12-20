import React, {useEffect, useState} from "react";

const Project = (projectData) => {
    return(
        <div>
            <h1>Title</h1>
            <p>Text1</p>
            <video controls="controls">
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    );
};

export default Project;