import React, { Component } from 'react'
import { Card, Container, Grid, Header, Icon } from 'semantic-ui-react'
import ProjectCard from './ProjectCard'
import axios from 'axios'

class Projects extends Component {
  state = {
    projects: [],
  }

  render() {
    const { projects } = this.state

    const mainProjectsList = projects.map(project => {
      return (
        <Card.Group
          items={projects}
          id={`project-${project.id}`}
          key={project.id}
        >
          <ProjectCard project={project} />
        </Card.Group>
      )
    })

    return (
      <Container>
        <Header
          className='headerIcon'
          size='massive'
          icon
          textAlign='center'
          as='h2'
          id='projects-header'
        >
          <Icon name='code branch' inverted color='purple' circular />
        </Header>
        <Header as='h1' textAlign='center' color='yellow' dividing>
          Some Coding Accomplishments To Date
        </Header>
        <br />
        <Grid
          centered
          inverted
          container
          padded
          stretched
          verticalAlign='middle'
          columns={3}
        >
          {mainProjectsList}
        </Grid>
      </Container>
    )
  }

  componentDidMount() {
    axios.get('./data/projects.json').then(response => {
      this.setState({ projects: response.data })
    })
  }
}

export default Projects
