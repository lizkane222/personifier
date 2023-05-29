import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

// FRONT END : `http://localhost:8000/editUser/${user._id}`
// BACK END : http://localhost:8000/api/user/${id}
const EditUser = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id)
    const [user, setUser] = useState({})
    console.log(user, setUser)
    // const [firstName, setFirstName] = useState();
    // const [lastName, setLastName] = useState();
    // const [email, setEmail] = useState();
    // const [username, setUsername] = useState();
    // const [phoneNumber, setPhoneNumber] = useState();

    const [errors, setErrors] = useState({})
    
    const changeHandler = (e) => {
        setUser({...user, [e.target.name]:e.target.value})
    }
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${id}`)
            .then((res) => {
                console.log(`line 30 res.data.user : ,${res.data.user}`);
                setUser(res.data.user);

                // setFirstName(res.data.firstName)
                // setLastName(res.data.lastName)
                // setUsername(res.data.username)
                // setEmail(res.data.email)
                // setPhoneNumber(res.data.phoneNumber)
                
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    // NEED TO CHANGE
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/user/${id}`, user)
            .then((res) => {
                console.log(res);
                navigate('/users');
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }
    // DELECT HANDLER
    const deleteHandler = (e) => {
        // e.preventDefault();
        axios.delete(`http://localhost:8000/api/deleteuser/${id}`, user)
            .then((res) => {
                console.log(res);
                navigate('/users');
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return(
        <div >
            <h2>Edit {user.firstName}</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={changeHandler} value={user.firstName}/>
                    {/* <input type="text" name="firstName" onChange={(e) => {setFirstName(e.target.value)}} value={user.firstName}/> */}
                    {
                        errors.firstName && (<p className='text-danger'>{errors.firstName.message}</p>)
                    }
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={changeHandler} value={user.lastName}/>
                    {/* <input type="text" name="lastName" onChange={(e) => {setLastName(e.target.value)}} value={user.lastName}/> */}
                    {
                        errors.lastName && (<p className='text-danger'>{errors.lastName.message}</p>)
                    }
                </div>
                <div>
                    <label>Username</label>
                    <input type="text" name="username" onChange={changeHandler} value={user.username}/>
                    {
                        errors.username && (<p className='text-danger'>{errors.username.message}</p>)
                    }
                </div>
                <div>
                    <label>Email</label>
                    <input type="text" name="email" onChange={changeHandler} value={user.email}/>
                    {
                        errors.email && (<p className='text-danger'>{errors.email.message}</p>)
                    }
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" name="phoneNumber" onChange={changeHandler} value={user.phoneNumber}/>
                    {
                        errors.phoneNumber && (<p className='text-danger'>{errors.phoneNumber.message}</p>)
                    }
                </div>
                <button onClick={submitHandler} className='px-4 py-2 text-base text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2'>
                        Save Changes
                </button>
            </form>
       </div>
    )   
}

export default EditUser;