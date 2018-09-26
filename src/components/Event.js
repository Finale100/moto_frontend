import React from 'react'
import { Card, Icon, Grid, Button } from 'semantic-ui-react'
import EventForm from './EventForm'

export default class Event extends React.Component {

  state = {
    allEvents: [],
    modalOpen: false
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

  createEvent = (state) => {
    fetch('http://localhost:3000/events', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name: state.event,
        race: state.race,
        date: state.date,
        location: state.location,
        what_to_bring: state.list
      })
    }).then(r => r.json())
    .then(event => {
      this.setState({
        allEvents: [...this.state.allEvents, event]
      })
    })
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
        <h1>Events   <span><EventForm newEvent={this.newEvent} createEvent={this.createEvent} modalOpen={this.state.modalOpen} handleClose={this.handleClose} user={this.props.user}/></span></h1>
        <br/>
        <br/>
        <br/>
        <Card.Group>
          {this.state.allEvents.map(event => {
            return (
              <Card>
                <Card.Content header={event.name} />
                <Card.Content description={`Date: ${event.date}`} />
                <Card.Content description={`Race: ${event.race}`} />
                <Card.Content description={`Location: ${event.location}`} />
                <Card.Content description={`What to Bring: ${event.what_to_bring}`} />
                <Card.Content extra>
                  <Icon name='user' />
                  4 Friends
                </Card.Content>
              </Card>
            )})}
        </Card.Group>
      </React.Fragment>
    )
  }
}
