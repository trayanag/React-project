import React, { Component } from 'react';
import post from '../../../service/post';
import PostList from '../Post/card-post';


class AllPosts extends Component {

    state = {
        posts: []
    }
    componentDidMount() {

        post.get().then(posts => {
           //  console.log(posts.data);
            this.setState({ posts: posts.data });
        });
    }

    render() {
        const { posts } = this.state
        return <PostList  posts={posts}/>
    }
}
export default AllPosts;