import React from 'react'
import { Button, Comment, Form, Header } from 'semantic-ui-react'

const ChatBox = () => {
  const {
    comments,
    disabled,
    changeHandler,
    user,
    oneRace,
    postComment 
  } = props;

  return (
    <React.Fragment>
        <Header as='h3' dividing>
          Chat It Up!
        </Header>
        <Comment.Group>
          {comments.map(comment => {
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
        {user ?
          <Form reply>
            <Form.TextArea 
              onChange={(e) => changeHandler(e.currentTarget.value, 'comment')}/>
            <Button 
              type='submit'
              disabled={disabled}
              content='Add Reply'
              labelPosition='left'
              icon='edit'
              primary
              onClick={(e) => postComment(e, user.id, oneRace.id, user.username)}/>
          </Form> : null }
        </React.Fragment>
  )
}

export default ChatBox;
