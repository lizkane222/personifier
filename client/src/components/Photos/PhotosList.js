import {useContext, useState} from 'react';
import {ImageContext} from '../Views/UserProfilesList.View';
import Photo from './Photo';
import PhotoSkeleton from './PhotoSkeleton';

const PhotosList = (props) => {
    const {response, isLoading, searchPhoto, fetchData} = useContext(ImageContext)
                
    return(
        <div>
            {/* <h1 className='text-center mt-6 underline text-2xl' onClick={handleMoreResultsSearch}>Results for {searchPhoto || 'profile photos'}</h1> */}
            {/* <h1 className='text-center mt-6 underline text-2xl' >Results for {searchPhoto || 'profile photos'}</h1> */}
            <div className='grid md:grid-cols-2 lgLgrid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4'>
               {/* {isLoading ? <PhotoSkeleton item={20}/> : response.map((data, key) => <Photo key={key} data={data} createProfilePhoto={createProfilePhoto}/>)} */}
               {isLoading ? <PhotoSkeleton item={20}/> : response.map((data, key) => <Photo key={key} data={data} profilePhoto={props.profilePhoto} setProfilePhoto={props.setProfilePhoto} />)}
            </div>
        </div>
    )
}

export default PhotosList;