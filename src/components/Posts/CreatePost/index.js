import React, { Component } from 'react';
import post from '../../../service/post';
import validationPost from '../../../utils/validationPost';
import CustomButton from '../../../components/CustomButton';
import './styles.css';




class CreatePost extends Component {

  state = {
    title: '',
    description: '',
    keywords: '',
    content: '',
    date1: ''

  }
  componentDidMount() {
    this.getDate()
  }
  getDate = () => {
    let date1 = new Date()
    this.setState({ date1 })
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }


  submitHandler = () => {

    const { title, description, keywords, content, date1 } = this.state;

    if (validationPost(title, description, keywords, content)) {
      post.create(title, description, keywords, content, date1).then(() => {
        this.props.history.push('/all');
      });
    }
  }

  render() {
  
    return (

      <div className="create-listings">
        <form className="container">

          <h1>Create your  Post</h1>
          <p>Please fill in this form to create it.</p>
          <p>Title</p>
           <input type="text" placeholder="Enter Title" name="title" onChange={this.handleChange} /> 
           
           <p>Description</p>
           <input type="text" placeholder="Enter Description" name="description"  onChange={this.handleChange}/> 

          <p>Keywords</p>
          <input type="text" placeholder="Enter Keywords" name="keywords" onChange={this.handleChange} />

          <p>Content</p>
          <textarea rows="8" type="text" name="content" placeholder="Enter Content" onChange={this.handleChange} />

          <CustomButton type="button" onClick={this.submitHandler}>Create Post</CustomButton>
        </form>
      </div>

    );
  }
};

export default CreatePost;



