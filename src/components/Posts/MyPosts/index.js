import React, { useContext, useEffect,useState } from 'react';
import PostList from '../Post/card-post';
import postService from '../../../services/postService';
import AuthContext from '../../../Context/auth';


const MyPosts = () => {

    const [user] = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postService.get().then(posts => {
          //console.log(posts.data)
            const myPostsArray = posts.data.filter(p => p.author._id === user.userId);
        // console.log(myPostsArray)
            
            setPosts(myPostsArray);
            
        });
    },[user.userId]);

    return  <PostList  posts={posts}/>;
}

export default MyPosts;