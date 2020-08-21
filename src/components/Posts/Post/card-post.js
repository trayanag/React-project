import React from 'react'
import moment from  'moment';
import Post from '../Post';

 const PostList = props => (
   <div>
    {props.posts.map((p, index) =>(

        
        <Post key={index}
             id={p._id}
             description={p.description}
             title={p.title}
             date={moment(p.date1).format('DD MMMM YYYY')}
             author={p.author.username}      
                   
           />
    ))}
      </div> 
);
export default PostList;