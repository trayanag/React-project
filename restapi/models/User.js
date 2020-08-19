const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const Schema = mongoose.Schema;
const Model = mongoose.model;
const { String, ObjectId } = Schema.Types;

const userSchema = new Schema({

    username: {
        type: String,
        unique: true,
        required: true,
        minlength: [4, 'Username should be at least 4 characters!'],
    },

    password: {
        type: String,
        require: true,
        minlength: [6, 'Password should be at least 6 characters!'],
    },
    name:{
        type:String,
        required:true,
        minlength: [3, 'First name should be at least 3 characters!'],
    },

    surname:{
        type:String,
        required:true,
        minlength: [3, 'Surname should be at least 3 characters!'],
    },
    email:{
        type: String,
        required: true
    },
    job:{
        type: String
    },

    posts: [{ type: ObjectId,
              ref: "Posts" }]

});

userSchema.methods = {

    matchPassword: function (password) {
        return bcrypt.compare(password, this.password);
    }

};

userSchema.pre('save', function (next) {
    if (this.isModified('password')) {
        bcrypt.genSalt(saltRounds, (err, salt) => {
            bcrypt.hash(this.password, salt, (err, hash) => {
                if (err) { next(err); return }
                this.password = hash;
                next();
            });
        });
        return;
    }
    next();
});

module.exports = new Model('User', userSchema);