import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import postService from '../../../services/postService';
import AuthContext from '../../../Context/auth'
import './styles.css';


const FullPost = (props) => {

    const postId = props.match.params.id;
    const [user] = useContext(AuthContext);
    const [title, setTitle] = useState();
    const [content, setContent] = useState();
    const [description, setDescription] = useState();
    const [keywords, setKeywords] = useState();
    const [creator, setCreator] = useState(false);

    useEffect(() => {
        postService.get(postId).then(res => {
            setTitle(res.data.title);
            setDescription(res.data.description);
            setKeywords(res.data.keywords);
            setContent(res.data.content);

            if (res.data.author._id === user.userId) {
                setCreator(true);
            }
        });
    }, [postId, user.userId]);

    const deletePost = () => {
        postService.delete(postId).then(() => {
            props.history.push('/myPosts');
        }).catch(err => console.log(err));
    }

    return (
       
            <div className="FullPost">
                <h2>{title} #{keywords}</h2>
                <p>{description}</p>
                <p>{content}</p>
                {creator ? <button className="delBtn" type="button" onClick={deletePost}>Delete post</button> : null}
                {creator ? <Link to={`/editPost/${postId}`}>Edit Post</Link> : null}
            </div>
    );
};

export default FullPost;