import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';
import {useParams} from 'react-router-dom';
import MyUsersList from '../User/MyUsersList'
import WorkspaceConfig from '../WorkspaceConfig/WorkspaceConfig'

const OneSegmenter = (props) => {
    const {userList, setUserList, segmenterList, setSegmenterList, currentSegmenterSelection, setCurrentSegmenterSelection} = props
    // const {segmenterList, setSegmenterList} = props;
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
        <div className='container flex w-full'>
            <div className='d-inline-flex  w-full margin-15'>
                <div key={segmenter._id} className='w-100'>
                    <h2 className='w-full'>Name : {segmenter.firstName} {segmenter.lastName} ({segmenter.pronouns})</h2>
                    <h4 className='w-full'>Slack : {segmenter.slackName}</h4>
                    <h4 className='w-full'>Twilio Email : {segmenter.twilioEmail}</h4>
                    <h4 className='w-full'>Segment Email : {segmenter.segmentEmail}</h4>
                    <h4 className='w-full'>Segment Team : {segmenter.team}</h4>
                    <h4 className='w-full'>Internal Team : {segmenter.internalTeam}</h4>
                    <h4 className='w-full'>Job Role : {segmenter.jobRole}</h4>
                    <h4 className='w-full'>Region : {segmenter.region}</h4>
                    <h4 className='w-full'>Workspace Slug : {segmenter.workspaceSlug}</h4>
                    <h4 className='w-full'>Workspace ID : {segmenter.workspaceId}</h4>
                    <h4 className='w-full'>Pronouns : {segmenter.pronouns}</h4>
                    <h4 className='w-full'>Phone Number : {segmenter.phoneNumber}</h4>
                    {/* <Link className='btn btn-secondary' to={`/segmenter/${segmenter._id}`}>View User</Link> */}
                    <Link className='px-4 py-2 text-base text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2' to={`/segmenters/`}>Segmenters</Link>
                    <Link className='px-4 py-2 text-base text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2' to={`/editSegmenter/${segmenter._id}`}>Edit</Link>
                    <button className='absolute right-5 bottom-5 px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2' onClick={() => deleteHandler(segmenter._id)}>Delete</button>
                </div>

            </div>
            {/* revisit video on Flex : https://www.youtube.com/watch?v=5mHWWwbOu-s */}
            <div className='w-full'>
                <WorkspaceConfig/>
            </div>

                {/* Create div to show all of this Segmenter's saved Users */}
                {/* <div>
                    <MyUsersList userList={userList} setUserList={setUserList} currentSegmenterSelection={currentSegmenterSelection} setCurrentSegmenterSelection={setCurrentSegmenterSelection}/> 
                </div> */}
        </div>
    )   
}

export default OneSegmenter;