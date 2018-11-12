import React from 'react'
import { Card, Icon, Grid, Button, Image } from 'semantic-ui-react'

export default class Riders extends React.Component {
  state = {
    allRiders: []
  }

  componentDidMount = () => {
    this.fetchRiders()
  }

  fetchRiders = () => {
    fetch("https://moto-moto-api.herokuapp.com/riders")
    .then(r => r.json())
    .then(rider => {
      this.setState({
        allRiders: rider
      })
    })
  }


  render() {
    return (
      <React.Fragment>
        <br/>
        <h1>Riders</h1>
        <br/>
        <br/>
        <br/>
        <Card.Group>
          {this.state.allRiders.map(rider => {
            return (
              <Card raised color='red'>
                <Image src={rider['img']} />
                <Card.Content>
                  <Card.Header>{rider['name']}</Card.Header>
                  <Card.Meta>
                    <span>{rider['team']} - #{rider['bike']}</span>
                  </Card.Meta>
                  <Card.Meta>
                    <span>{rider['nationality']}</span>
                  </Card.Meta>
                  <Card.Description>Total Points - {rider['points']}</Card.Description>
                  <Card.Description>Podiums - {rider['podiums']}</Card.Description>
                  <Card.Description>Pole Position - {rider['pole']}</Card.Description>
                  <Card.Description>Victories - {rider['victories']}</Card.Description>
                </Card.Content>
              </Card>
            )})}
        </Card.Group>
      </React.Fragment>
    )
  }
}
