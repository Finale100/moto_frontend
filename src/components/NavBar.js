import React from 'react'
import {NavLink} from 'react-router-dom'
import { Menu, Modal } from 'semantic-ui-react'
import Login from './Login'
import UserEditForm from './UserEditForm'
import {withRouter} from 'react-router-dom'

class NavBar extends React.Component {
state = {
  modalOpen: false
}
  logout = () => {
    this.props.handleLogout()
    this.props.history.push("/")
  }

  handleClose = () => {
    this.setState({
      modalOpen: false
    })
  }

  handleOpen = () => {
    this.setState({
      modalOpen: true
    })
  }

  render() {
    return (
      <React.Fragment>
        <Menu pointing secondary>
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
          <Menu.Item className='navbar name'  style={{color:'crimson', marginLeft: '30%', fontSize: '25px'}} name='摩托 摩托'/>
          { this.props.user ?
            <React.Fragment>
              <Modal
                trigger={<Menu.Item position="right"
                  name='Edit Account'
                  active={this.props.activeItem === 'Edit Account'}
                  // as={NavLink}
                  to='/login'
                  onClick={this.handleOpen}/>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
              basic>
                <UserEditForm updateUser={this.props.updateUser} handleClose={this.handleClose} handleLogout={this.props.handleLogout} user={this.props.user}/>
              </Modal>
              <Menu.Item
                name='My Events'
                active={this.props.activeItem === 'My Events'}
                as={NavLink}
                to='/myevents'
                onClick={this.props.handleItemClick}
              />
              <Menu.Item  name='Logout' onClick={this.logout}/>
            </React.Fragment> :
            <React.Fragment>
              <Modal
                trigger={<Menu.Item position="right"
                  name='Login'
                  active={this.props.activeItem === 'Login'}
                  as={NavLink}
                  to='/login'
                  onClick={this.handleOpen}/>}
                open={this.state.modalOpen}
                onClose={this.handleClose}
              basic>
                <Login updateUser={this.props.updateUser} handleClose={this.handleClose}/>
              </Modal>
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
export default withRouter(NavBar)
