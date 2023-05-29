import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import Photo from '../Photos/Photo';

const MyUsersList = (props) => {
    const {userList, setUserList, currentSegmenterSelection} = props;

    useEffect(() => {
        axios.get('http://localhost:8000/api/allusers')
            .then((res) => {
                // console.log(res);
                setUserList(res.data.users)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

// THIS SEGMENTER's SAVED USERS : currentSegmenterSelection.users
// https://retool.com/blog/filtering-data-in-react-filter-map-and-for-loops/
// render users : array 
    // const renderSegmentersSavedUsers = () => {
    //     let segmenter = currentSegmenterSelection.id
        
    //     console.log(userList.filter(user.segmenters.includes(segmenter)))

    // }

    const deleteHandler = (id) => {
        axios.delete(`http://localhost:8000/api/deleteuser/${id}`)
            .then((res) => {
                // console.log(res);
                const updatedUserList = userList.filter((user) => user._id !== id)
                setUserList(updatedUserList)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return(
        <div >
            <div className='d-flex justify-content-around flex-wrap'>
                {userList.map((user) => (
                        <div className='userCard' key={user._id}>
                            <h2>Name : {user.firstName} {user.lastName}</h2>
                            <h4>Email : {user.email}</h4>
                            <h4>Username : {user.username}</h4>
                            <h4>Phone Number : {user.phoneNumber}</h4>
                            <Link className='btn btn-secondary' to={`/user/${user._id}`}>View User</Link>
                            <Link className='btn btn-primary' to={`/editUser/${user._id}`}>Edit</Link>
                            <button className='btn btn-danger' onClick={() => deleteHandler(user._id)}>Delete</button>
                        </div>
                    ))}
            </div>
        </div>
    )   
}

export default MyUsersList;