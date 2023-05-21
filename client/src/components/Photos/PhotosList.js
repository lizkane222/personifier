import {useContext, useState} from 'react';
import {ImageContext} from '../Views/ProfilesList.View';
import Photo from './Photo';
import PhotoSkeleton from './PhotoSkeleton';

const PhotosList = (props) => {
    const {response, isLoading, searchPhoto} = useContext(ImageContext)
    const {fetchData, setSearchPhoto} = useContext(ImageContext);
    const [searchValue, setSearchValue] = useState("");
//    const {createProfilePhoto} = props.createProfilePhoto


    const handleMoreResultsSearch = () => {
        // fetchData(`/search/photos?page=1&query=${searchValue}&client_id=${UNSPLASH_ACCESS_KEY}`)
        fetchData(`/search/photos?page=1&per_page=20&query=${searchPhoto}&client_id=8HuUWVb7qIlJadnLWkjSCZ4Jc9omuIbbwmSNX-43bAI`)
        // setSearchValue('');
        setSearchPhoto(searchPhoto);
    }
    
    return(
        <div>
            <h1 className='text-center mt-6 underline text-2xl' onClick={handleMoreResultsSearch}>Results for {searchPhoto || 'profile photos'}</h1>
            <div className='grid md:grid-cols-2 lgLgrid-cols-3 xl:grid-cols-4 gap-4 my-10 max-w-7xl mx-auto px-4'>
               {/* {isLoading ? <PhotoSkeleton item={20}/> : response.map((data, key) => <Photo key={key} data={data} createProfilePhoto={createProfilePhoto}/>)} */}
               {isLoading ? <PhotoSkeleton item={20}/> : response.map((data, key) => <Photo key={key} data={data}/>)}
            </div>
        </div>
    )
}

export default PhotosList;