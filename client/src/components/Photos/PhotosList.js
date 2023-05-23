import {useContext, useState} from 'react';
import {ImageContext} from '../Views/UserProfilesList.View';
import Photo from './Photo';
import PhotoSkeleton from './PhotoSkeleton';

const PhotosList = (props) => {
    const {response, isLoading, searchPhoto, fetchData} = useContext(ImageContext)
                
    return(
        <div className='scroll-smooth hover:scroll-auto'>
            {/* <h1 className='text-center mt-6 underline text-2xl' onClick={handleMoreResultsSearch}>Results for {searchPhoto || 'profile photos'}</h1> */}
            {/* <h1 className='text-center mt-6 underline text-2xl' >Results for {searchPhoto || 'profile photos'}</h1> */}
            <div className='grid md:grid-cols-4 lgLgrid-cols-6 xl:grid-cols-7 gap-4 m-3 max-w-7xl mx-auto px-4'>
               {/* {isLoading ? <PhotoSkeleton item={20}/> : response.map((data, key) => <Photo key={key} data={data} createProfilePhoto={createProfilePhoto}/>)} */}
               {isLoading ? <PhotoSkeleton item={20}/> : response.map((data, key) => <Photo key={key} data={data} profilePhoto={props.profilePhoto} setProfilePhoto={props.setProfilePhoto} setPhotoReady={props.setPhotoReady} photoReady={props.photoReady}/>)}
            </div>
        </div>
    )
}

export default PhotosList;