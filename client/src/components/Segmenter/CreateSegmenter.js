import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, Navigate, Router, useNavigate} from 'react-router-dom';


const CreateSegmenter = (props) => {
    // const Navigate = useNavigate();
    // const navigate = useNavigate();
    const [segmenter, setSegmenter] = useState({
        firstName: "",
        lastName: "",
        slackName: "",
        twilioEmail: "",
        segmentEmail: "",
        internalTeam: "",
        team: "",
        jobRole: "",
        workspaceSlug: "",
        workspaceId: "",
        preferredPronouns: "",
        phoneNumber : ""
    })
    
    const [errors, setErrors] = useState({})
    
    const changeHandler = (e) => {
        setSegmenter({...segmenter, [e.target.name]:e.target.value})
    }
    
    const submitHandler = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/newsegmenter', segmenter)
            .then((res) => {
                console.log('segmenter res : ',res);
                // CLEAR OUT FORM DATA
                setSegmenter({
                    firstName: "",
                    lastName: "",
                    slackName: "",
                    twilioEmail: "",
                    segmentEmail: "",
                    internalTeam: "",
                    team: "",
                    jobRole: "",
                    region: "",
                    workspaceSlug: "",
                    workspaceId: "",
                    pronouns: "",
                    phoneNumber : ""
                })
                console.log(segmenter)
                Navigate('/segmenters/');
            })
            .catch((err) => {
                if(err){
                    console.log(err)
                    setErrors(err.response.data.errors);
                    console.log(errors)
                }
            })
    }
    

    return(
        <div>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={changeHandler} value={segmenter.firstName}/>
                    {
                        errors.firstName && (<p className='text-danger'>{errors.firstName.message}</p>)
                    }
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={changeHandler} value={segmenter.lastName}/>
                    {
                        errors.lastName && (<p className='text-danger'>{errors.lastName.message}</p>)
                    }
                </div>
                <div>
                    <label>Slack Name</label>
                    <input type="text" name="slackName" onChange={changeHandler} value={segmenter.slackName}/>
                    {
                        errors.slackName && (<p className='text-danger'>{errors.slackName.message}</p>)
                    }
                </div>
                <div>
                    <label>Twilio Email</label>
                    <input type="text" name="twilioEmail" onChange={changeHandler} value={segmenter.twilioEmail}/>
                    {
                        errors.twilioEmail && (<p className='text-danger'>{errors.twilioEmail.message}</p>)
                    }
                </div>
                <div>
                    <label>Segment Email</label>
                    <input type="text" name="segmentEmail" onChange={changeHandler} value={segmenter.segmentEmail}/>
                    {
                        errors.segmentEmail && (<p className='text-danger'>{errors.segmentEmail.message}</p>)
                    }
                </div>
                <div>
                    <label>Internal Team</label>
                    <input type="text" name="internalTeam" onChange={changeHandler} value={segmenter.internalTeam}/>
                    {
                        errors.internalTeam && (<p className='text-danger'>{errors.segment.message}</p>)
                    }
                </div>
                <div>
                    <label>Team</label>
                    <input type="text" name="team" onChange={changeHandler} value={segmenter.team}/>
                    {
                        errors.team && (<p className='text-danger'>{errors.segment.message}</p>)
                    }
                </div>
                <div>
                    <label>Job Role</label>
                    <input type="text" name="jobRole" onChange={changeHandler} value={segmenter.jobRole}/>
                    {
                        errors.jobRole && (<p className='text-danger'>{errors.segment.message}</p>)
                    }
                </div>
                <div>
                    <label>Region</label>
                    <input type="text" name="region" onChange={changeHandler} value={segmenter.region}/>
                    {
                        errors.region && (<p className='text-danger'>{errors.segment.message}</p>)
                    }
                </div>
                <div>
                    <label>Workspace Slug</label>
                    <input type="text" name="workspaceSlug" onChange={changeHandler} value={segmenter.workspaceSlug}/>
                    {
                        errors.workspaceSlug && (<p className='text-danger'>{errors.workspaceSlug.message}</p>)
                    }
                </div>
                <div>
                    <label>Workspace ID</label>
                    <input type="text" name="workspaceId" onChange={changeHandler} value={segmenter.workspaceId}/>
                    {
                        errors.workspaceId && (<p className='text-danger'>{errors.workspaceId.message}</p>)
                    }
                </div>
                <div>
                    <label>Pronouns</label>
                    <input type="text" name="pronouns" onChange={changeHandler} value={segmenter.pronouns}/>
                    {
                        errors.pronouns && (<p className='text-danger'>{errors.pronouns.message}</p>)
                    }
                </div>
                <div>
                    <label>Phone Number</label>
                    <input type="text" name="phoneNumber" onChange={changeHandler} value={segmenter.phoneNumber}/>
                    {
                        errors.phoneNumber && (<p className='text-danger'>{errors.phoneNumber.message}</p>)
                    }
                </div>
                {/* <Link to={`/`}> */}
                    <button>Submit</button>
                {/* </Link> */}
            </form>
        </div>
    )   
}

export default CreateSegmenter;