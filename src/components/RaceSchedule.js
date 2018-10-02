import React from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'
import {NavLink, Link} from 'react-router-dom'

class RaceSchedule extends React.Component {

 handleItemClick = (e) => {
   this.props.selectedRace(e)
 }


  render(){
    const { activeItem } = this.props.selectedRace
    return (
          <Menu fluid vertical tabular>
            <Menu.Item name='RACE SEASON'/>
            <br/>
            {this.props.races.map(race => {
              return  (
                <Link to={`/race/${race.id}`}>
                  <Menu.Item
                    name={race['name']}
                    active={this.props.selectedRace === race['name']}
                    onClick={(e) => this.handleItemClick(e)}/>
                </Link>
              )
              })}
            </Menu>
            )
  }
}

export default RaceSchedule
