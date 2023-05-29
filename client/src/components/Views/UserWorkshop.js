import React from 'react';
// import AjsJsonConverter from '../UserWorkshop/AjsJsonConverter/AjsJsonConverter';
import CodeEditor from '../UserWorkshop/TraitGenerator/CodeEditor/CodeEditor'
import DefaultProfilePhoto from '../User/default-profil-photo.jpg'


const UserWorkshop = () => {
    
    
    
    return(
        <div className='relative m-0 h-full w-full '>
            
            {/* SIDEBAR */}
            <div className='relative inset-y-0 w-1/12 h-screen left-0 top-0 m-0 bg-segment-blue shadow-lg rounded-tr-md rounded-br-md'>
                <div class='flex-wrap items-center justify-between grow-1'>
                    <h2 class='text-3xl font-bold text-gray-900 sm:text-4xl grow-0'>
                        <span class='text-white'>Pinned Users</span>
                        {/* CURRENT SEGMENTER'S USERS LIST */}
                        <div className='flex float-left m-2 w-2/3 items-center'>
                            <div >
                                <img  id="" className="h-24 w-24 object-cover rounded-full shadow-md m-0" src={DefaultProfilePhoto} alt="current user profile photo"/> 
                            </div>
                        </div>
                        <div className='flex float-left m-2 w-2/3 items-center'>
                            <div >
                                <img  id="" className="h-24 w-24 object-cover rounded-full shadow-md m-0" src={DefaultProfilePhoto} alt="current user profile photo"/> 
                            </div>
                        </div>
                        <div className='flex float-left m-2 w-2/3 items-center'>
                            <div >
                                <img  id="" className="h-24 w-24 object-cover rounded-full shadow-md m-0" src={DefaultProfilePhoto} alt="current user profile photo"/> 
                            </div>
                        </div>
                        <div className='flex float-left m-2 w-2/3 items-center'>
                            <div >
                                <img  id="" className="h-24 w-24 object-cover rounded-full shadow-md m-0" src={DefaultProfilePhoto} alt="current user profile photo"/> 
                            </div>
                        </div>
                        <div className='flex float-left m-2 w-2/3 items-center'>
                            <div >
                                <img  id="" className="h-24 w-24 object-cover rounded-full shadow-md m-0" src={DefaultProfilePhoto} alt="current user profile photo"/> 
                            </div>
                        </div>
                        <div className='flex float-left m-2 w-2/3 items-center'>
                            <div >
                                <img  id="" className="h-24 w-24 object-cover rounded-full shadow-md m-0" src={DefaultProfilePhoto} alt="current user profile photo"/> 
                            </div>
                        </div>
                    </h2>
                </div>
            </div>
             
            {/* QUERY & DISPLAY PUBLIC API CONNECTIONS */}
            <div className='absolute w-11/12 inset-y-0 right-0 m-0'>
                <div class='bg-sky-100 shadow-lg w-full rounded-md h-72'>
                    {/* <div class='flex mx-auto max-w-7xl py-12 px-6 lg:flex lg:items-center lg:justify-between lg:py-16 lg:px-8'> */}
                    <div class='flex h-full w-full lg:flex '>
                        {/* SEGMENTER PROFILE PHOTO */}
                        <div className='flex float-left m-2 w-1/6 items-center'>
                            <div >
                                <img  id="current-segmenter" className="h-40 w-40 object-cover rounded-full shadow-md m-0" src={DefaultProfilePhoto} alt="current user profile photo"/> 
                            </div>
                        </div>

                        {/* WORKSPACE CONNECTIONS & INTEGRATIONS OBJECT */}
                        <div className='flex w-5/6 ml-10 h-min-full right-0'>
                            {/* Sources */}
                            <div className='w-1/5 mx-1 my-2 h-min-full bg-sky-200'>Sources</div>
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
            
            {/* FUNCTIONS DIV */}
            <div className='absolute inset-y-64 right-0 w-11/12 ml-1/6 h-100 mt-8 flex justify-evenly '>
                
                    <div className='mt-2 w-2/5 h-4/6 rounded-rounded ml-4'>
                        <div className='mt-0 h-3/6 mx-4 mt-4 bg-sky-100 rounded-rounded border-segment-green border-2 shadow-xlg shadow-slate-900'>
                            traits
                        </div>
                        <div className='mt-0 h-3/6 mx-4 mt-4 bg-sky-100 rounded-rounded border-segment-green border-2 shadow-xlg shadow-slate-900'>profile api
                        </div>
                    </div>

                    <div className='mt-5 w-1/5 h-4/6 bg-sky-100 rounded-rounded border-segment-green border-2 shadow-xlg shadow-slate-900 flex-fit justify-evenly '>
                        <button className='text-sm'>Get Query String</button><button className='text-sm'>Set Query String</button>
                        <div className='w-full m-1 rounded-lg border-segment-green border-2'>query string</div>
                        <button className='text-sm'>Context Object</button>
                        <div className='w-full m-1 rounded-lg border-segment-green border-2'>context object</div>
                        <button className='text-sm'>Cookies</button><button className='text-sm'>Local Storage</button>
                        <div className='w-full m-1 rounded-lg border-segment-green border-2'>cookies / local storage</div>
                    </div>

                    <div className='mt-2 w-2/5 h-4/6 rounded-rounded mr-4 '>
                        <div className='mt-0 h-3/6 m-4 bg-sky-100 rounded-rounded border-segment-green border-2 shadow-xlg shadow-slate-900'>
                        <h6>code editor</h6>
                            <div className='w-28 m-1 rounded-lg border-segment-green border-2'>track</div>
                            <div className='w-28 m-1 rounded-lg border-segment-green border-2'>page</div>
                            <div className='w-28 m-1 rounded-lg border-segment-green border-2'>identify</div>
                            <div className='w-28 m-1 rounded-lg border-segment-green border-2'>screen</div>
                            <div className='w-28 m-1 rounded-lg border-segment-green border-2'>group</div>
                            <div className='w-28 m-1 rounded-lg border-segment-green border-2'>alias</div>
                        </div>
                        <div className='mt-0 h-3/6 m-4 bg-sky-100 rounded-rounded border-segment-green border-2 shadow-xlg shadow-slate-900'>
                        <h6>event queue</h6>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
            </div>
            {/* RESOURCES DIV */}
            <div className='absolute w-full h-96 bg-segment-green'>

            </div>
            


            
            {/* <AjsJsonConverter/> */}
            {/* <CodeEditor/> */}
        </div>
    )
}

// sidebar to load Segmenter's UsersList background-color: rgb(16, 24, 64);

export default UserWorkshop