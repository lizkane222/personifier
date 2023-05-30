import React from 'react';
import SearchField from './SearchField'

const SearchPhotos = ({children}) => {
    return (
        <div className='bg-gray-900 flex items-center py-10 w-full inset-x-0'>
            <div className='w-fit mx-auto w-full'>
                <h1 className='text-white text-center text-2xl font-bold mb-5'>Find Photos</h1>
                {children}
            </div>
        </div>
    )
}

export default SearchPhotos;