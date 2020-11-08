import React from "react";
import { Card , Image } from "semantic-ui-react";
import { NavLink } from "react-router-dom";

const AboutCard = ({ about }) => {
    return (
        
        <Card  as={NavLink} to={{ pathname: "/CV" }}>
            <Image class="ui small image"  src={about.image} wrapped ui = {false}  />
            <Card.Content>
                
                
                <Card.Header>{about.name}</Card.Header>
                <Card.Meta>{about.stina}</Card.Meta>
                <Card.Description>{about.description}</Card.Description>
                
            </Card.Content>
            
            
        </Card>
       
    );
};

export default AboutCard

