import {notify} from 'react-notify-toast';


function validationEditProfile(name,surname, email,job) {

    if(name === '' || name.length < 4){
        notify.show('Name must be at least 4 characters!','error',1800,'red');
        return false;
    }
      if(surname === '' || surname.length < 4){
        notify.show('Surname must be at least 4 characters!','error',1800,'red');
        return false;
    }

      if(email === '' || !email.includes('@') || email.length < 8 ) {
        notify.show('Email must contain @ and be more than 8 characters!','error',1800,'red');
        return false;
      }
      if(job === '' || job.length <4){
          notify.show('Job must be at least 4 characters!', 'error', 1800, 'red');
          return false;
      }

      notify.show('You profile is updated!','success',1800,'green');
      return true;
}

export default validationEditProfile;