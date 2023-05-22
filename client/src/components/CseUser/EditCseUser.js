import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {useNavigate, useParams} from 'react-router-dom';

// FRONT END : `http://localhost:8000/editCseUser/${cseUser._id}`
// BACK END : http://localhost:8000/api/cseuser/${id}
const EditCseUser = (props) => {
    const navigate = useNavigate();
    const {id} = useParams();
    console.log(id)

    const [cseUser, setCseUser] = useState({})
    console.log(cseUser, setCseUser)
    
    // const [firstName, setFirstName] = useState();
    // const [lastName, setLastName] = useState();
    // const [slackName, setSlackName] = useState();
    // const [twilioEmail, setTwilioEmail] = useState();
    // const [segmentEmail, setSegmentEmail] = useState();
    // const [cseTeam, SetCseTeam] = useState();
    // const [workspaceSlug, setWorkspaceSlug] = useState();
    // const [workspaceId, setWorkspaceId] = useState();
    // const [preferredPronouns, setPreferredPronouns] = useState();
    // const [phoneNumber, setPhoneNumber] = useState();

    const [errors, setErrors] = useState({})
    
    const changeHandler = (e) => {
        setCseUser({...cseUser, [e.target.name]:e.target.value})
    }
    
    useEffect(() => {
        axios.get(`http://localhost:8000/api/cseuser/${id}`)
            .then((res) => {
                console.log(`line 30 res.data.cseuser : ,${res.data.cseuser}`);
                setCseUser(res.data.cseuser);

                // setFirstName(res.data.firstName)
                // setLastName(res.data.lastName)
                // setSlackName(res.data.slackName)
                // setTwilioEmail(res.data.twilioEmail)
                // setSegmentEmail(res.data.segmentEmail)
                // SetCseTeam(res.data.cseTeam)
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
        axios.put(`http://localhost:8000/api/cseuser/${id}`, cseUser)
            .then((res) => {
                console.log(res);
                navigate('/cseUsers/');
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }
    
    // DELETE HANDLER
    const deleteHandler = (e) => {
        // e.preventDefault();
        axios.delete(`http://localhost:8000/api/deletecseuser/${id}`, cseUser)
            .then((res) => {
                console.log(res);
                navigate('/cseUsers/');
            })
            .catch((err) => {
                console.log(err.response.data.errors);
                setErrors(err.response.data.errors);
            })
    }

    return(
        <div >
            <h2>Edit CSE User : {cseUser.firstName}</h2>
            <form onSubmit={submitHandler}>
                <div>
                    <label>First Name</label>
                    <input type="text" name="firstName" onChange={changeHandler} value={cseUser.firstName}/>
                    {/* <input type="text" name="firstName" onChange={(e) => {setFirstName(e.target.value)}} value={cseUser.firstName}/> */}
                    {
                        errors.firstName && (<p className='text-danger'>{errors.firstName.message}</p>)
                    }
                </div>
                <div>
                    <label>Last Name</label>
                    <input type="text" name="lastName" onChange={changeHandler} value={cseUser.lastName}/>
                    {/* <input type="text" name="lastName" onChange={(e) => {setLastName(e.target.value)}} value={cseUser.lastName}/> */}
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
                <button>Save Changes</button>
            </form>
                <button className='btn btn-danger' onClick={() => deleteHandler(cseUser._id)}>Delete</button>
       </div>
    )   
}

export default EditCseUser;