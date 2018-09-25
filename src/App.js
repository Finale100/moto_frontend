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


class App extends Component {
  state = {
    activeItem: null,
    allRaces: [],
    selectedRace: null,
    allRiders: [],
    activeRace: null
  }

  selectedRace = (e) => {
    this.setState({
      selectedRace: e.currentTarget.innerText
    })
  }

  fetchRaces = () => {
    fetch('http://localhost:3000/races')
    .then(response => response.json())
    .then(races => {
      this.setState({
        allRaces: races
      })
    })
  }

  componentDidMount = () => {
    this.fetchRaces()
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


  render() {


    return (
      <Router>
        <React.Fragment>
          <NavBar activeItem={this.state.activeItem} handleItemClick={this.handleItemClick}/>
          <Grid>
            <Grid.Column width={4}>
              {this.state.allRaces.length === 19 ? <RaceSchedule races={this.state.allRaces} selectedRace={this.selectedRace}
                activeRace={this.state.activeRace}
                menuBarRace={this.menuBarRace}/> : null }
            </Grid.Column>
            <Grid.Column width={12}>
              <Route exact path='/' component={HomeContainer}/>
              <Route exact path='/events' component={EventContainer}/>
              <Route exact path='/riders' component={RidersContainer}/>
              <Route exact path='/register' component={SignUp}/>
            </Grid.Column>
          </Grid>
        </React.Fragment>
      </Router>
    )
  }
}

export default App;
