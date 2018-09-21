import React, { Component } from 'react';
import { Menu, Grid } from 'semantic-ui-react'
import logo from './logo.svg';
import './App.css';
import RaceSchedule from './components/RaceSchedule'
import FeaturedRace from './containers/FeaturedRace'
import Leaderboard from './components/Leaderboard'


class App extends Component {
  state = {
    activeItem: 'home',
    allRaces: [],
    selectedRace: null
  }

  selectedRace = (e) => {
    this.setState({
      selectedRace: e.currentTarget.innerText
    })
  }

    fetchRaces = () => {
    fetch('http://localhost:3001/races')
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
    const { activeItem } = this.state

    return (
      <div>
        <div>
        <Menu pointing secondary>
          <Menu.Item name='Moto Moto'/>
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick} />
          <Menu.Item
            name='Events'
            active={activeItem === 'Events'}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            name='Races'
            active={activeItem === 'Races'}
            onClick={this.handleItemClick}
          />
          <Menu.Menu position='right'>
            <Menu.Item
              name='Sign Up'
              active={activeItem === 'Sign Up'}
              onClick={this.handleItemClick}
            />
          </Menu.Menu>
        </Menu>
        </div>
        <Grid>
          <Grid.Column width={4}>
            {this.state.allRaces.length === 19 ? <RaceSchedule races={this.state.allRaces} selectedRace={this.selectedRace}/> : null }
          </Grid.Column>
          <Grid.Column width={7}>
            <FeaturedRace />
          </Grid.Column>
          <Grid.Column width={4} floated='right'>
            <Leaderboard/>
          </Grid.Column>
        </Grid>
    </div>
      )
    }
  }

export default App;
