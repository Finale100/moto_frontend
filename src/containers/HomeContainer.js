import React from 'react'
import FeaturedRace from './FeaturedRace'
import Leaderboard from '../components/Leaderboard'
import {Grid, Segment} from 'semantic-ui-react'
import { Timeline } from 'react-twitter-widgets'

export default class HomeContainer extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10} floated='left'>
          <br></br>
          <h3 className='home page info'>Welcome to Moto Moto! We promote the love for motorcycle racing by trying to bring together fans from around the world at each race. Here you will find MotoGP race information throughout the season. Moto Moto is also a good channel for vendors to reach out to the fans to let them know when and where they'll be located at each race.</h3>
          <FeaturedRace />
          <Segment color='red' >
            <Timeline
              dataSource={{
                sourceType: 'profile',
                screenName: 'motogp'
              }}
              options={{
                username: 'TwitterDev',
                height: '400',
                width: '700'
              }}/>
          </Segment>
        </Grid.Column>
        <Grid.Column width={5} floated='left'>
          <Leaderboard />
        </Grid.Column>
      </Grid>
    )
  }

}
