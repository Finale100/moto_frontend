import React from 'react'
import { Header, Image, Table, Grid, Segment } from 'semantic-ui-react'


export default class RaceDetailWinner extends React.Component {
  render() {
    return (
      <Segment >
        <Table basic='very' >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell><h2>Podium</h2></Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Table.Body>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src='https://purepng.com/public/uploads/large/purepng.com-gold-cup-trophygolden-cupgoldtrophymedalaward-1421526534866nthrh.png' rounded size='mini' />
                  <Header.Content>
                    {this.props.oneRace.winner}
                    <Header.Subheader>Winner</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src='http://www.kirk-matz.com/img/services/home1-services2.png' rounded size='mini' />
                  <Header.Content>
                    {this.props.oneRace.second}
                    <Header.Subheader>Second</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
            </Table.Row>
            <Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src='https://previews.123rf.com/images/madbit/madbit1006/madbit100600010/7163579-bronze-trophy-cup-on-white-background-high-resolution-3d-image.jpg' rounded size='mini' />
                  <Header.Content>
                    {this.props.oneRace.third}
                    <Header.Subheader>Third</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
            </Table.Row>
          </Table.Body>
        </Table>
      </Segment>
    )
  }
}
