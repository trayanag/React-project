/* eslint-disable react-hooks/rules-of-hooks */
import React, { useContext, useReducer } from 'react';
import userService from '../../../services/userService';
import AuthContext from '../../../Context/auth';
import validationEditProfile from '../../../utils/validationEditProfile';
import CustomButton from '../../../components/CustomButton';


const initialState = {
    name: '',
    surname: '',
    email: '',
    job: ''
}
function reducer(state, { field, value }) {
    return {
        ...state,
        [field]: value
    }
}

const editProfile = (props) => {

    const [user, setUserStatus] = useContext(AuthContext);
    const [state, dispatch] = useReducer(reducer, initialState);
    

    const onChangeProperty = (e) => {
        dispatch({ field: e.target.name, value: e.target.value })
    }
    const { name, surname, email, job } = state;

    const handleSubmit = () => {

        if (validationEditProfile(name,surname, email,job)) {

            userService.edit(user.userId, name, surname, email, job).then(() => {
                setUserStatus({ auth: true, userId: user.userId, name, surname, email, job });
            }).then(() => {
                props.history.push('/profile');
            });
        }
    }

    return (

        <div className="create-listings">
            <form className="container">
                <h1>Edit your Profile</h1>

                <p>Name</p>
                <input type="text" name="name" placeholder="Enter Name" onChange={onChangeProperty} />

                <p>Surname</p>
                <input type="text" name="surname" placeholder="Enter Surname" onChange={onChangeProperty} />

                <p>Email</p>
                <input type="email" name="email" placeholder="Enter Email" onChange={onChangeProperty} />

                <p>Job</p>
                <input rows="3" name="job" type="text" placeholder="Enter Job" onChange={onChangeProperty} />
                
                <CustomButton type="button" onClick={handleSubmit}>Edit Profile</CustomButton>

            </form>
        </div>

    );
}

export default editProfile;
