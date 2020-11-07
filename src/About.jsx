import React, { Component } from "react";
import { Container, Grid, Divider } from "semantic-ui-react";
import axios from "axios";
import AboutCard from "./AboutCard";

class About extends Component {

    state = {
        abouts: []
    };

    render() {
        const { abouts } = this.state;

        let aboutLink= abouts.map((about) => {
            return (
                <div class="aboutDiv" id={`about-${about.id}`} key={about.id}>
                    
                    <AboutCard about={about} />
                    
                </div>
            );
        });

        return (
            <Container>
                <h1 id="about-header">About Me</h1>
                <Divider />
                <p>
                    I definitely just wasted a not inconsiderable amount of time looking 
                    up the background of a popular but apparently nonsensical latin phrase.
                </p>
                
                <Grid>{aboutLink}</Grid>
            </Container>
        );
        
    };

    componentDidMount() {
        axios.get("./data/aboutMe.json").then((response) => {
            this.setState({ abouts: response.data });
        });
    }
}
export default About; 

/* <Container>
                
            </Container> */