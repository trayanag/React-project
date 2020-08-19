import {notify} from 'react-notify-toast';


function validationEditPost(title,description,keywords,content) {

    if(title === '' || title.length < 5 ) {
        notify.show('Title must be at least 5 characters!','error',1800,'red');
        return false;
      }
    
      if(description === "" || description.length < 10 ) {
        notify.show('Title must be at least 10 characters!','error',1800,'red');
        return false;
      }
    
      if(keywords === "" || keywords.length < 5 ) {
        notify.show('Keywords must be at least 5 characters!','error',1800,'red');
        return false;
      }
    
      if(content === '' || content.length < 30 ) {
        notify.show('Content must be at least 30 characters!','error',1800,'red');
       
        return false;
      }
      notify.show('Post is edited!','success',1800,'green');
      return true;
}

export default validationEditPost;