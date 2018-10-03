import React from 'react'
import EditEventForm from './EditEventForm'
import { Card, Icon, Grid, Button } from 'semantic-ui-react'

export default class EventCard extends React.Component {

  state = {
    editEvent: false,
    show: false
  }


  editEvent = () => {
    this.setState({
      editEvent: true
    })
  }

  componentDidMount(){
    (this.props.myEvents.map(event => event.id).includes(this.props.event.id)) ? this.showAttendance() : null
  }

  backEvent = () => {
    this.setState({
      editEvent: false
    })
  }

  handleClick=()=>{
    if(this.state.show === false){
      this.props.createUserEvent(this.props.user.id, this.props.event.id, this.props.event)
      console.log('hit');
      this.setState({show: true})
    } else if (this.state.show === true) {
      alert('This Event Has Already Been Added!')
    }
  }

  showAttendance = () => {
    if (this.state.show === false) {
      this.setState({
        show: true,
      })
    }
  }

  render() {
    return(
      <React.Fragment>
        {this.state.editEvent ?
          <EditEventForm backEvent={this.backEvent} event={this.props.event} fetchEvents={this.props.fetchEvents}/> :
          <Card raised color='red'>
            <Card.Content header={this.props.event.name} />
            <Card.Content description={`Date: ${this.props.event.date}`} />
            <Card.Content description={`Race: ${this.props.event.race}`} />
            <Card.Content description={`Location: ${this.props.event.location}`} />
            <Card.Content description={`What to Bring: ${this.props.event.what_to_bring}`} />
            <Card.Content extra>
              <Icon name='user' />
              {this.props.event.users.length} Attending
            </Card.Content>
            {this.props.user && this.props.event.creator === this.props.user.username ?
              <React.Fragment>
                <Button basic color='dark blue' onClick={this.editEvent}>Edit</Button>
                <Button basic color='red' onClick={(e) => this.deleteEvent(e)}>Delete</Button>
              </React.Fragment> : null}
            {this.props.user ? <Button basic color='green' onClick={this.handleClick}>
              {this.state.show ? 'Attending' : 'Attend'}
            </Button> : null}
          </Card>}
      </React.Fragment>
    )
  }
}
