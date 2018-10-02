import React from 'react'
import { Header, Image, Table, Grid } from 'semantic-ui-react'

export default class Leaderboard extends React.Component {
  state = {
    allRiders: []
  }

  fetchRiders = () => {
    fetch('http://localhost:3000/riders')
    .then(response => response.json())
    .then(riders => {
      this.setState({
        allRiders: riders
      })
    })
  }

  componentDidMount = () => {
    this.fetchRiders()
  }

  render() {
    return (
    <Grid.Column width={6} >
      <br/>
      <br/>
      <Table basic='very' celled collapsing>
        <Table.Header>
          <Table.Row><h3>2018 MotoGP Leaderboard</h3></Table.Row>
          <Table.Row>
            <Table.HeaderCell>Rider</Table.HeaderCell>
            <Table.HeaderCell>Points</Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        {this.state.allRiders.slice(0, 10).map(rider => {
          return <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Header.Content>
                    {rider['name'].split(',')[0]}
                    <Header.Subheader>{rider['team']}</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell>{rider['points']}</Table.Cell>
            </Table.Row>
          </Table.Body>
        })}
      </Table>
    </Grid.Column>

    )
  }
}
