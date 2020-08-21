import React, { useContext, useEffect, useState } from 'react';
import PostList from '../Post/card-post';
import post from '../../../service/post';
import AuthContext from '../../context';


const MyPosts = () => {

    const [user] = useContext(AuthContext);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        post.get().then(posts => {
           // console.log(posts.data)
            //console.log(user.userId)
            const myPostsArray = posts.data.filter(p => p.author._id === user.userId);
           
            setPosts(myPostsArray);

        });
    }, [user.userId]);


    return <PostList posts={posts} />;
}

export default MyPosts;