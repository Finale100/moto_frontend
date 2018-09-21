import React from 'react'
import {NavLink} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends React.Component {
  render() {
    return (
      <Menu pointing secondary>
        <Menu.Item name='Moto Moto'/>
        <Menu.Item
          name='home'
          active={this.props.activeItem === 'home'}
          as={NavLink}
          to='/'
          onClick={this.props.handleItemClick} />
        <Menu.Item
          name='Events'
          active={this.props.activeItem === 'Events'}
          as={NavLink}
          to='/events'
          onClick={this.props.handleItemClick}
        />
        <Menu.Item
          name='Riders'
          active={this.props.activeItem === 'Riders'}
          as={NavLink}
          to='/riders'
          onClick={this.props.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item
            name='Sign Up'
            active={this.props.activeItem === 'Sign Up'}
            onClick={this.props.handleItemClick}
          />
        </Menu.Menu>
      </Menu>
    )
  }
}
