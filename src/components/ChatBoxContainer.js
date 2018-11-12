import React from 'react'
import ChatBox from './ChatBox'

export default class Chatbox extends React.Component {
  state = {
    comment: '',
    allComments: [],
    disabled: true
  }

  componentDidMount(){
    this.fetchComments()
  }

  componentDidUpdate(prevProps) {
    if (this.props.oneRace.id !== prevProps.oneRace.id) {
      this.fetchComments();
    }
  }

  fetchComments = () => {
    let id = this.props.oneRace.id
    fetch(`https://moto-moto-api.herokuapp.com/races/${id}`)
    .then(r => r.json())
    .then(race => {
      this.setState({
        allComments: race.comments
      })
    })
  }

  changeHandler = (value, key) => {
    this.setState({
      [key]: value
    })
    if(this.state.comment === ''){
      this.setState({disabled: true})
    }else{
      this.setState({disabled: false})
    }

  }

  postComment = (e, user_id, race_id, username) => {
    fetch('https://moto-moto-api.herokuapp.com/comments', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        user_id: user_id,
        race_id: race_id,
        username: username,
        comment: this.state.comment
      })
    }).then(r => r.json())
    .then(json => {
    this.setState({
      allComments: [...this.state.allComments, json]
    })
  })
    .then(this.fetchComments())
    e.currentTarget.form.reset()
    this.setState({
      comment: ''
    })
  }

  render() {
    return (
      <React.Fragment>
        {this.state.allComments ? <ChatBox comments={this.state.allComments} user={this.props.user} oneRace={this.props.oneRace} postComment={this.postComment} changeHandler={this.changeHandler} disabled={this.state.disabled}/>: null}
      </React.Fragment>
    )
  }
}
