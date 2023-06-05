import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';
import Photo from '../Photos/Photo';

const UserList = (props) => {
    const {userList, setUserList} = props;

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
        < >
            {/* <div className='flex justify-content-around flex-wrap'> */}
            <div className='flex flex-wrap' >
                {userList.map((user) => (
                        <div className='text-neutral-600 bg-stone-100 w-1/3 justify-content-between m-6' key={user._id}>
                            <h2>Name : {user.firstName} {user.lastName}</h2>
                            <h4>Email : {user.email}</h4>
                            <h4>Username : {user.username}</h4>
                            <h4>Phone Number : {user.phoneNumber}</h4>
                            {/* CREATE PHOTO & SKELETON */}
                            <Link className='px-4 py-2 text-base text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2' to={`/user/${user._id}`}>User Profile</Link>
                            
                            {/* <Link className='px-4 py-2 text-base text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2' to={`/editUser/${user._id}`}>Edit</Link> */}
                            
                            
                            {/* <button className='absolute right-5 bottom-5 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2' onClick={() => deleteHandler(user._id)}>Delete</button> */}
                        </div>
                    ))}
            </div>
        </>
    )   
}

export default UserList;