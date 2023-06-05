import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link, useParams} from 'react-router-dom';

const SegmenterList = (props) => {
    // removing segmenter from props
    // const {segmenterList, setSegmenterList, currentSegmenterSelection, setCurrentSegmenterSelection, handleSegmenterSelect, segmenter} = props;
    const {segmenterList, setSegmenterList, currentSegmenterSelection, setCurrentSegmenterSelection, handleSegmenterSelect} = props;
    // const {id} = useParams();
    // console.log(id)

    useEffect(() => {
        axios.get('http://localhost:8000/api/allsegmenters')
            .then((res) => {
                // console.log(res);
                setSegmenterList(res.data.segmenters)
            })
            .catch((err) => {
                console.log(err)
            })
    }, [])

    

    const deleteHandler = (id) => {
        // console.log(id)
        axios.delete(`http://localhost:8000/api/deletesegmenter/${id}`)
            .then((res) => {
                // console.log(res);
                const updatedSegmenterList = segmenterList.filter((segmenter) => segmenter._id !== id)
                setSegmenterList(updatedSegmenterList)
            })
            .catch((err) => {
                console.log(err);
            })
    }

    // REF THIS PAGE FOR STYLING THIS CARD : https://tailwindcss.com/docs/utility-first#why-not-just-use-inline-styles
    return(
        <div className='flex flex-wrap'>
            {segmenterList.map((segmenter) => (
                    // <div onClick={() => {console.log(segmenter._id)}} className='segmenterCard bg-slate-400 w-1/3 justify-content-between' key={segmenter._id}>
                    <div onClick={handleSegmenterSelect} className='segmenterCard text-neutral-600 bg-stone-100 w-1/3 justify-content-between' key={segmenter._id}>
                        <h5 className='text-center'><span className='text-cyan-950 font-extrabold'>{segmenter.firstName} {segmenter.lastName}</span> <span className='text-cyan-700'>({segmenter.pronouns})</span></h5>
                        <p className='text-left text-2xl'><span className='font-bold'>Slack :</span><span className='text-cyan-950'> {segmenter.slackName}</span></p>
                        <p className='text-left text-2xl'><span className='font-bold'>Twilio :</span><span className='text-cyan-950'> {segmenter.twilioEmail}</span></p>
                        <p className='text-left text-2xl'><span className='font-bold'>Segment :</span><span className='text-cyan-950'> {segmenter.segmentEmail}</span></p>
                        <p className='text-left text-2xl'><span className='font-bold'>Segment Team :</span><span className='text-cyan-950'> {segmenter.team}</span></p>
                        <p className='text-left text-2xl'><span className='font-bold'>Internal Team :</span><span className='text-cyan-950'> {segmenter.internalTeam}</span></p>
                        <p className='text-left text-2xl'><span className='font-bold'>Job Role :</span><span className='text-cyan-950'> {segmenter.jobRole}</span></p>
                        <p className='text-left text-2xl'><span className='font-bold'>Region :</span><span className='text-cyan-950'> {segmenter.region}</span></p>
                        <p className='text-left text-2xl'><span className='font-bold'>Workspace :</span><span className='text-cyan-950'> <a href={`https://app.segment.com/${segmenter.workspaceSlug}`}>{segmenter.workspaceSlug}</a> : {segmenter.workspaceId}</span></p>
                        <Link className='btn btn-secondary' to={`/segmenter/${segmenter._id}`}>View Profile</Link>
                        {/* <Link className='btn btn-primary' to={`/editSegmenter/${segmenter._id}`}>Edit</Link> */}
                        {/* <button className='btn btn-danger' onClick={() => deleteHandler(segmenter._id)}>Delete</button> */}
                    </div>
                ))}
        </div>
    )   
}

export default SegmenterList;