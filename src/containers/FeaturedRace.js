import React from 'react'
import { Image, Grid, Segment, Header } from 'semantic-ui-react'
import Leaderboard from '../components/Leaderboard'


export default class FeaturedRace extends React.Component {

  render() {
    return(
        <React.Fragment>
          <br/>
          <br/>
          <br/>
          <Header as='h2'>Featured Race</Header>
          <br/>
          <Segment>
            <Image src='https://2yrh403fk8vd1hz9ro2n46dd-wpengine.netdna-ssl.com/wp-content/uploads/2017/09/2017-aragon-motogp-results-1.jpg' size='large' />
            <br/>
            MotoGP Aragon will be held on Sunday, September 23 at 1pm.
            Before that, practices one and two take place on Friday, September 21 at 8.55am and 1.05pm respectively.
            Practice three will begin at 8.55am on Saturday, September 22 before the battle for pole begins at 1.10pm with qualifying.
          </Segment>
        </React.Fragment>
    )
  }
}
