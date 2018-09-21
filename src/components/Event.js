import React from 'react'
import { Card, Icon, Grid, Button } from 'semantic-ui-react'


export default class Event extends React.Component {

  state = {
    allEvents: []
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

  componentDidMount =() => {
    this.fetchEvents()
  }

  render(){
    return(
      <React.Fragment>
        <h1>Events   <span><Button circular="bool" color="green"> + </Button></span></h1>
        <br/>
        <br/>
        <br/>
        {this.state.allEvents.map(event => {
          return  <Grid>
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
          </Grid>
        })}
      </React.Fragment>
    )
  }
}
