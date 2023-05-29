import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

// FRONT END : `http://localhost:8000/editSegmenter/${segmenter._id}`
// BACK END : http://localhost:8000/api/segmenter/${id}
const EditSegmenter = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id)

    const [segmenter, setSegmenter] = useState({})
    console.log(segmenter, setSegmenter)
    
    // const [firstName, setFirstName] = useState();
    // const [lastName, setLastName] = useState();
    // const [slackName, setSlackName] = useState();
    // const [twilioEmail, setTwilioEmail] = useState();
    // const [segmentEmail, setSegmentEmail] = useState();
    // const [team, setTeam] = useState();
    // const [internalTeam, setInternalTeam] = useState();
    // const [jobRole, setJobRole] = useState();
    // const [region, setRegion] = useState();
    // const [workspaceSlug, setWorkspaceSlug] = useState();
    // const [workspaceId, setWorkspaceId] = useState();
    // const [preferredPronouns, setPreferredPronouns] = useState();
    // const [phoneNumber, setPhoneNumber] = useState();

    const [errors, setErrors] = useState({})
    
    const changeHandler = (e) => {
        setSegmenter({...segmenter, [e.target.name]:e.target.value})
    }
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/segmenter/${id}`)
            .then((res) => {
                console.log(`line 30 res.data.segmenter : ,${res.data.segmenter}`);
                setSegmenter(res.data.segmenter);

                // setFirstName(res.data.firstName)
                // setLastName(res.data.lastName)
                // setSlackName(res.data.slackName)
                // setTwilioEmail(res.data.twilioEmail)
                // setSegmentEmail(res.data.segmentEmail)
                // SetInternalTeam(res.data.internalTeam)
                // setWorkspaceSlug(res.data.workspaceSlug)
                // setWorkspaceId(res.data.workspaceId)
                // setPreferredPronouns(res.data.preferredPronouns)
                // setPhoneNumber(res.data.phoneNumber)
                
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    // UPDATE HANDLER
    const submitHandler = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/segmenter/${id}`, segmenter)
            .then((res) => {
                console.log(res);
                navigate('/segmenters/');
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }
    
    // DELETE HANDLER
    const deleteHandler = (e) => {
        // e.preventDefault();
        axios.delete(`http://localhost:8000/api/deletesegmenter/${id}`, segmenter)
            .then((res) => {
                console.log(res);
                navigate('/segmenters/');
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return(
        <div >
            <h2>Edit Segmenter : {segmenter.firstName}</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={changeHandler} value={segmenter.firstName}/>
                    {/* <input type="text" name="firstName" onChange={(e) => {setFirstName(e.target.value)}} value={segmenter.firstName}/> */}
                    {
                        errors.firstName && (<p className='text-danger'>{errors.firstName.message}</p>)
                    }
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={changeHandler} value={segmenter.lastName}/>
                    {/* <input type="text" name="lastName" onChange={(e) => {setLastName(e.target.value)}} value={segmenter.lastName}/> */}
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
                <button>Save Changes</button>
            </form>
                <button className='btn btn-danger' onClick={() => deleteHandler(segmenter._id)}>Delete</button>
       </div>
    )   
}

export default EditSegmenter;