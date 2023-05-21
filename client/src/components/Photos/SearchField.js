import {useState, useContext} from 'react';
import {ImageContext} from '../Views/ProfilesList.View';
import UNSPLASH_ACCESS_KEY from '../../.env';

const SearchField = () => {
    const [searchValue, setSearchValue] = useState("");
    const {fetchData, setSearchPhoto} = useContext(ImageContext);

    const handleInputChange = (e) => {
        setSearchValue(e.target.value);
    }
    
    const handleButtonSearch = () => {
        // fetchData(`/search/photos?page=1&query=${searchValue}&client_id=${UNSPLASH_ACCESS_KEY}`)
        fetchData(`/search/photos?page=1&query=${searchValue}&client_id=8HuUWVb7qIlJadnLWkjSCZ4Jc9omuIbbwmSNX-43bAI`)
        // setSearchValue('');
        setSearchPhoto(searchValue);
    }
    
    const handleEnterSearch = (e) => {
        if(e.key === 'Enter'){
            // fetchData(`/search/photos?page=1&query=${searchValue}&client_id=${UNSPLASH_ACCESS_KEY}`)
            fetchData(`/search/photos?page=1&query=${searchValue}&client_id=8HuUWVb7qIlJadnLWkjSCZ4Jc9omuIbbwmSNX-43bAI`)
            // setSearchValue('');
            setSearchPhoto(searchValue);
        }
    }

    return(
        <div className='flex'>
            <input className='bg-gray-50 border border-gray-300 text-sm w-full indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring rounded-tl rounded-bl text-black' type='search' placeholder='Search Anything...' value={searchValue} onChange={handleInputChange} onKeyDown={handleEnterSearch}/>

            <button disabled={!searchValue} onClick={handleButtonSearch} className='bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400' >Search</button>
        </div>
    )
}

export default SearchField;