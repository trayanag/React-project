import React, { useContext, useState } from 'react';
import userService from '../../service/userService'
import loginValidation from '../../utils/loginValidation';
import { useHistory } from "react-router-dom";
import AuthContext from '../context';
import FormInput from '../../components/Form-input';
import CustomButton from '../../components/CustomButton';
import './styles.css';


const Login = () => {

  // eslint-disable-next-line
  const [user, setUserStatus] = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();


  const handleSubmit = e => {

    const data = { username, password };


    if (loginValidation(username, password)) {
      userService.login(data).then((info) => {
        // console.log(info)

        const { name, surname, email, job } = info;

        setUserStatus({ auth: true, userId: info._id, name, surname, email, job })
        history.push('/all');
      });
    }
  };


  return (

    <form className="card" >
      <FormInput
        className="form-control"
        placeholder='Username'
        value={username}
        onChange={e => setUsername(e.target.value)}
        label="Username"
        required
      />
      <FormInput
        className="form-control"
        placeholder='Password'
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        label="Password"
        required
      />
      <p className="notregistered"> Don't have an account? Then just
          <a href="/register"> Register</a>
      </p>
      <CustomButton type="button"  onClick={handleSubmit}>Login</CustomButton>
    </form>

  );
}

export default Login;

