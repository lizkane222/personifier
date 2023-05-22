import React from 'react';

const PhotoSkeleton = ({ item }) => {
    return[...Array(item).keys()].map(()=> (
        <div className='animate-pulse'>
            <div className='bg-gray-300 rounded-lg h-72'>
            </div>
        </div>
    ))
}

export default PhotoSkeleton;


// const {useProfilePhoto, setUserProfilePhoto} = useState([])

// const getUserProfilePhoto = (user) => {
//     axios.get(`http://localhost:8000/api/profilephoto/${user.profilePhoto}`)
//     .then((res) => {
//         console.log(res)
//         setUserProfilePhoto(res)
//         createElement(
//             <img  id={userProfilePhoto.id} className="h-72 w-full object-cover rounded-full shadow-md m-0" src={userProfilePhoto.urls.small} alt={userProfilePhoto.alt_description} />
//         )
//     })
//     .catch((err) => {
//         console.log(err)
//     })
// };
{/* {getUserProfilePhoto(user)} */}
{/* <img  id={userProfilePhoto.id} className="h-72 w-full object-cover rounded-full shadow-md m-0" src={userProfilePhoto.urls.small} alt={userProfilePhoto.alt_description} /> */}

