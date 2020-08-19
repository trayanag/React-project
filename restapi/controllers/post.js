const models = require('../models');
const moment = require('moment');

module.exports = {
    get:{
        getAll: (req, res, next) => {

            models.Posts.find().sort({_id: -1})
                .populate('author')
                .then((posts) => res.send(posts))
                .catch(next);
        },
        getUser: (req, res, next) => {
            const {id} = req.params

            models.Posts.findById(id)
                .populate('author')
                .then((posts) => res.send(posts))
                .catch(next);
        },
    },


    post: (req, res, next) => {
        const { title, description, keywords, content } = req.body;
        const { _id } = req.user;
         const date1 = moment().format('DD MMMM YYYY');
  
     //console.log(req.body)
     
        models.Posts.create({ title, description, keywords,content,date1, author: _id })
            .then((createdPost) => {
                return Promise.all([
                    models.User.updateOne({ _id }, { $push: { posts: createdPost } }),
                    models.Posts.findOne({ _id: createdPost._id })
                ]);
            })
            .then(([modifiedObj, postObj]) => {
                res.send(postObj);
            })
            .catch(next);
    },

    put: (req, res, next) => {
        const id = req.params.id;
        const { title, description,keywords, content } = req.body;
        models.Posts.updateOne({ _id: id }, { title, description,keywords, content })
            .then((updatedPost) => res.send(updatedPost))
            .catch(next)
    },

    delete: (req, res, next) => {
        const id = req.params.id;
        const { _id } = req.user;
        models.Posts.deleteOne({ _id: id }).then(res =>{
           return models.User.updateOne({ _id }, { $pull: { posts: id } })
        })
            .then((removedPost) => res.send(removedPost))
            .catch(next)
    }
    
    
};