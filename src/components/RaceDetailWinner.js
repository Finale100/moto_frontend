import React from 'react'
import { Header, Image, Table, Grid } from 'semantic-ui-react'


export default class RaceDetailWinner extends React.Component {
  render() {
    return (
          <Table basic='very' celled collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell><h2>Podium</h2></Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.Cell>
                  <Header as='h4' image>
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBLKerav54SLOAgY7XzFscosVNis7sM3hH5p3GnnWalohn3hhbaIV5HE' rounded size='mini' />
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
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBLKerav54SLOAgY7XzFscosVNis7sM3hH5p3GnnWalohn3hhbaIV5HE' rounded size='mini' />
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
                    <Image src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLBLKerav54SLOAgY7XzFscosVNis7sM3hH5p3GnnWalohn3hhbaIV5HE' rounded size='mini' />
                    <Header.Content>
                      {this.props.oneRace.third}
                      <Header.Subheader>Third</Header.Subheader>
                    </Header.Content>
                  </Header>
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
    )
  }
}
