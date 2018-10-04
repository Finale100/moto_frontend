import React from 'react'
import { Image, Grid } from 'semantic-ui-react'
import { Carousel } from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import RaceDetailWinner from './RaceDetailWinner'
import ChatBoxContainer from './ChatBoxContainer'

export default class RaceDetail extends React.Component {


  render() {
    let oneRace = this.props.allRaces.find(race => race.id === parseInt(this.props.id))
    return(
      <React.Fragment>
        <br/>
        <br/>
        {oneRace ?
          <React.Fragment>
            <div className='title'>
              <h1>{oneRace.name}</h1>
            </div>
            <br/>
            <br/>
            <br/>
            <Grid>
              <Grid.Column width={3}>
                <ChatBoxContainer user={this.props.user} oneRace={oneRace}/>
              </Grid.Column>
              <Grid.Column width={9} floated='left'>
                <Carousel>
                  <div className='pic'>
                    <img src={oneRace.img} style={{borderRadius: '25px'}}/>
                  </div>
                  <div className='pic'>
                    <img src={oneRace.img2} style={{borderRadius: '25px'}}/>
                  </div>
                  <div className='pic'>
                    <img src={oneRace.img3} style={{borderRadius: '25px'}}/>
                  </div>
                  <div className='pic'>
                    <img src={oneRace.img4} style={{borderRadius: '25px'}}/>
                  </div>
                </Carousel>
              </Grid.Column>
              <Grid.Column width={4} floated='right'>
                <RaceDetailWinner oneRace={oneRace}/>
              </Grid.Column>
            </Grid>
          </React.Fragment>
        : null}

      </React.Fragment>
    )
  }
}
