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
import Event from './components/Event'



class App extends Component {
  state = {
    activeItem: null,
    allRaces: [],
    selectedRace: null,
    allRiders: []
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


  render() {


    return (
      <Router>
        <React.Fragment>
          <NavBar activeItem={this.state.activeItem} handleItemClick={this.handleItemClick}/>
          <Grid>
            <Grid.Column width={4}>
              {this.state.allRaces.length === 19 ? <RaceSchedule races={this.state.allRaces} selectedRace={this.selectedRace}/> : null }
            </Grid.Column>
            <Grid.Column width={11}>
              <Route exact path='/' component={HomeContainer}/>
              <Route exact path='/events' component={Event}/>
              <Route exact path='/riders'/>
              <Route exact path='/signup'/>
            </Grid.Column>
          </Grid>
          {/* <Grid>
              <Grid.Column width={4}>
              {this.state.allRaces.length === 19 ? <RaceSchedule races={this.state.allRaces} selectedRace={this.selectedRace}/> : null }
              </Grid.Column>
              <Grid.Column width={7}>
              <FeaturedRace />
              </Grid.Column>
              <Grid.Column width={4} floated='right'>
              <Leaderboard riders={this.state.allRiders}/>
              </Grid.Column>
            </Grid> */}
            </React.Fragment>
          </Router>
          )
          }
          }

export default App;
