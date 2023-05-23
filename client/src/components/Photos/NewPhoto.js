import React, {useEffect, useState} from 'react';
import axios from 'axios';
// import {Link, Navigate, Router, useNavigate} from 'react-router-dom';
// import PhotosList from './PhotosList'
// import {ImageContext} from '../Views/UserProfilesList.View';
// import {useParams} from 'react-router-dom';

const NewPhoto = (props) => {
    const {profilePhoto, setProfilePhoto, photoReady, setPhotoReady, setUser, user} = props
    // console.log('profilePhoto : ',profilePhoto)
    // console.log('setProfilePhoto : ',setProfilePhoto)
    // console.log('photoReady : ',photoReady)
    // console.log('setPhotoReady : ',setPhotoReady)
    
    const [errors, setErrors] = useState({})

    // useEffect(() => {
    useEffect(() => {
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
    },[])
    
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

    return(
        <div>
            {photoReady ?
                // <div className='w-20 h-20 rounded-full' onClick={setPhotoReady(!photoReady)}>
                <div className='w-1/2 h-20 rounded-full grow-0 shrink-0' >
                    {/* FEATURE : DYNAMICALLY ADD CLASSES */}
                    {/* CHANGE rounded-lg to rounded-full when on some pages */}
                    <img  id={profilePhoto.id} className="h-60 w-60 object-cover rounded-full shadow-md m-0" src={profilePhoto.urls_small} alt={profilePhoto.alt_description} />
                    {/* FEATURE : GET ALL USERS THAT USE THIS PROFILE PHOTO */}
                    {/* <Link className='btn btn-secondary' to={`/user/${user._id}`}>View Users</Link> */}
                </div>
                :
                <div className='animate-pulse w-1/2 h-20 rounded-full grow-0 shrink-0'>
                    <div className=" bg-gray-300 h-60 w-60 object-cover rounded-full shadow-md m-0">                        
                    </div>
                </div>
            }
        </div>
    )   
}

export default NewPhoto;