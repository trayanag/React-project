import React, { createContext, useState } from 'react';

export const AuthContext = createContext({});


export const AuthContextProvider = props => {
    const [user, setUserStatus] = useState( {auth: false, userId: '', name :'',surname:'',email:'',job:''} );
   
    return(
      <AuthContext.Provider value={[user, setUserStatus]}>
        {props.children}
      </AuthContext.Provider>
    )
  }

export default AuthContext;
