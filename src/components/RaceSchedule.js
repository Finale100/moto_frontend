import React from 'react'
import { Grid, Menu, Segment } from 'semantic-ui-react'

class RaceSchedule extends React.Component {

 handleItemClick = (e) => {
   this.props.selectedRace(e)
 }


  render(){
    const { activeItem } = this.props.selectedRace
    return (
          <Menu fluid vertical tabular>
            <Menu.Item
              name='RACE SEASON'
              active={activeItem === this.props.selectedRace}
              onClick={this.handleItemClick} />
              <br/>
              {this.props.races.map(race => {
                return  <Menu.Item name={race['name']}
                  onClick={(e) => this.handleItemClick(e)}/>})}
          </Menu>
    )
  }
}

export default RaceSchedule
