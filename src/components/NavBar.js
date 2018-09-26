import React from 'react'
import {NavLink} from 'react-router-dom'
import { Menu } from 'semantic-ui-react'

export default class NavBar extends React.Component {

  logout = () => {
    this.props.handleLogout()
  }
  render() {
    return (
      <React.Fragment>
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
          { this.props.user ? <Menu.Item position='right' name='Logout' onClick={this.logout}/> :
          <React.Fragment>
            <Menu.Item position="right"
              name='Login'
              active={this.props.activeItem === 'Login'}
              as={NavLink}
              to='/login'
              onClick={this.props.handleItemClick}
            />
            <Menu.Item
              name='Register'
              active={this.props.activeItem === 'Register'}
              as={NavLink}
              to='/register'
              onClick={this.props.handleItemClick}
            />
          </React.Fragment>}
        </Menu>
      </React.Fragment>
    )
  }
}
