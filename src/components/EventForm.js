import React from 'react'
import { Button, Header, Icon, Modal, Form } from 'semantic-ui-react'

export default class EventForm extends React.Component {

  state = {
    event: '',
    race: '',
    date: '',
    location: '',
    list: ''
  }

  changeHandler = (value,key) => {
    this.setState({
      [key]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.handleClose()
    this.props.createEvent(this.state)
  }

  render() {
    return(
      <React.Fragment>
        {this.props.user ? <Modal
          trigger={<Icon name="plus circle" color="green" onClick={this.props.newEvent}></Icon>}
          size='small'
          open={this.props.modalOpen}
          onClose={this.props.handleClose}>
          <Header icon='archive' content='Create Event' />
          <Modal.Content>
            <Form onSubmit={this.handleSubmit}>
              <Form.Field>
                <input id='user' name='user_id' type='hidden' value={this.props.user.username}/>
              </Form.Field>
              <Form.Field>
                <label>Event Name:</label>
                <input name='event' placeholder='Event Name' onChange={(e) => this.changeHandler(e.currentTarget.value, 'event')} />
              </Form.Field>
              <Form.Field>
                <label>Race:</label>
                <input name='race' placeholder='Race' onChange={(e) => this.changeHandler(e.currentTarget.value, 'race')} />
              </Form.Field>
              <Form.Field>
                <label>Date:</label>
                <input name='date' placeholder='Date' onChange={(e) => this.changeHandler(e.currentTarget.value, 'date')}/>
              </Form.Field>
              <Form.Field>
                <label>Location:</label>
                <input name='location' placeholder='Location' onChange={(e) => this.changeHandler(e.currentTarget.value, 'location')} />
              </Form.Field>
              <Form.Field>
                <label>What To Bring:</label>
                <input name='list' placeholder='What To Bring' onChange={(e) => this.changeHandler(e.currentTarget.value, 'list')}/>
              </Form.Field>
              <Button type='submit' onClick={(e) => this.handleSubmit(e)}>Submit</Button>
            </Form>
          </Modal.Content>
        </Modal> : null}
      </React.Fragment>
    )
  }
}
