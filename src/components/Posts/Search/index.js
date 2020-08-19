import React,{Component} from 'react'
import postService from '../../../services/postService';
import PostList from '../Post/card-post';
import SeacrhBox from './search-box';
import './styles.css';

class Search extends Component{
    state = {
        posts: [],
        searchField: ''
    }
    componentDidMount() {
        postService.get().then(posts => {
            this.setState({posts: posts.data})
        });
        
    }
    handleChange = (e) => {
        this.setState({
            searchField: e.target.value
        })
      }
    
    render(){
    const {posts,searchField } = this.state;
    const filteredPost = posts.filter(p =>
       p.title.toLowerCase().includes(searchField.toLowerCase()))
    
    return (
        <div className="search">
        <SeacrhBox
        placeholder= 'Search by title'
        handleChange={this.handleChange}
        />
        <PostList  posts={filteredPost}/>
        </div> 
    )
}
}

export default Search


