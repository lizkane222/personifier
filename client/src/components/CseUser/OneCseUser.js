import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';


const OneCseUser = (props) => {
    const {cseUserList, setCseUserList} = props;
    const {id} = useParams();
    console.log(id)
    const [cseUser, setCseUser] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/cseuser/${id}`)
            .then((res) => {
                console.log(res.data.cseuser);
                setCseUser(res.data.cseuser)
            })
            .catch((err) => {
                console.log(err);
            })
    })

    const deleteHandler = (id) => {
        console.log(id)
        axios.delete(`http://localhost:8000/api/deletecseuser/${id}`)
            .then((res) => {
                console.log(res);
                const updatedCseUserList = cseUserList.filter((cseUser) => cseUser._id !== id)
                setCseUserList(updatedCseUserList)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return(
        <div className='d-inline-flex justify-content-space-evenly'>
             <div key={cseUser._id}>
                <h2>Name : {cseUser.firstName} {cseUser.lastName} ({cseUser.preferredPronouns})</h2>
                <h4>Slack : {cseUser.slackName}</h4>
                <h4>Twilio Email : {cseUser.twilioEmail}</h4>
                <h4>Segment Email : {cseUser.segmentEmail}</h4>
                <h4>CSE Team : {cseUser.cseTeam}</h4>
                <h4>Workspace Slug : {cseUser.workspaceSlug}</h4>
                <h4>Workspace ID : {cseUser.workspaceId}</h4>
                <h4>Preferred Pronouns : {cseUser.preferredPronouns}</h4>
                <h4>Phone Number : {cseUser.phoneNumber}</h4>
                <Link className='btn btn-secondary' to={`/viewCseUser/${cseUser._id}`}>View User</Link>
                <Link className='btn btn-primary' to={`/editCseUser/${cseUser._id}`}>Edit</Link>
                <button className='btn btn-danger' onClick={() => deleteHandler(cseUser._id)}>Delete</button>
            </div>
        </div>
    )   
}

export default OneCseUser;