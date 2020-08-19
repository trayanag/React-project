import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../../Context/auth';
import postService from '../../services/postService';
import userService from '../../services/userService';
import './styles.css';


const ProfilePage = (props) => {

    
    const [user, setUserStatus] = useContext(AuthContext);
    const { name, surname, email, job } = user;
    const [posts, setPosts] = useState();


    useEffect(() => {
        postService.get().then(posts => {

            const myPostsArray = posts.data.filter(p => p.author._id === user.userId);
            // console.log(myPostsArray.length)
            const myPosts = myPostsArray.length
            // console.log(user)
            setPosts(myPosts);

        });
    },[user.userId]);



    const deleteProfile = () => {

        userService.delete(user.userId).then(() => {
            setUserStatus({ auth: false, userId: '' });
            props.history.push('/');

        }).catch(err => console.log(err));

    }

    return (
        <div className="Profile">
            <div className="center">

                <div className="profile">
                    <div className="image">
                        <img src='/avatar.png' alt="profile" />
                    </div>
                    <div className="name">{name} {surname}</div>
                    <div className="job">{job}</div>

                    <Link to="/editProfile" className="editBtn">Edit Profile</Link>
                    <button className="delProfil" type="button" onClick={deleteProfile}>Delete Profile</button>

                </div>

                <div className="stats">
                    <div className="box">
                        <span className="value">{posts}</span>
                        <span className="parameter">Posts</span>
                    </div>
                    <div className="box">
                        <span className="value">{email}</span>
                        <span className="parameter">Email</span>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default ProfilePage;
