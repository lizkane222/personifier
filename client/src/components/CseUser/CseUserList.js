import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

const CseUserList = (props) => {
    const {cseUserList, setCseUserList, currentCseUserSelection, setCurrentCseUserSelection, handleCseUserSelect} = props;
    // const {id} = useParams();
    // console.log(id)

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
        <div className='d-flex flex-wrap '>
            {cseUserList.map((cseUser) => (
                    // <div onClick={() => {console.log(cseUser._id)}} className='cseUserCard bg-slate-400 w-1/3 justify-content-between' key={cseUser._id}>
                    <div onClick={() => handleCseUserSelect(cseUser)} className='cseUserCard text-neutral-600 bg-stone-100 w-1/3 justify-content-between' key={cseUser._id}>
                        <h5 className='text-center'><span className='text-cyan-950 font-extrabold'>{cseUser.firstName} {cseUser.lastName}</span> <span className='text-cyan-700'>({cseUser.preferredPronouns})</span></h5>
                        <p className='text-left text-2xl'><span className='font-bold'>Slack :</span><span className='text-cyan-950'> {cseUser.slackName}</span></p>
                        <p className='text-left text-2xl'><span className='font-bold'>Twilio :</span><span className='text-cyan-950'> {cseUser.twilioEmail}</span></p>
                        <p className='text-left text-2xl'><span className='font-bold'>Segment :</span><span className='text-cyan-950'> {cseUser.segmentEmail}</span></p>
                        <p className='text-left text-2xl'><span className='font-bold'>Team :</span><span className='text-cyan-950'> {cseUser.cseTeam}</span></p>
                        <p className='text-left text-2xl'><span className='font-bold'>Workspace :</span><span className='text-cyan-950'> <a href={`https://app.segment.com/${cseUser.workspaceSlug}`}>{cseUser.workspaceSlug}</a> : {cseUser.workspaceId}</span></p>
                        <p className='text-left text-2xl'><span className='font-bold'>Role :</span><span className='text-cyan-950'> <a href={`https://app.segment.com/${cseUser.Role}`}>{cseUser.workspaceSlug}</a> : {cseUser.workspaceId}</span></p>
                        <p className='text-left text-2xl'><span className='font-bold'>Region :</span><span className='text-cyan-950'> <a href={`https://app.segment.com/${cseUser.Region}`}>{cseUser.workspaceSlug}</a> : {cseUser.workspaceId}</span></p>
                        <Link className='btn btn-secondary' to={`/cseUser/${cseUser._id}`}>View CSE User</Link>
                        <Link className='btn btn-primary' to={`/editCseUser/${cseUser._id}`}>Edit</Link>
                        <button className='btn btn-danger' onClick={() => deleteHandler(cseUser._id)}>Delete</button>
                    </div>
                ))}
        </div>
    )   
}

export default CseUserList;