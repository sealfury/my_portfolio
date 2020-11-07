import React from "react";
import { Card , Image } from "semantic-ui-react";

const AboutCard = ({ about }) => {
    return (
        
        <Card>
            
            <Card.Content>
                <Image src={about.image} wrapped ui={false} />
                <Card.Header>{about.name}</Card.Header>
                <Card.Description>{about.description}</Card.Description>
                
            </Card.Content>
            
            
        </Card>
       
    );
};

export default AboutCard

{/* <Image src={about.image} wrapped ui={false} /> */} 
// href={about.link}