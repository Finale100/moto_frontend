import React from 'react'
import FeaturedRace from './FeaturedRace'
import Leaderboard from '../components/Leaderboard'
import {Grid} from 'semantic-ui-react'


export default class HomeContainer extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={7} floated='right'>
          <FeaturedRace />
        </Grid.Column>
        <Grid.Column width={4} floated='right'>
          <Leaderboard />
        </Grid.Column>
      </Grid>
    )
  }

}
