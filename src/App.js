import React, { Component } from 'react';
import { Menu, Grid } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';
import RaceSchedule from './components/RaceSchedule'
import FeaturedRace from './containers/FeaturedRace'
import Leaderboard from './components/Leaderboard'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import HomeContainer from './containers/HomeContainer'
import EventContainer from './containers/EventContainer'
import RidersContainer from './containers/RidersContainer'
import SignUp from './components/SignUp'
import Login from './components/Login'
import MyEventsContainer from './containers/MyEventsContainer'
import RaceDetail from './components/RaceDetail'

class App extends Component {
  state = {
    activeItem: null,
    allRaces: [],
    selectedRace: null,
    allRiders: [],
    activeRace: null,
    user: null,
    myEvents: []
  }

  selectedRace = (e) => {
    this.setState({
      selectedRace: e.currentTarget.innerText
    })
  }

  fetchRaces = () => {
    fetch('https://moto-moto-api.herokuapp.com/races')
    .then(response => response.json())
    .then(races => {
      this.setState({
        allRaces: races
      })
    })
  }

  fetchUser = () => {
    fetch('https://moto-moto-api.herokuapp.com/profile', {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      }
    }).then(r => r.json())
    .then(this.updateUser)
  }

  componentDidMount = () => {
    this.fetchRaces()
    if (localStorage.getItem('token')) {
      this.fetchUser()
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({
      activeItem: name
    })
  }

  menuBarRace = (e, {name}) => {
    this.setState({
      activeRace: name
    })
  }

  updateUser = user => {
    debugger
    this.setState({
      user: user,
      myEvents: user.event
    })
  }

  updateMyEvents = (event) => {
    this.setState({
      myEvents: [...this.state.myEvents, event]
    })
  }

  leaveEvent = (event_id) => {
    let newEvents = this.state.myEvents.filter(event => event.id !== event_id)
    this.setState({
      myEvents: newEvents
    })
    fetch('https://moto-moto-api.herokuapp.com/delete_event',{
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
         Accept: 'application/json',
        'Authorization': `Bearer ${localStorage.getItem("token")}`
      },
      body: JSON.stringify({
        user_id: this.state.user.id,
        event_id: event_id
      })
    })
    console.log('deleted')
  }

  handleLogout = () => {
    this.setState({
      user: null
    })
    localStorage.clear()
  }

  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar activeItem={this.state.activeItem} handleItemClick={this.handleItemClick} user={this.state.user} handleLogout={this.handleLogout} updateUser={this.updateUser} />
          <Grid>
            <Grid.Column width={4}>
              {this.state.allRaces.length === 19 ? <RaceSchedule races={this.state.allRaces} selectedRace={this.selectedRace}
                activeRace={this.state.activeRace}
                menuBarRace={this.menuBarRace}/> : null }
            </Grid.Column>
            <Grid.Column width={12}>
              <Route exact path='/' component={HomeContainer}/>
              <Route exact path='/events' render={() => <EventContainer user={this.state.user} updateMyEvents={this.updateMyEvents} myEvents={this.state.myEvents}/>}/>
              <Route exact path='/riders' component={RidersContainer}/>
              <Route exact path='/register' render={() => <SignUp updateUser={this.updateUser}/>}/>
              <Route exact path='/myevents' render={() => <MyEventsContainer myEvents={this.state.myEvents} leaveEvent={this.leaveEvent}/>}/>
              <Route exact path='/race/:id' render={(props) => <RaceDetail id={props.match.params.id} allRaces={this.state.allRaces} user={this.state.user}/>} />
            </Grid.Column>
          </Grid>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
