import React, {useContext, useState, useEffect} from 'react';
import {ImageContext} from '../Views/UserProfilesList.View';
import axios from 'axios'
import useAxios from '../../hooks/useAxios';
import {useParams} from 'react-router-dom';


const Photo = (props) => {
    const {data, keys, profilePhoto, setProfilePhoto} = props
    
    // const [thisProfilePhoto, setThisProfilePhoto] = useState({
    //     alt_description : "",
    //     blur_hash : "",
    //     color : "",
    //     height : 0,
    //     id : "",
    //     links : {},
    //     links_download : "",
    //     links_download_location : "",
    //     links_html : "",
    //     links_self : "",
    //     urls : {},
    //     urls_full : "",
    //     urls_raw : "",
    //     urls_regular : "",
    //     urls_small : "",
    //     urls_small_s3 : "",
    //     urls_thumb : "",
    //     width : 0,
    //     users : {}
    // })
    
    const getProfilePhotoId = () => {
        setProfilePhoto({
            alt_description : data.alt_description,
            blur_hash : data.blur_hash,
            color : data.color,
            height : data.height,
            id : data.id,
            links : data.links,
            links_download : data.links.download,
            links_download_location : data.links.download_location,
            links_html : data.links.html,
            links_self : data.links.self,
            urls : data.urls,
            urls_full : data.urls.full,
            urls_raw : data.urls.raw,
            urls_regular : data.urls.regular,
            urls_small : data.urls.small,
            urls_small_s3 : data.urls.small_s3,
            urls_thumb : data.urls.thumb,
            width : data.width,
            users : data.users
        })
        console.log('profilePhoto :',profilePhoto)
        // profilePhotoInput
    }
    console.log(profilePhoto)
    

    return(
        <div onClick={getProfilePhotoId} >
            {/* /photos/:id */}
            {/* CHANGE rounded-lg to rounded-full when on some pages */}
            
            <img  id={data.id} className="h-72 w-full object-cover rounded-lg shadow-md m-0" src={data.urls.small} alt={data.alt_description} 
            />
            {/* GET ALL USERS THAT USE THIS PROFILE PHOTO */}
            {/* <Link className='btn btn-secondary' to={`/user/${user._id}`}>View Users</Link> */}
        </div>
    )
}

export default Photo;