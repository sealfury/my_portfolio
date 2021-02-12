import React from 'react'
import { Card, Icon, Popup, Button, Label } from 'semantic-ui-react'

const ProjectCard = ({ project }) => {
  const popupStyle = { borderRadius: 8, opacity: 0.9, padding: '1em' }
  return (
    <Popup
      flowing
      hoverable
      size='large'
      inverted
      position='top right'
      style={popupStyle}
      trigger={
        <Card raised>
          <Card.Content>
            <Card.Header>{project.name}</Card.Header>
          </Card.Content>
          <Card.Content
            style={{
              height: '200px',
              alignItems: 'center',
              backgroundImage: `url(${project.image})`,
              backgroundSize: 'cover',
            }}
          ></Card.Content>
          <Card.Description
            style={{ fontWeight: 'bold', color: 'purple', fontSize: 16 }}
          >
            {project.description}
          </Card.Description>
          <Card.Content extra>
            <Icon
              name={project.icon}
              circular
              inverted
              size='medium'
              color={project.color}
            />
            {project.language}
          </Card.Content>
        </Card>
      }
    >
      <Button as='a' labelPosition='right' href={project.link}>
        <Button color='purple'>
          <Icon size='large' color='teal' fitted name='github' />
        </Button>
        <Label basic color='purple' pointing='left'>
          Click for GitHub Repo!
        </Label>
      </Button>
    </Popup>
  )
}

export default ProjectCard
