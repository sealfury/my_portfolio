import React from "react";
import { Container } from "semantic-ui-react";
import { Link , NavLink } from "react-router-dom";

const Hello = () => {
    return (
        <Container>
            <h2 id="welcome">Welcome To My Portfolio</h2>
            <p>My portfolio is empty at the moment, but head over to the</p><NavLink id="My Projects" to="/projects"></NavLink><p> 
            page to see the projects that I've finished so far.
            </p>
        </Container>
            
        
    );
};

export default Hello