import React from 'react';
import CommentDetail from "./CommentDetail";
// import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="Yann"
        timeAgo="Today at 6:00PM"
        commentText="Great job!"
      />
      <CommentDetail
        author="Doug"
        timeAgo="Today at 4:47PM"
        commentText="Nice one, I liked it"
      />
      <CommentDetail
        author="Trouni"
        timeAgo="Today at 11:32AM"
        commentText="Cool cool cool"
      />
    </div>
  );
};

export default App;
