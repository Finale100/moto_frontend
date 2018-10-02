import React from 'react'
import EventCard from '../components/EventCard'
import { Card, Button } from 'semantic-ui-react'


export default class MyEventsContainer extends React.Component {



render() {
  return(
    <React.Fragment>
      <br/>
      <br/>
      <h1>My Events</h1>
      <br/>
      <Card.Group>
        {this.props.myEvents ? this.props.myEvents.map(event => {
          return (
            <Card>
              <Card.Content>
                <Card.Header>{event.name}</Card.Header>
                <Card.Meta>{event.date}</Card.Meta>
                <Card.Description><h5>Race:</h5> {event.race}</Card.Description>
                <Card.Description><h5>Location:</h5> {event.location}</Card.Description>
                <Card.Description><h5>What To Bring:</h5> {event.what_to_bring  }</Card.Description>
                <br/>
                <Button color='red' onClick={() => this.props.leaveEvent(event.id)}>Leave Event</Button>
              </Card.Content>
            </Card>
          )
        })
        : null }
          </Card.Group>
          </React.Fragment>
    )
  }
}
