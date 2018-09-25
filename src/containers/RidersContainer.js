import React from 'react'
import Riders from '../components/Riders'
import { Grid } from 'semantic-ui-react'

export default class RidesContainer extends React.Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={16}>
          <Riders/>
        </Grid.Column>
      </Grid>
    )
  }
}
