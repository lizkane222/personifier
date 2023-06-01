import React from 'react';
import axios from 'axios';
import DefaultProfilePhoto from '../User/default-profil-photo.jpg'
import PUBLICAPITOKEN from '../../.env'

const publicApiUrl = 'https://api.segmentapis.com/sources?pagination[count]=10&%5Bcursor%5D=string%5D';
const Authorization = `Bearer ${PUBLICAPITOKEN}`;
const AccessControlAllowOrigin= `Access-Control-Allow-Origin: '*'`
const axiosHeaders = axios.create({
    headers : {
        'Authorization': `Bearer ${PUBLICAPITOKEN}`,
        'Access-Control-Allow-Origin': 'http://localhost:3000'
    }
})

const headers = {
    'Authorization': `Bearer ${PUBLICAPITOKEN}`,
    'Access-Control-Allow-Origin': 'http://localhost:3000',
    crossdomain: true
}

const WorkspaceConfig = () => {

    const getSources = () => {
        axios.get('https://api.segmentapis.com/sources?pagination[count]=10&%5Bcursor%5D=string%5D',axiosHeaders)
            .then(response => {
                let sources = response.body.JSON.stringify()
                console.log(sources)
            })
            .catch(error => {
                console.log(error)
            })
    }



    return(
        <>
        {/* <div className='workspaceConfig bg-slate-400 tx-white w-full h-40'> */}
            {/* QUERY & DISPLAY PUBLIC API CONNECTIONS */}
            <div className='absolute w-full inset-y-50 right-0 m-0 '>
                <div className='bg-sky-100 shadow-lg w-full rounded-md h-96'>
                    {/* <div className='flex mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8'> */}
                    <div className='flex h-full w-full lg:flex '>
                        {/* SEGMENTER PROFILE PHOTO */}
                        <div className='flex float-left m-2 w-1/6 items-center'>
                            <div >
                                <img  id="current-segmenter" className="h-40 w-40 object-cover rounded-full shadow-md m-0" src={DefaultProfilePhoto} alt="current user profile photo"/> 
                            </div>
                        </div>

                        {/* WORKSPACE CONNECTIONS & INTEGRATIONS OBJECT */}
                        <div className='flex w-5/6 ml-10 h-min-full right-0'>
                            {/* Sources */}
                            <div className='w-1/5 mx-1 my-2 h-min-full bg-sky-200' onClick={getSources}>Sources</div>
                            {/* Selected Sources */}
                            <div className='flex w-1/5 items-center mx-1 my-2 bg-sky-300 '>
                                <div className='w-5/12 grow-0 h-full mx-.5 mb-.5 border-teal-600 border-4'>S</div>
                                <div className='w-5/12 grow-0 h-full mx-.5 mb-.5 '>Modes</div>
                            </div>
                            {/* Selected Destinations */}
                            <div className='flex w-1/5 items-center mx-1 my-2 bg-sky-400 '>
                                <div className='w-5/12 grow-0 h-full mx-.5 mb-.5 '>Modes</div>
                                <div className='w-5/12 grow-0 h-full mx-.5 mb-.5 border-teal-600 border-4'>D</div>
                            </div>
                            {/* Destinations */}
                            <div className='w-1/5 mx-1 my-2 bg-sky-500'>Destinations</div>
                            {/* Integrations Object */}
                            <div className='w-1/5 mx-1 my-2 bg-sky-600'>integrations :</div>
                        </div>
                    </div>
                </div>
            </div> 
        </>
    )
}

export default WorkspaceConfig;