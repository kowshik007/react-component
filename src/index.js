import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import Faker from 'faker';

const App=()=>{
    return (
        <div className="ui container comments">
           <ApprovalCard>
            <CommentDetail author="Kowshik" timeAgo="Today at 07:00AM" commentText="This is great Kowshik" avatar={Faker.image.avatar()}></CommentDetail>
           </ApprovalCard>
           <ApprovalCard>
           <CommentDetail author="Karthik" timeAgo="Today at 06:00AM" commentText="This is Good" avatar={Faker.image.avatar()}></CommentDetail>
           </ApprovalCard>
           <ApprovalCard>
           <CommentDetail author="Sujatha" timeAgo="Today at 05:00AM" commentText="This is nice" avatar={Faker.image.avatar()}></CommentDetail>
           </ApprovalCard>
        </div>
    );
};

ReactDOM.render(<App/>,document.querySelector("#root"))