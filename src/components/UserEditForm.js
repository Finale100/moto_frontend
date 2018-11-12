import React from 'react'
import { Button, Checkbox, Form, TextArea, Modal, Grid } from 'semantic-ui-react'

export default class UserEditForm extends React.Component {

  state = {
    name: "",
    location: "",
    email: "",
    bike: "",
    img: "",
    password: "",
    about: "",
    username: "",
    loggedIn: null,
    modalOpen: false
  }

  changeHandler = (value, key) => {
    this.setState({
      [key]: value
    })
  }

  handleSubmit = (e) => {
    this.props.handleClose()
    this.editUser(e)
  }

  editUser = (e) => {
    const id = e.currentTarget.form[0].value
    fetch(`https://moto-moto-api.herokuapp.com/users/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: e.currentTarget.form[1].value,
        username: e.currentTarget.form[2].value,
        location: e.currentTarget.form[3].value,
        email: e.currentTarget.form[4].value,
        what_do_you_ride: e.currentTarget.form[5].value,
        img: e.currentTarget.form[6].value,
        about: e.currentTarget.form[7].value
      })
    }).then(r => r.json())
    .then(user => this.props.updateUser(user))
  }

  deleteUser = (e) => {
    const id = e.currentTarget.form[0].value
    fetch(`https://moto-moto-api.herokuapp.com/users/${id}`, {
      method: "DELETE"
    })
    this.props.handleLogout()
  }

  render() {
    return(
      <React.Fragment>
        <br/>
        <h1>Edit Profile</h1>
        <br/>
        <Form>
          <Form.Field>
            <input name='id' type='hidden' defaultValue={this.props.user.id}/>
          </Form.Field>
          <Form.Field>
            <label style={{color: 'white'}}>Name:</label>
            <input name='name' defaultValue={this.props.user['name']} onChange={(e) => this.changeHandler(e.currentTarget.value, 'name')}/>
          </Form.Field>
          <Form.Field>
            <label style={{color: 'white'}}>Username:</label>
            <input name='username' defaultValue={this.props.user['username']} onChange={(e) => this.changeHandler(e.currentTarget.value, 'username')}/>
          </Form.Field>
          <Form.Field>
            <label style={{color: 'white'}}>Location:</label>
            <input name='location' defaultValue={this.props.user['location']} onChange={(e) => this.changeHandler(e.currentTarget.value, 'location')}/>
          </Form.Field>
          <Form.Field>
            <label style={{color: 'white'}}>Email:</label>
            <input name='email' defaultValue={this.props.user['email']} onChange={(e) => this.changeHandler(e.currentTarget.value, 'email')}/>
          </Form.Field>
          <Form.Field>
            <label style={{color: 'white'}}>What Do You Ride?</label>
            <input name='bike' defaultValue={this.props.user['what_do_you_ride']} onChange={(e) => this.changeHandler(e.currentTarget.value, 'bike')}/>
          </Form.Field>
          <Form.Field>
            <label style={{color: 'white'}}>Img:</label>
            <input name='img' defaultValue={this.props.user['img']} onChange={(e) => this.changeHandler(e.currentTarget.value, 'img')}/>
          </Form.Field>
          <Form.Field>
            <label style={{color: 'white'}}>About:</label>
            <TextArea name='about' defaultValue={this.props.user['about']} onChange={(e) => this.changeHandler(e.currentTarget.value, 'about')}/>
          </Form.Field>
          <Button type='submit' color='blue' onClick={(e) => this.handleSubmit(e)}>Edit</Button>
          <Button type='delete' color='red' onClick={(e) => this.deleteUser(e)}>Delete 😢</Button>
        </Form>
      </React.Fragment>
    )
  }
}
