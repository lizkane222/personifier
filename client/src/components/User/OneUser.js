import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';


const OneUser = (props) => {
    const {userList, setUserList} = props;
    const {id} = useParams();
    console.log(id)
    const [user, setUser] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${id}`)
            .then((res) => {
                // console.log(res.data.user);
                setUser(res.data.user)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    const deleteHandler = (id) => {
        console.log(id)
        axios.delete(`http://localhost:8000/api/deleteuser/${id}`)
            .then((res) => {
                console.log(res);
                const updatedUserList = userList.filter((user) => user._id !== id)
                setUserList(updatedUserList)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return(
        <div className='d-inline-flex justify-content-space-evenly'>
             <div key={user._id}>
                <h2>Name : {user.firstName} {user.lastName}</h2>
                <h4>Email : {user.email}</h4>
                <h4>Username : {user.username}</h4>
                <h4>Phone Number : {user.phoneNumber}</h4>
                <Link className='btn btn-secondary' to={`/viewUser/${user._id}`}>View User</Link>
                <Link className='btn btn-primary' to={`/editUser/${user._id}`}>Edit</Link>
                <button className='btn btn-danger' onClick={() => deleteHandler(user._id)}>Delete</button>
            </div>
        </div>
    )   
}

export default OneUser;