import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, Navigate, Router, useNavigate} from 'react-router-dom';
import PhotosList from './PhotosList'
import {ImageContext} from '../Views/ProfilesList.View';
import {useParams} from 'react-router-dom';

const NewPhoto = (data) => {
    const [profilephoto] = data.profilephoto;
    console.log(profilephoto)

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
    
    const [errors, setErrors] = useState({})

    // REMOVE INSTANTIATION
    // const changeHandler = (e) => {
    //     setCseUser({...cseUser, [e.target.name]:e.target.value})
    // }
    

    const createProfilePhoto = (e) => {
        e.preventDefault();
        
        console.log(data.id)
        setProfilePhoto(profilePhoto({
            alt_description : data.alt_description,
            blur_hash : data.blur_hash,
            color : data.color,
            height : data.height,
            id : data.id,
            links : data.links,
            links_download : data.links_download,
            links_download_location : data.links_download_location,
            links_html : data.links_html,
            links_self : data.links_self,
            urls : data.urls,
            urls_full : data.urls_full,
            urls_raw : data.urls_raw,
            urls_regular : data.urls_regular,
            urls_small : data.urls_small,
            urls_small_s3 : data.urls_small_s3,
            urls_thumb : data.urls_thumb,
            width : data.width,
            // async await add user's id to this object
            users : {}
        }))
        console.log('67 profilePhoto : ',profilePhoto)
    
        axios.post('http://localhost:8000/api/newprofilephoto', profilephoto)
            .then((res) => {
                console.log(res);
                // profilephotosdb

                // CLEAR OUT FORM DATA
                // Navigate('/');
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }
    

    return(
        <div>
            <div className='profilephotosdb'>

            </div>
            <PhotosList createProfilePhoto={createProfilePhoto} addToDb={true}/>
            {/* <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={changeHandler} value={cseUser.firstName}/>
                    {
                        errors.firstName && (<p className='text-danger'>{errors.firstName.message}</p>)
                    }
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={changeHandler} value={cseUser.lastName}/>
                    {
                        errors.lastName && (<p className='text-danger'>{errors.lastName.message}</p>)
                    }
                </div>
                <div>
                    <label>Slack Name</label>
                    <input type="text" name="slackName" onChange={changeHandler} value={cseUser.slackName}/>
                    {
                        errors.slackName && (<p className='text-danger'>{errors.slackName.message}</p>)
                    }
                </div>
                <div>
                    <label>Twilio Email</label>
                    <input type="text" name="twilioEmail" onChange={changeHandler} value={cseUser.twilioEmail}/>
                    {
                        errors.twilioEmail && (<p className='text-danger'>{errors.twilioEmail.message}</p>)
                    }
                </div>
                <div>
                    <label>Segment Email</label>
                    <input type="text" name="segmentEmail" onChange={changeHandler} value={cseUser.segmentEmail}/>
                    {
                        errors.segmentEmail && (<p className='text-danger'>{errors.segmentEmail.message}</p>)
                    }
                </div>
                <div>
                    <label>CSE Team</label>
                    <input type="text" name="cseTeam" onChange={changeHandler} value={cseUser.cseTeam}/>
                    {
                        errors.cseTeam && (<p className='text-danger'>{errors.cseTeam.message}</p>)
                    }
                </div>
                <div>
                    <label>Workspace Slug</label>
                    <input type="text" name="workspaceSlug" onChange={changeHandler} value={cseUser.workspaceSlug}/>
                    {
                        errors.workspaceSlug && (<p className='text-danger'>{errors.workspaceSlug.message}</p>)
                    }
                </div>
                <div>
                    <label>Workspace ID</label>
                    <input type="text" name="workspaceId" onChange={changeHandler} value={cseUser.workspaceId}/>
                    {
                        errors.workspaceId && (<p className='text-danger'>{errors.workspaceId.message}</p>)
                    }
                </div>
                <div>
                    <label>Preferred Pronouns</label>
                    <input type="text" name="preferredPronouns" onChange={changeHandler} value={cseUser.preferredPronouns}/>
                    {
                        errors.preferredPronouns && (<p className='text-danger'>{errors.preferredPronouns.message}</p>)
                    }
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" name="phoneNumber" onChange={changeHandler} value={cseUser.phoneNumber}/>
                    {
                        errors.phoneNumber && (<p className='text-danger'>{errors.phoneNumber.message}</p>)
                    }
                </div>
                {/* <Link to={`/`}> */}
                    {/* <button>Submit</button> */}
                {/* </Link> */}
            {/* </form>  */}
        </div>
    )   
}

export default NewPhoto;