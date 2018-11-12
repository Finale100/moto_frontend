import React from 'react'
import { Card, Icon, Grid, Button } from 'semantic-ui-react'
import EventForm from './EventForm'
import EventCard from './EventCard'

export default class Event extends React.Component {

  state = {
    allEvents: [],
    modalOpen: false,
  }

  fetchEvents = () => {
    fetch("https://moto-moto-api.herokuapp.com/events")
    .then(response => response.json())
    .then(event => {
      this.setState({
        allEvents: event
      })
    })
  }

  createEvent = (e) => {
    fetch('https://moto-moto-api.herokuapp.com/events', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: e.event,
        race: e.race,
        date: e.date,
        location: e.location,
        what_to_bring: e.list,
        creator: document.getElementById('user').value
      })
    }).then(r => r.json())
    .then(event => {
      this.setState({
        allEvents: [...this.state.allEvents, event]
      })
      this.createUserEvent(this.props.user.id, event.id, event)
    })
  }

  createUserEvent = (user_id, event_id, event) => {
    fetch('https://moto-moto-api.herokuapp.com/user_events', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: user_id,
        event_id: event_id
      })
    })
    this.props.updateMyEvents(event)
  }


  handleClose = () => {
    this.setState({
      modalOpen: false
    })
  }

  componentDidMount =() => {
    this.fetchEvents()
  }

  newEvent = () => {
    this.setState({
      modalOpen: true
    })
  }


  render(){
    return(
      <React.Fragment>
        <br/>
        <h1>Events   <span><EventForm newEvent={this.newEvent} createEvent={this.createEvent} modalOpen={this.state.modalOpen} handleClose={this.handleClose} user={this.props.user} /></span></h1>
        <br/>
        <p>We encourage fans and vendors from all over the world to come together to enjoy these spectacular events. Please Login or SignUp to create an event to meetup with other fans or announce your location if you're a vendor!!!</p>
        <br/>
        <br/>
        <Card.Group>
          {this.state.allEvents.map(event => <EventCard createUserEvent={this.createUserEvent} event={event} user={this.props.user} fetchEvents={this.fetchEvents} myEvents={this.props.myEvents}/>)}
        </Card.Group>
      </React.Fragment>
    )
  }
}
