import axios from 'axios';

const host = 'http://localhost:9999/api';

const postService = {


    get: function (id) {
        return axios.get(`${host}/posts${id ? `/${id}` : ''}`)
    },

    


    create: function (title, description,keywords,content,date1) {
        return axios.post(`${host}/posts`,{
                title,
                description,
                keywords,
                content,
                date1,
                
        },{
            withCredentials: true
        }).then(user => {
            console.log(user);
        });
    },
    
    edit: function (id,title,description,keywords,content) {
        return axios.put(`${host}/posts/${id}`,{
                title,
                description,
                keywords,
                content
        },
        {
            withCredentials:true
        })
        .then(updated => console.log(updated))
        .catch(err => console.log(err));
    },
    delete: function (id) {
        return axios.delete(`${host}/posts/${id}`,{
            withCredentials:true
        }).then(res => console.log(res));
    }

    
}

export default postService;