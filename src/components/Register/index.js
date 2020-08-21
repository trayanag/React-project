import React, { Component } from 'react';
import userService from '../../service/userService';
import registerValidation from '../../utils/registerValidation';
import FormInput from '../../components/Form-input';
import CustomButton from '../../components/CustomButton';
import '../Login/styles.css';


class Register extends Component {

  state = {
    username: '',
    password: '',
    rePassword: '',
  }

  onChange = (event, type) => {
    const newState = {}
    newState[type] = event.target.value
    this.setState(newState)
  }

  handleSubmit = () => {

    const { username, password, rePassword } = this.state;

    if (registerValidation(username, password, rePassword)) {
      userService.register(username, password).then(() => {
        this.props.history.push('/login');
      }).catch(console.error);
    }
  }

  render() {
    const { username, password, rePassword } = this.state
    return (

      <form className="card" >
        <FormInput
          className="form-control"
          placeholder='Username'
          value={username}
          onChange={(e) => this.onChange(e, 'username')}
          label="Username"
          required
        />
        <FormInput
          className="form-control"
          placeholder='Password'
          type="password"
          value={password}
          onChange={(e) => this.onChange(e, 'password')}
          label="Password"
          required
        />
        <FormInput
          className="form-control"
          placeholder='Repeat Password'
          type="password"
          value={rePassword}
          onChange={(e) => this.onChange(e, 'rePassword')}
          label="Repeat Password"
          required
        />
        <p className="notregistered"> Already have an account? <a href="/login"> Login</a> </p>
        
        <CustomButton type="button"  onClick={this.handleSubmit}>Register</CustomButton>

      </form>

    );
  }
}

export default Register;