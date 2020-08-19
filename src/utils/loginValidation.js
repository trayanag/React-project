import {notify} from 'react-notify-toast';

function loginValidation(username, password) {

  if(username === '' || username.length < 4) {
    notify.show('Username must be at least 4 characters!','error',1800,'red');
     return false;
  }
  
  if(password === '' || password.length < 6) {
    notify.show('Password must be at least 6 characters!','error',1800,'red');
    return false;
  }


  notify.show('You are logged in!','success',1800,'green');
  return true;
}

  export default loginValidation;

  

