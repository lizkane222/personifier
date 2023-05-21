import React, {useContext, useState, useEffect} from 'react';
import {ImageContext} from '../Views/ProfilesList.View';
import axios from 'axios'
import useAxios from '../../hooks/useAxios';
import {useParams} from 'react-router-dom';

const Photo = ({data}) => {
    const {fetchData, setSearchPhoto} = useContext(ImageContext);
    // const [createProfilePhoto, addToDb] = props    
    // const [profilePhoto, setProfilePhoto] = useState({
    //     alt_description : "",
    //     blur_hash : "",
    //     color : 0,
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
    // const {profilePhotoOnUser, setProfilePhotoOnUser} = useState([])


    // const addUserProfilePhoto = () => {
    //     console.log(data.id)
    //     setProfilePhotoOnUser(true)

    //     setProfilePhoto={
            // alt_description : data.alt_description,
            // blur_hash : data.blur_hash,
            // color : data.color,
            // height : data.height,
            // id : data.id,
            // links : data.links,
            // links_download : data.links_download,
            // links_download_location : data.links_download_location,
            // links_html : data.links_html,
            // links_self : data.links_self,
            // urls : data.urls,
            // urls_full : data.urls_full,
            // urls_raw : data.urls_raw,
            // urls_regular : data.urls_regular,
            // urls_small : data.urls_small,
            // urls_small_s3 : data.urls_small_s3,
            // urls_thumb : data.urls_thumb,
            // width : data.width,
            // // async await add user's id to this object
            // users : {}
    //     }
    //     console.log(`PHOTO DATA : ${profilePhoto}`)   
    // }
    
    // console.log(addToDb)
        // if(addToDb) => onClick={createProfilePhoto}

    return(
        // <div onClick={addUserProfilePhoto}>
        
        <div >
        {/* <a href={data.urls.regular} target="_blank" rel="noreferrer"> */}
            {/* /photos/:id */}
            <img className="h-72 w-full object-cover rounded-lg shadow-md" src={data.urls.small} alt={data.alt_description} />
            <p>{data.id}</p>
            {/* <Link className='btn btn-secondary' to={`/viewUser/${user._id}`}>View User</Link> */}
        {/* </a> */}
        </div>
    )
}

export default Photo;