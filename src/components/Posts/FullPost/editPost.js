/*  eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState, useContext } from 'react';
import post from '../../../service/post';
import AuthContext from '../../context';
import validationEditPost from '../../../utils/validationEditPost';
import '../CreatePost/styles.css'
import CustomButton from '../../../components/CustomButton';


const editPost = (props) => {

    const postId = props.match.params.id;

    const [user, setUserStatus] = useContext(AuthContext);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [keywords, setKeywords] = useState('');
    const [content, setContent] = useState('');

    const updateTitle = e => {
        setTitle(e.target.value);
    }

    const updateDescription = e => {
        setDescription(e.target.value);
    };
    const updateKeywords = e => {
        setKeywords(e.target.value);
    };

    const updateContent = e => {
        setContent(e.target.value);
    };

    useEffect(() => {
        post.get(postId).then(res => {
            
            setTitle(res.data.title);
            setDescription(res.data.description)
            setKeywords(res.data.keywords);
            setContent(res.data.content);
        });
    }, [postId, user.userId]);


    const handleSubmit = () => {

        if (validationEditPost(title, description, keywords, content)) {

            post.edit(postId, title, description, keywords, content).then(() => {
                setUserStatus({ auth: true, userId: user.userId, title, description, keywords, content });
            }).then(() => {
                props.history.push('/all');
            });
        }
    }

    return (
        <div className="create-listings">
            <form className="container">

                <h1>Edit your Post</h1>
                <p>Title</p>
                <input type="text" name="title" value={title} onChange={updateTitle} />
                <p>Description</p>
                <input type="text" name="description" value={description} onChange={updateDescription} />
                <p>Keywords</p>
                <input type="text" name="keywords" value={keywords} onChange={updateKeywords} />
                <p>Content</p>
                <textarea rows="6" name="content" type="text" value={content} onChange={updateContent} />
                <CustomButton type="button" onClick={handleSubmit}>Edit Post</CustomButton>
            </form>
        </div>

    );
}

export default editPost;

