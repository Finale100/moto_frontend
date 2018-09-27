import React from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'
import {withRouter} from 'react-router-dom'

class Login extends React.Component {

  state = {
    username: "",
    password: ""
  }

  changeHandler = (value, key) => {
    this.setState({
      [key]: value
    })
  }

  handleSubmit = (e) => {
  e.preventDefault()
  this.props.handleClose()
  this.props.history.push("/")
  fetch('http://localhost:3000/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      username: e.target.elements[0].value,
      password: e.target.elements[1].value
      })
    }).then(r => r.json())
    .then(json => {
      this.props.updateUser(json.user)
      localStorage.setItem('token', json.token)
    })
  }

  render() {
    return(
      <React.Fragment>
        <Header content='🏍 Log In' size="small"/>
        <Form onSubmit={this.handleSubmit}>
          <Form.Field>
            <label><font color="white">Username:</font></label>
            <input name='event' placeholder='Username' onChange={(e) => this.changeHandler(e.currentTarget.value, 'username')} />
          </Form.Field>
          <Form.Field>
            <label><font color="white">Password:</font></label>
            <input type='password' name='race' placeholder='Password' onChange={(e) => this.changeHandler(e.currentTarget.value, 'password')} />
          </Form.Field>
          <Modal.Actions>
            <Button color='green'>
              <Icon name='checkmark' />Vroom Vroom
            </Button>
          </Modal.Actions>
        </Form>
      </React.Fragment>
    )
  }
}

export default withRouter(Login)
