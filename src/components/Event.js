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
    fetch("http://localhost:3000/events")
    .then(response => response.json())
    .then(event => {
      this.setState({
        allEvents: event
      })
    })
  }

  createEvent = (e) => {
    fetch('http://localhost:3000/events', {
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
      console.log(event)
      this.setState({
        allEvents: [...this.state.allEvents, event]
      })
      this.createUserEvent(this.props.user.id, event.id)
    })
  }

  createUserEvent = (user_id, event_id, event) => {
    fetch('http://localhost:3000/user_events', {
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

  deleteEvent = (e) => {
    e.preventDefault()

    console.log(e)
  }

  render(){
    return(
      <React.Fragment>
        <br/>
        <h1>Events   <span><EventForm newEvent={this.newEvent} createEvent={this.createEvent} modalOpen={this.state.modalOpen} handleClose={this.handleClose} user={this.props.user} /></span></h1>
        <br/>
        <br/>
        <br/>
        <Card.Group>
          {this.state.allEvents.map(event => <EventCard createUserEvent={this.createUserEvent} event={event} user={this.props.user} fetchEvents={this.fetchEvents}/>)}
        </Card.Group>
      </React.Fragment>
    )
  }
}
