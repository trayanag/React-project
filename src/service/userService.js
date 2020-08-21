import axios from 'axios';

const host = 'http://localhost:9999/api';

const userService = {
    
    get: function (id) {
        return axios.get(`${host}/user${id ? `/${id}` : ''}`)
        .then(user => console.log(user))
        .catch(err => console.log(err));
    },

    register: function (username, password) {
        return axios.post(`${host}/user/register`, {
            username,
            password
        })
            .then(res => console.log(res))
            .catch(err => console.log(err));
    },
  
    login: function (data) {
        const { username, password } = data;
        return axios({
            method: 'POST',
            url: `${host}/user/login`,
            data: {
                username,
                password
            },
            withCredentials: true
        }).then(res => res.data);
    },
   
    logout: function () {
        return axios.post(`${host}/user/logout`, {}, {
            withCredentials: true
        }).then(res => console.log(res));
    },
    

    edit: function (id,name,surname,email,job) {
        return axios.put(`${host}/user/${id}`,{
                name,
                surname,
                email,
                job
        },
        {
            withCredentials:true
        })
        .then(updated => console.log(updated))
        .catch(err => console.log(err));
    },
    
    delete: function (id) {
        return axios.delete(`${host}/user/${id}`,{
            withCredentials:true
        }).then(res => console.log(res));
    }
};

export default userService;