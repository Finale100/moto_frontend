import React from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

export default class Login extends React.Component {

  state = {
    username: "",
    password: ""
  }

  changeHandler = (value, key) => {
    this.setState({
      [key]: value
    })
  }

  handleSubmit(e) {
  e.preventDefault()
  fetch('http://localhost:3001/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      username: this.state.username,
      password: this.state.password
      })
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
            <input name='race' placeholder='Password' onChange={(e) => this.changeHandler(e.currentTarget.value, 'password')} />
          </Form.Field>
          <Modal.Actions>
            <Button color='green' onClick={this.handleClose} inverted>
              <Icon name='checkmark' />Vroom Vroom
            </Button>
          </Modal.Actions>
        </Form>
      </React.Fragment>
    )
  }
}
