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

    const addProfilePhotoToUser = (e) => {
        e.preventDefault();
        // console.log(profilePhoto.id)

        setProfilePhoto({
            _id : profilePhoto.id,
            alt_description : profilePhoto.alt_description,
            blur_hash : profilePhoto.blur_hash,
            color : profilePhoto.color,
            height : profilePhoto.height,
            id : profilePhoto.id,
            links : profilePhoto.links,
            links_download : profilePhoto.links_download,
            links_download_location : profilePhoto.links_download_location,
            links_html : profilePhoto.links_html,
            links_self : profilePhoto.links_self,
            urls : profilePhoto.urls,
            urls_full : profilePhoto.urls_full,
            urls_raw : profilePhoto.urls_raw,
            urls_regular : profilePhoto.urls_regular,
            urls_small : profilePhoto.urls_small,
            urls_small_s3 : profilePhoto.urls_small_s3,
            urls_thumb : profilePhoto.urls_thumb,
            width : profilePhoto.width,
            // async await add user's id to this object
            users : {}
        })
    }  
    
    // CREATE USER
    const submitHandler = (e) => {
        e.preventDefault();
        // set photo on user
        setUser({...user, profilePhoto:profilePhoto.id})
        // let user_id
        console.log('profilePhoto._id : ',profilePhoto._id)
        let newuserid
        // 1st create user in db
        axios.post('http://localhost:8000/api/newuser', user)
            .then((res) => {
                // set user on photo
                // user_id = res.data.newuser._id
                // console.log('tempUser : ',user_id)
                // console.log(res)
                newuserid = res.data.newuser._id
                console.log('newuserid : ',newuserid)
                return setProfilePhoto({...profilePhoto, users:res.data.newuser._id})
            })
            .then((res) => {
                console.log('2nd THEN profilePhoto : ', profilePhoto)
                axios.get(`http://localhost:8000/api/profilephoto/${profilePhoto.id}`)
                    .then((res) => {
                        if(!res.data.profilephoto){
                            setPhotoReady({ready:true, onDb : true})  
                        }
                        else{
                            setPhotoReady({ready:true})  
                        }
                            // console.log('RES : ',res)
                            // console.log('SPREADER USER : ', {...user, profilePhoto:profilePhoto.id})  
                            return setUser({...user, profilePhoto:profilePhoto.id})
                                // createProfilePhoto()
                        })
                        .then(() => {
                            addProfilePhotoToUser()
                            return setProfilePhoto({...profilePhoto, users:user._id})
                        })
                        // .then(()=> {
                        //     // return setProfilePhoto(profilePhoto)
                        // })
                        .catch((err) => {
                            console.log(err)
                        })
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
        <div className='h-20 my-1.5 pt-2  w-full'>
            <form onSubmit={submitHandler} className='grid md:grid-rows-1 grid-cols-3 my-0 mx-4 py-2 px-4 justify-center h-80 w-full'>
                <div className='md:grid-rows-5 gap-.5 my-0 px-4 justify-end w-5/6'>
                    <div className='col-start-1 row-start-1 grid grid-rows-1 grid-cols-2 justify-items-center'>
                        <label className='w-60 text-right h-10'>First Name </label>
                        <input 
                            type="text" 
                            name="firstName" 
                            onChange={changeHandler} 
                            value={user.firstName}
                            className='w-60 h-10 ml-5'
                        />
                        {errors.firstName && (<p className='text-danger'>{errors.firstName.message}</p>)}
                    </div>
                    <div className='col-start-1 row-start-2 grid grid-rows-1 grid-cols-2 w-full justify-items-center'>
                        <label className='w-60 text-right h-10'>Last Name </label>
                        <input 
                            type="text" 
                            name="lastName" 
                            onChange={changeHandler} 
                            value={user.lastName}
                            className='w-60 h-10 ml-5'
                        />
                        {errors.lastName && (<p className='text-danger'>{errors.lastName.message}</p>)}
                    </div>
                    <div className='col-start-1 row-start-3 grid grid-rows-1 grid-cols-2 w-full justify-items-center'>
                        <label className='w-60 text-right h-10'>Username </label>
                        <input 
                            type="text" 
                            name="username" 
                            onChange={changeHandler} 
                            value={user.username}
                            className='w-60 h-10 ml-5'
                        />
                        {errors.username && (<p className='text-danger'>{errors.username.message}</p>)}
                    </div>
                    <div className='col-start-1 row-start-4 grid grid-rows-1 grid-cols-2 w-full justify-items-center'>
                        <label className='w-60 text-right h-10'>Email </label>
                        <input 
                            type="text" 
                            name="email" 
                            onChange={changeHandler} 
                            value={user.email}
                            className='w-60 h-10 ml-5'
                        />
                        {errors.email && (<p className='text-danger'>{errors.email.message}</p>)}
                    </div>
                    <div className='col-start-1 row-start-5 grid grid-rows-1 grid-cols-2 w-full justify-items-center'>
                        <label className='w-60 text-right h-10'>Phone Number </label>
                        <input 
                            type="text" 
                            name="phoneNumber" 
                            onChange={changeHandler} 
                            value={user.phoneNumber}
                            className='w-60 h-10 ml-5'
                        />
                        {errors.phoneNumber && (<p className='text-danger'>{errors.phoneNumber.message}</p>)}
                    </div>
                </div>
                <div className='relative my-2 justify-between w-1/6'>
                {/* <div className='grid-rows-5 grid-cols-3 gap-.5 my-0 justify-center'> */}
                    {/* <label className='m-1' className='row-start-1 col-start-1 text-left'>Profile Photo</label> */}
                    <NewPhoto 
                        // className='row-start-1 row-end-4 col-span-2' 
                        className='relative left-0 m-10' 
                        photoReady={photoReady} 
                        setPhotoReady={setPhotoReady} 
                        profilePhoto={profilePhoto} 
                        setUser={setUser}    
                        user={user}    
                        />
                    {/* <button className='row-start-5 col-start-3 relative'>Create User</button> */}
                </div>
                    <div className='relative flex justify-items-center w-3/6 mt-52'>
                        <button className='hover-slide inset-y-10 bg-none rounded pointer-events-auto h-14 focus:ring-none' onClick={submitHandler}>Create User</button>
                    </div>
            </form>
                <UserProfilesListView profilePhoto={profilePhoto} setProfilePhoto={setProfilePhoto} setPhotoReady={setPhotoReady} photoReady={photoReady}/>
        
        </div> 
        
    )   
}

export default CreateUser;


