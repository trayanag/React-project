import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import './styles.css';
import AuthContext from '../../Context/auth'



function Header() {
  const [user] = useContext(AuthContext);
  return (
    <ul className="main-nav-blog">

      {user.auth && <li><Link to="/all"><strong><i className="fas fa-blog"></i> Nerdy Girls</strong></Link></li>}
      {user.auth && <li> <Link to="/createPost">Create Post</Link></li>}
      {user.auth && <li><Link to="/myPosts">My Posts</Link></li>}
      {user.auth && <li> <Link to="/profile">Profile</Link></li>}
      {user.auth && <li><Link to="/search">Search</Link></li>}
      {user.auth && <li><Link to="/logout">Logout</Link></li>}
      {!user.auth && <li><Link to="/"><strong><i className="fas fa-blog"></i> Nerdy Girls</strong></Link></li>}
      {!user.auth && <li><Link to="/register">Register</Link></li>}
      {!user.auth && <li><Link to="/login">Login</Link></li>}
      {!user.auth && <li><Link to="/about">About</Link></li>}
      {!user.auth && <li><Link to="/contact">Contact </Link></li>}

    </ul>
  )
};

export default Header;