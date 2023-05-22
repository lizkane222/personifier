import React, {createContext, useState} from 'react';
import SearchField from '../Photos/SearchField'
import PhotosList from '../Photos/PhotosList'
import useAxios from '../../hooks/useAxios';
import UNSPLASH_ACCESS_KEY from '../../.env';
import SearchPhotos from '../Photos/SearchPhotos';

export const ImageContext = createContext();

const UserProfilesListView = () => {

    const [searchPhoto, setSearchPhoto] = useState('Profile Photos');
    
    // on more results change the page number in the query
    // const {response, isLoading, error, fetchData} = useAxios(`/search/photos?page=1&query=profile%20photos&client_id=${UNSPLASH_ACCESS_KEY}`);
    const {response, isLoading, error, fetchData} = useAxios(`/search/photos?page=1&per_page=20&query=profile%20photos&client_id=8HuUWVb7qIlJadnLWkjSCZ4Jc9omuIbbwmSNX-43bAI`);
    console.log(response)

    const value = {
        // response, isLoading, error, fetchData, setSearchPhoto
        response, isLoading, error, fetchData, searchPhoto, setSearchPhoto
    }

    return (
        <ImageContext.Provider value={value}>
            <SearchPhotos>
                <SearchField/>
            </SearchPhotos>
            <PhotosList />
        </ImageContext.Provider>
    );
}

export default UserProfilesListView;