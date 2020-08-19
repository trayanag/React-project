import React from 'react';
import './styles.css'
import { Link } from 'react-router-dom';


const Post = ({ id, title, description, date, author }) => {

    return (
        <div className="Blog-card">
            <div className="Blog-cardInner">
                <div className="card__img" />
                <div className="blog-card__info">
                    <h5>{title}</h5>
                    <p>
                        <span><i className="fas fa-pen-square"></i> {author}</span>
                        <span><i className="fas fa-calendar-week"></i> {date}</span>
                    </p>
                    <p>{description}</p>
                    <Link to={`/post/${id}`} className="infoBtn">Read more</Link>
                </div>
            </div>
        </div>

    );
};

export default Post;

