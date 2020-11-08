import React from "react";
import { Card, Image} from "semantic-ui-react";
// import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
    return (
        //<a href={project.link}>
        <Card >
            
            <Image src={project.image} wrapped ui={false} />
            <Card.Content>
                <Card.Header>{project.name}</Card.Header>
                <Card.Description>{project.description}</Card.Description>
                
            </Card.Content>
            <Card.Content extra>
                <a>
                    {project.language}
                </a>
            </Card.Content>
           
        </Card>
       //</a>
    );
};

export default ProjectCard