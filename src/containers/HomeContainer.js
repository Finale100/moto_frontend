import React from 'react'
import FeaturedRace from './FeaturedRace'
import Leaderboard from '../components/Leaderboard'
import {Grid} from 'semantic-ui-react'
import { Timeline } from 'react-twitter-widgets'

export default class HomeContainer extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10} floated='left'>
          <FeaturedRace />
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
        </Grid.Column>
        <Grid.Column width={5} floated='left'>
          <Leaderboard />
        </Grid.Column>
      </Grid>
    )
  }

}
