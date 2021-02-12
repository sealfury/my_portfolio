import React from 'react'
import { Card, Icon } from 'semantic-ui-react'
// import { Link } from "react-router-dom";

const ProjectCard = ({ project }) => {
  return (
    <>
      <Card href={project.link} raised>
        <Card.Content>
          <Card.Header>
            <Icon name='github square' size='large' color='blue'/>
            {project.name}
            </Card.Header>
        </Card.Content>
        <Card.Content
          style={{
            height: '200px',
            alignItems: 'center',
            backgroundImage: `url(${project.image})`,
            backgroundSize: 'cover',
          }}
        >
        </Card.Content>
          <Card.Description style={{fontWeight: 'bold', color: 'purple', fontSize: 16}}>{project.description}</Card.Description>
        <Card.Content extra>
          <Icon name={project.icon} circular inverted size='medium' color={project.color}/>
          {project.language}
          </Card.Content>
      </Card>
    </>
  )
}

export default ProjectCard
