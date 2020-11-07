import React, { Component } from "react";
import { Container, Accordion, Icon } from "semantic-ui-react";
import JobAccordion from './JobAccordion';
import axios from "axios";

class Jobs extends Component {
    
    state = {
        jobs: []
           
    };

    render() {
        const { jobs } = this.state;

        let jobsList = jobs.map((job) => {
            return (
                <div id={`job-${job.id}`} key={job.id}>
                    <JobAccordion job={job} />
                </div>
            );
        });

        return (
            <Container>
                <h1 id="jobs-header" >My jobs</h1>
                <h3>A list of my coding accomplishments to date</h3>
                <br/>
                <Accordion>{jobsList}</Accordion>
            </Container>
        );
        
    };

    componentDidMount() {
        axios.get("./data/jobs.json").then((response) => {
            this.setState({ jobs: response.data });
        });
    }
}

export default Jobs;
