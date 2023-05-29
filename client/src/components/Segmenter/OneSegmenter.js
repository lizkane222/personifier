import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';


const OneSegmenter = (props) => {
    const {segmenterList, setSegmenterList} = props;
    const {id} = useParams();
    console.log(id)
    const [segmenter, setSegmenter] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/segmenter/${id}`)
            .then((res) => {
                console.log(res.data.segmenter);
                setSegmenter(res.data.segmenter)
            })
            .catch((err) => {
                console.log(err);
            })
    },[])

    const deleteHandler = (id) => {
        console.log(id)
        axios.delete(`http://localhost:8000/api/deletesegmenter/${id}`)
            .then((res) => {
                console.log(res);
                const updatedSegmenterList = segmenterList.filter((segmenter) => segmenter._id !== id)
                setSegmenterList(updatedSegmenterList)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    return(
        <div className='d-inline-flex justify-content-space-evenly'>
             <div key={segmenter._id}>
                <h2>Name : {segmenter.firstName} {segmenter.lastName} ({segmenter.preferredPronouns})</h2>
                <h4>Slack : {segmenter.slackName}</h4>
                <h4>Twilio Email : {segmenter.twilioEmail}</h4>
                <h4>Segment Email : {segmenter.segmentEmail}</h4>
                <h4>Segment Team : {segmenter.team}</h4>
                <h4>Internal Team : {segmenter.internalTeam}</h4>
                <h4>Job Role : {segmenter.jobRole}</h4>
                <h4>Region : {segmenter.region}</h4>
                <h4>Workspace Slug : {segmenter.workspaceSlug}</h4>
                <h4>Workspace ID : {segmenter.workspaceId}</h4>
                <h4>Pronouns : {segmenter.pronouns}</h4>
                <h4>Phone Number : {segmenter.phoneNumber}</h4>
                <Link className='btn btn-secondary' to={`/segmenter/${segmenter._id}`}>View User</Link>
                <Link className='btn btn-primary' to={`/editSegmenter/${segmenter._id}`}>Edit</Link>
                <button className='btn btn-danger' onClick={() => deleteHandler(segmenter._id)}>Delete</button>
            </div>
        </div>
    )   
}

export default OneSegmenter;