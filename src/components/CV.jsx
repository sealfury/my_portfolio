import React from 'react'
import {Container} from 'semantic-ui-react'
import CvAccordion from './Accordion'

const CV = () => {
  return (
    <Container>
      <CvAccordion />
    </Container>
  )
}

export default CV


// import React, { Component } from 'react'
// import { Container } from 'semantic-ui-react'
// import Accordion from './Accordion'

// import axios from 'axios'

// export default class JobsList extends Component {
//   state = {
//     jobs: [],
//   }
//   componentDidMount() {
//     axios.get('./data/jobs.json').then(response => {
//       this.setState({ jobs: response.data })
//     })
//   }

//   render() {
//     const { jobs } = this.state

//     let jobsList = jobs.map(job => {
//       return (
//         <div id={`job-${job.id}`} key={job.id}>
//           <Accordion name={job.name} description={job.title} />
//         </div>
//       )
//     })

//     return (
//       <Container>
//         <h2 id='jobs-header'>Employment History</h2>

//         <br />
//         <div className='jobs'>
//           <Accordion />
//           {/* {jobsList} */}
//         </div>
//         <br />
//         <h2 id='education-header'>Education</h2>
//         <div className='education'>
//           <Accordion
//             name='Stockholmsuniversitet'
//             description='Mastersexamen i Lingvistik'
//           />
//         </div>
//         <div>
//           <Accordion
//             name='University of Richmond'
//             description='Bachelor Degree, Literature'
//           />
//         </div>
//       </Container>
//     )
//   }
// }
