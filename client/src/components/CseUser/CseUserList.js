import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

const CseUserList = (props) => {
    const {cseUserList, setCseUserList} = props;
    const {id} = useParams();
    console.log(id)

    useEffect(() => {
        axios.get('http://localhost:8000/api/allcseusers')
            .then((res) => {
                // console.log(res);
                setCseUserList(res.data.cseusers)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    const deleteHandler = (id) => {
        // console.log(id)
        axios.delete(`http://localhost:8000/api/deletecseuser/${id}`)
            .then((res) => {
                // console.log(res);
                const updatedCseUserList = cseUserList.filter((cseUser) => cseUser._id !== id)
                setCseUserList(updatedCseUserList)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return(
        <div >
            <h2>All CSE Users</h2>
            <div className='d-flex justify-content-around flex-wrap'>
                {cseUserList.map((cseUser) => (
                        <div className='cseUserCard' key={cseUser._id}>
                            <h2>Name : {cseUser.firstName} {cseUser.lastName} ({cseUser.preferredPronouns})</h2>
                            <h4>Slack : {cseUser.slackName}</h4>
                            <h4>Twilio Email : {cseUser.twilioEmail}</h4>
                            <h4>Segment Email : {cseUser.segmentEmail}</h4>
                            <Link className='btn btn-secondary' to={`/viewCseUser/${cseUser._id}`}>View CSE User</Link>
                            <Link className='btn btn-primary' to={`/editCseUser/${cseUser._id}`}>Edit</Link>
                            <button className='btn btn-danger' onClick={() => deleteHandler(cseUser._id)}>Delete</button>
                        </div>
                    ))}
            </div>
        </div>
    )   
}

export default CseUserList;