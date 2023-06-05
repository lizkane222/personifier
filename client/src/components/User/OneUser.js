import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';


const OneUser = (props) => {
    const {userList, setUserList} = props;
    const {id} = useParams();
    console.log(id)
    const [user, setUser] = useState({})
    const [profilephoto, setProfilephoto] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/user/${id}`)
            .then((res) => {
                // console.log(res.data.user);
                setUser(res.data.user)
            })
            // .then((res) => {console.log(res.data.user)})
            .catch((err) => {
                console.log(err);
            })
    },[])

    const getPhoto = () => {
        // console.log(profilephoto)
        // console.log(profilephoto.urls_small)
            axios.get(`http://localhost:8000/api/profilephoto/${user.profilePhoto}`)
                .then((res) => {
                    console.log(res.data.profilephoto);
                    return setProfilephoto(res.data.profilephoto)
                })
                // .then((res) => {console.log('profilephoto : ',profilephoto)})
                .catch((err) => {
                    console.log(err);
                })
    }
    
    

    const deleteHandler = (id) => {
        // console.log(id)
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
                <div className='w-60 h-60 rounded-rounded grow-0 shrink-0'>
                    {/* FEATURE : DYNAMICALLY ADD CLASSES */}
                    {/* CHANGE rounded-lg to rounded-full when on some pages */}
                    <img  id={profilephoto.id} className="h-60 w-60 object-cover rounded-rounded shadow-md m-0 " onClick={getPhoto} src={profilephoto.urls_small} alt={profilephoto.alt_description} />
                    {/* <img  id={user.profilephoto} className="h-60 w-60 object-cover rounded-rounded shadow-md m-0" src={user.profilephoto} alt={user.profilephoto} /> */}
                    {/* FEATURE : GET ALL USERS THAT USE THIS PROFILE PHOTO */}
                    {/* <Link className='btn btn-secondary' to={`/user/${user._id}`}>View Users</Link> */}
                </div>
                {/* <Link className='px-4 py-2 text-base text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2' to={`/viewUser/${user._id}`}>View User</Link> */}
                
                <Link className='px-4 py-2 text-base text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2' to={`/editUser/${user._id}`}>Edit Profile</Link>
                
                {/* ADD WARNING POPUP BEFORE DELETING USERS */}
                <button className='absolute right-5 bottom-5 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-red-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2' onClick={() => deleteHandler(user._id)}>Delete</button>
            </div>
        </div>
    )   
}

export default OneUser;