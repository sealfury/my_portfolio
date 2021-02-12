import React from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { NavLink, Link } from 'react-router-dom'
import '../index.css'

const Header = () => {
  return (
    <Segment color='blue' className='menuSegment' inverted>
      <Menu
        color='blue'
        inverted
        borderless='true'
        fluid='true'
        pointing='true'
      >
        <Menu.Item
          id='header'
          name='my portfolio'
          as={Link}
          to={{ pathname: '/' }}
        />
        <Menu.Item
          id='projects-tab'
          name='my projects'
          as={NavLink}
          to={{ pathname: '/projects' }}
        />
        <Menu.Item
          id='CV-tab'
          name='CV'
          as={NavLink}
          to={{ pathname: '/CV' }}
        />
        <Menu.Item
          id='Contact-tab'
          name='Contact'
          as={NavLink}
          to={{ pathname: '/Contact' }}
          position='right'
        />
      </Menu>
    </Segment>
  )
}

export default Header
