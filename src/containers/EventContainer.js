import React from 'react'
import Event from '../components/Event'
import { Grid } from 'semantic-ui-react'


export default class EventContainer extends React.Component {
  render() {
    return(
      <Grid>
        <Grid.Column width={16}>
          <Event user={this.props.user} updateMyEvents={this.props.updateMyEvents}/>
        </Grid.Column>
      </Grid>
    )
  }
}
