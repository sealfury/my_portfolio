import React from "react";
import { Container } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Hello = () => {
    return (
        <Container>
            <div>
            <h2 id="welcome">Welcome To My Portfolio</h2>
            <p>My portfolio is empty at the moment, but head over to the<Link to="/projects">My Projects</Link>  
              page to see the projects that I've finished so far.
            </p>
            </div>
        </Container>
            
        
    );
};

export default Hello