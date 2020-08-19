import React, { useContext } from 'react';
import userService from '../../services/userService';
import AuthContext from '../../Context/auth';
import { Redirect } from 'react-router-dom';

const Logout = props => {
  // eslint-disable-next-line
  const [user, setUserStatus] = useContext(AuthContext);

  userService.logout()
    .then(() => {
        setUserStatus({auth: false, userId: '', name: ''});
    })
    
  return  <Redirect to='/' />
  
};

export default Logout;

