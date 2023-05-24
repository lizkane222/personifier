import React, {useContext, useEffect, useState} from 'react';
import axios from 'axios';
import {Link, Navigate, Router, useNavigate} from 'react-router-dom';
import UserProfilesListView from '../Views/UserProfilesList.View'
// import {ImageContext} from '../Views/UserProfilesList.View';
// import Photo from '../Photos/Photo'
// import PhotosList from '../Photos/PhotosList'
// import useAxios from '../../hooks/useAxios';
import NewPhoto from '../Photos/NewPhoto';
import Form from '../Form'

const CreateUser = (props) => {
    const [user, setUser] = useState({
        firstName: "",
        lastName: "",
        email: "",
        username: "",
        phoneNumber : "",
        profilePhoto : ""
    })
    
    const [errors, setErrors] = useState({})
    
    // PROFILE PHOTO STATES
    const [profilePhoto, setProfilePhoto] = useState({
        _id : "",
        alt_description : "",
        blur_hash : "",
        color : 0,
        height : 0,
        id : "",
        links : {},
        links_download : "",
        links_download_location : "",
        links_html : "",
        links_self : "",
        urls : {},
        urls_full : "",
        urls_raw : "",
        urls_regular : "",
        urls_small : "",
        urls_small_s3 : "",
        urls_thumb : "",
        width : 0,
        users : {}
    })
    const [photoReady, setPhotoReady] = useState({
        ready : false,
        onDb : false,
    });

    const changeHandler = (e) => {
        // e.target.type == input ? 
        setUser({...user, [e.target.name]:e.target.value})
        // : setUser({...user, .target.value})
    }
    
    // CREATE USER
    const submitHandler = (e) => {
        e.preventDefault();
        // set photo on user
        setUser({...user, profilePhoto:profilePhoto.id})
        // let user_id
        console.log('profilePhoto._id : ',profilePhoto._id)
        axios.post('http://localhost:8000/api/newuser', user)
            .then((res) => {
                // set user on photo
                // user_id = res.data.newuser._id
                // console.log('tempUser : ',user_id)
                // console.log(res)
                return setProfilePhoto({...profilePhoto, users:res.data.newuser._id})
            })
            .then((res) => {
                console.log('2nd THEN profilePhoto : ', profilePhoto)
                return axios.post('http://localhost:8000/api/newprofilephoto', profilePhoto)
                    .then((res) => {
                        console.log(res);
                    })
                    .catch((err) => {
                        // console.log(err.response.data.errors);
                        setErrors(err.response.data.errors);
                    })
            })
            .then((res) => {
                setUser({
                    firstName: "",
                    lastName: "",
                    email: "",
                    username: "",
                    phoneNumber : "",
                    profilePhoto : ""
                })
                setPhotoReady(!photoReady)
                Navigate(`/user/${res.data.newuser._id}`);
            })
            .catch(err=>console.log(err))
            // .catch((err) => {
            //     console.log(err.response.data.errors);
            //     setErrors(err.response.data.errors);
            // })
    }


    // DYNAMIC VARIABLES FOR FORM
    // NEW VARS
    let formName = ''
    let formDescription = ''
    let field = {} 
    let address = {addressCountry:'', countryOptionItems:'', addressStreet:'', }
    let radioButtonList = {radioButtonListName :'', radioButtonName:'', radioButtonListDescription : {}, radioButtonLabel: ""}
    let checkBoxList= {checkBoxList:'', checkBoxName:'', checkBoxField : "", checkBoxDescription:''}
    // NEW PROPS
    //  changeHandler, user
    


    return(
        // <>
        // <Form formName={formName} formDescription={formDescription} field={field}/>
        // </>
        <div className='h-20 my-1.5 mx-4'>
            <form onSubmit={submitHandler} className='grid md:grid-rows-1 grid-cols-2 gap-.5 my-0 px-4 justify-evenly h-80'>
                <div className='md:grid-rows-5 gap-.5 my-0 px-4 justify-end'>
                    <div className='col-start-1 row-start-1'>
                        <label>First Name </label>
                        <input 
                            type="text" 
                            name="firstName" 
                            onChange={changeHandler} 
                            value={user.firstName}
                            className='w-60'
                        />
                        {errors.firstName && (<p className='text-danger'>{errors.firstName.message}</p>)}
                    </div>
                    <div className='col-start-1 row-start-2'>
                        <label>Last Name </label>
                        <input 
                            type="text" 
                            name="lastName" 
                            onChange={changeHandler} 
                            value={user.lastName}
                            className='w-60'
                        />
                        {errors.lastName && (<p className='text-danger'>{errors.lastName.message}</p>)}
                    </div>
                    <div className='col-start-1 row-start-3'>
                        <label>Username </label>
                        <input 
                            type="text" 
                            name="username" 
                            onChange={changeHandler} 
                            value={user.username}
                            className='w-60'
                        />
                        {errors.username && (<p className='text-danger'>{errors.username.message}</p>)}
                    </div>
                    <div className='col-start-1 row-start-4'>
                        <label>Email </label>
                        <input 
                            type="text" 
                            name="email" 
                            onChange={changeHandler} 
                            value={user.email}
                            className='w-60'
                        />
                        {errors.email && (<p className='text-danger'>{errors.email.message}</p>)}
                    </div>
                    <div className='col-start-1 row-start-5'>
                        <label>Phone Number </label>
                        <input 
                            type="text" 
                            name="phoneNumber" 
                            onChange={changeHandler} 
                            value={user.phoneNumber}
                            className='w-60'
                        />
                        {errors.phoneNumber && (<p className='text-danger'>{errors.phoneNumber.message}</p>)}
                    </div>
                </div>
                <div className='grid-rows-5 grid-cols-3 gap-.5 my-0 justify-center'>
                    <label className='row-start-1 col-start-1 text-left'>Profile Photo</label>
                    <NewPhoto 
                        className='row-start-1 row-end-4 col-span-2' 
                        photoReady={photoReady} 
                        setPhotoReady={setPhotoReady} 
                        profilePhoto={profilePhoto} 
                        setUser={setUser}    
                        user={user}    
                        />
                    <button className='row-start-5 col-start-3'>Create User</button>
                </div>
            </form>
                <UserProfilesListView profilePhoto={profilePhoto} setProfilePhoto={setProfilePhoto} setPhotoReady={setPhotoReady} photoReady={photoReady}/>
        
        </div> 
        
    )   
}

export default CreateUser;


