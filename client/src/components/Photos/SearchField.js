import {useState, useContext} from 'react';
import {ImageContext} from '../Views/UserProfilesList.View';
import UNSPLASH_ACCESS_KEY from '../../.env';

const SearchField = () => {
  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchPhoto } = useContext(ImageContext);
  const [pageCount, setPageCount] = useState(1)

  const handleInputChange = (e) => {
    // console.log('e.target : ',e.target)
    setSearchValue(e.target.value)
    // FEATURE HANDLE TAGS HERE
    // e.target.type=='search' ? setSearchValue(e.target.value) : 
  }
  const handleButtonSearch = (results) => {
    console.log(results)
    // fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
    setPageCount(pageCount+1)
    fetchData(`search/photos?page=${pageCount}&query=${searchValue}&client_id=8HuUWVb7qIlJadnLWkjSCZ4Jc9omuIbbwmSNX-43bAI`)
  }
  const handleEnterSearch = e => {
    if(e.key === 'Enter') {
    //   fetchData(`search/photos?page=1&query=${searchValue}&client_id=${process.env.UNSPLASH_ACCESS_KEY}`)
      fetchData(`search/photos?page=1&query=${searchValue}&client_id=8HuUWVb7qIlJadnLWkjSCZ4Jc9omuIbbwmSNX-43bAI`)
    //   setSearchValue("");
      setSearchPhoto(searchValue);
    }
  }

  return (
    <div>
        <div className="flex w-screen justify-content-center justify-items-center">
            <input
                className="bg-gray-50 border border-gray-300 text-sm max-w-9/12 w-1/5 indent-2 p-2.5 outline-none focus:border-blue-500 focus:ring-2 rounded-tl rounded-bl"
                type="search"
                placeholder="Search Anything..."
                value={searchValue}
                onChange={handleInputChange}
                onKeyDown={handleEnterSearch}
                />
            <button
                onClick={handleButtonSearch}
                disabled={!searchValue}
                className="bg-blue-600 px-6 py-2.5 text-white rounded-tr rounded-br focus:ring-2 focus:ring-blue-300 disabled:bg-gray-400"
            >Search</button>
        </div>
        <div className='flex justify-content-center justify-items-center'>
          {/* FEATURE : ADD TAGS TO INCLUDE IN SEARCH : List Style Image @ https://tailwindcss.com/docs/list-style-image */}
            <a to="!" className='hover:focus cursor-pointer' >
              <h3 className='text-center mt-6 text-2xl' onClick={handleButtonSearch}>{searchValue ? searchValue : 'profile photos'}</h3>
            </a>
            <button onClick={handleButtonSearch} className='hover-slide m-3 bg-none px-1 py-.5 text-white rounded pointer-events-auto' >more results</button>
        </div>
    </div>
  )
}

export default SearchField