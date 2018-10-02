import React from 'react'
import { Icon, Card, Form, Button } from 'semantic-ui-react'


export default class EditEventForm extends React.Component {
  state = {
    name: this.props.event.name,
    race: this.props.event.race,
    date: this.props.event.date,
    location: this.props.event.location,
    list: this.props.event.what_to_bring
  }

  changeHandler = (value, key) => {
    this.setState({
      [key]: value
    })
  }


  editEvent = (e) => {
    const id = this.props.event.id
    fetch(`http://localhost:3000/events/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        name: this.state.name,
        race: this.state.race,
        location: this.state.location,
        date: this.state.date,
        what_to_bring: this.state.list
      })
    }).then(() => {this.props.backEvent(); this.props.fetchEvents()})
  }

  render() {
    return(
      <Card>
        <Form>
          <h4>Edit Event</h4>
          <Form.Field>
            <label>Event Name:</label>
            <input value={this.state.name} onChange={(e) => this.changeHandler(e.currentTarget.value, 'name')}/>
          </Form.Field>
          <Form.Field>
            <label>Race:</label>
            <input value={this.state.race} onChange={(e) => this.changeHandler(e.currentTarget.value, 'race')}/>
          </Form.Field>
          <Form.Field>
            <label>Date:</label>
            <input value={this.state.date} onChange={(e) => this.changeHandler(e.currentTarget.value, 'date')}/>
          </Form.Field>
          <Form.Field>
            <label>Location:</label>
            <input value={this.state.location} onChange={(e) => this.changeHandler(e.currentTarget.value, 'location')}/>
          </Form.Field>
          <Form.Field>
            <label>What To Bring:</label>
            <input value={this.state.list} onChange={(e) => this.changeHandler(e.currentTarget.value, 'list')}/>
          </Form.Field>
          <div className= 'mierda'>
            <Icon name='undo alternate' size='big' onClick={this.props.backEvent}/>
            <Icon name='check' size='big' color='green' onClick={(e) => this.editEvent(e)}/>
          </div>
          </Form>
      </Card>
    )
  }
}
