import React from 'react'
import { Image, Grid, Segment, Header } from 'semantic-ui-react'
import Leaderboard from '../components/Leaderboard'


export default class FeaturedRace extends React.Component {

  render() {
    return(
        <React.Fragment>
          <br/>
          <Header as='h2'>Featured Race</Header>

          <Segment raised color='red'>
            <Image src='https://cdn.autobild.es/sites/navi.axelspringer.es/public/styles/gallery_big/public/media/image/2017/11/marc-marquez-andrea-dovizioso-hacen-foto-batalla-final-motogp_0.jpg' size='large' style={{paddingRight: '5%'}} centered rounded/>
            <br/>
            The final race of the MotoGP season comes to you this Sunday November 18, 2018. 2018 has broken records, tested limits, reset the boundaries and rewritten some history. We end the season with a seven-time World Champion, some of the closest races and podiums in history, and another incredible highlights reel of this spectacular season. But it’s not over yet – there’s one more weekend to race. The season has been quite an exciting one but with many riders changing teams, 2019 will be even wilder!
            </Segment>
        </React.Fragment>
    )
  }
}
