import React, {useContext, useState, useEffect} from 'react';
import {ImageContext} from '../Views/UserProfilesList.View';
import axios from 'axios'
import useAxios from '../../hooks/useAxios';
import {useParams} from 'react-router-dom';

const Photo = ({ data }) => {
    // const {fetchData, setSearchPhoto} = useContext(ImageContext);
    // const [data, setData] = useState([])

    // const [propsResponse, propsIsLoadingresponse, propsErrorresponse, propsFetchDataresponse] = props
    // const [createProfilePhoto, addToDb] = props    
    const [profilePhoto, setProfilePhoto] = useState({
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
    const [profilePhotoOnUser, setProfilePhotoOnUser] = useState([])

    const [profilePhotoId, setProfilePhotoId] = useState({})
    // const {profilePhoto, setProfilePhoto} = useState([])

    let getProfilePhotoId = (e) => {
        // console.log(e)
        // console.log(`PHOTO ID : `,e.target.id)
        let photo = e.target
        let id = photo.id
        setProfilePhotoId(id)
        console.log('profilePhoto : ',profilePhoto)
        setProfilePhotoOnUser(true)
        // let photoData = data
    }


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
        <div onClick={getProfilePhotoId} className=''>    
            {/* /photos/:id */}
            {/* CHANGE rounded-lg to rounded-full when on some pages */}
            <img  id={data.id} className="h-72 w-full object-cover rounded-lg shadow-md m-0" src={data.urls.small} alt={data.alt_description} 
            />
            {/* <p>{data.id}</p> */}

            {/* GET ALL USERS THAT USE THIS PROFILE PHOTO */}
            {/* <Link className='btn btn-secondary' to={`/user/${user._id}`}>View Users</Link> */}
        </div>
    )
}

export default Photo;