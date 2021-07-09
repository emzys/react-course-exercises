import React from 'react';
import CommentDetail from "./CommentDetail";
import ApprovalCard from "./ApprovalCard";
// import faker from 'faker';

const App = () => {
  return (
    <div className="ui container comments">
      <ApprovalCard>
        <CommentDetail
          author="Yann"
          timeAgo="Today at 6:00PM"
          commentText="Great job!"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Doug"
          timeAgo="Today at 4:47PM"
          commentText="Nice one, I liked it"
        />
      </ApprovalCard>
      <ApprovalCard>
        <CommentDetail
          author="Trouni"
          timeAgo="Today at 11:32AM"
          commentText="Cool cool cool"
        />
      </ApprovalCard>
    </div>
  );
};

export default App;
