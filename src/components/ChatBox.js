import React from 'react'
import { Button, Comment, Form, Header, Segment } from 'semantic-ui-react'

export default class ChatBox extends React.Component {

  render() {
    return (
      <React.Fragment>
        <Segment>
          <Header as='h3' dividing color='red'>
            Chat It Up!
          </Header>
          <Comment.Group>
            {this.props.comments.map(comment => {
              return (
                <React.Fragment>
                  <Comment>
                    <Comment.Content>
                      <Comment.Author as='a'>{comment.username}:</Comment.Author>

                      <Comment.Text>{comment.comment}</Comment.Text>
                    </Comment.Content>
                  </Comment>
                </React.Fragment>
              )
            })}
          </Comment.Group>
          {this.props.user ?
            <Form reply>
              <Form.TextArea onChange={(e) => this.props.changeHandler(e.currentTarget.value, 'comment')}/>
              <Button type='submit' disabled={this.props.disabled} content='Add Reply' labelPosition='left' icon='edit' primary onClick={(e) => this.props.postComment(e,this.props.user.id, this.props.oneRace.id, this.props.user.username)}/>
            </Form> : null }
        </Segment>
        </React.Fragment>
    )
  }
}
