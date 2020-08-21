import React, { useContext } from 'react';
import userService from '../../service/userService';
import AuthContext from '../context';
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

