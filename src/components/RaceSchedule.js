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
      <React.Fragment>
      <React.Fragment>
        <h3 className='Race Title'>2018 Race Season</h3>
      </React.Fragment>
      <Menu fluid vertical tabular>
          {this.props.races.map(race => {
            return  (
              <Link to={`/race/${race.id}`}>
                <Menu.Item
                  name={race['name']}
                  active={activeItem === race['name']}
                  onClick={(e) => this.handleItemClick(e)}/>
              </Link>
            )
          })}
      </Menu>
      </React.Fragment>
    )
  }
}

export default RaceSchedule
