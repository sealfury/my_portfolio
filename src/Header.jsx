import React from "react"
import { Menu, Segment } from "semantic-ui-react";
import { NavLink, Link } from "react-router-dom";
import './index.css'

const Header = () => {
    return (
       <Segment inverted>
           <Menu inverted secondary>
               <Menu.Item
                 id="header"
                 name="my portfolio"
                 as={Link}
                 to={{pathname: "/" }}
               />
               <Menu.Item
                 id="about-tab"
                 name="about me"
                 as={NavLink}
                 to={{ pathname: "/about" }}
               />
               <Menu.Item 
                 id="projects-tab"
                 name="my projects"
                 as={NavLink}
                 to={{ pathname: "/projects" }}
               />
               <Menu.Item
                 id="CV-tag"
                 name="CV"
                 as={NavLink}
                 to={{ pathname: "/CV" }}
              />
           </Menu>
       </Segment>
    );
};

export default Header;