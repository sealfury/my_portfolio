import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import Accordion from './Accordion';


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
                    <Accordion job={job} />
                </div>
            );
        });

        return (
            <Container>
                <h2 id="jobs-header" >Employment History</h2>
                
                <br/>
                <div className="jobs">
                    <Accordion  />{jobsList}
                    
                </div>
                <br/>
                <h2 id="education-header">Education</h2>
                <div className="education">
                    <Accordion />
                </div>
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






// function Jobs() {
//     return (
//         <div className="Jobs">
            


//         </div>
//     )
// // }

// export default Jobs
