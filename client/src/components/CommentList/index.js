import React from 'react';
import { Comment, Header } from 'semantic-ui-react';

const CommentList = ({ comments = [] }) => {
  if (!comments.length) {
    return <h3>No Comments Yet</h3>;
  }

  return (
    <Comment.Group>
      <Header as='h3' dividing>
        Comments
      </Header>
      {comments.map((comment) => (
        <Comment key={comment._id}>
          <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' /> {/* Replace this with user's avatar */}
          <Comment.Content>
            <Comment.Author as='a'>{comment.commentAuthor}</Comment.Author>
            <Comment.Metadata>
              <div>{comment.createdAt}</div>
            </Comment.Metadata>
            <Comment.Text>{comment.commentText}</Comment.Text>
            {/* <Comment.Actions>
              <Comment.Action>Reply</Comment.Action>
            </Comment.Actions> */}
          </Comment.Content>
        </Comment>
      ))}
    </Comment.Group>
  );
};

export default CommentList;
