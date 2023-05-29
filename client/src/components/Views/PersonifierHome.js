import React, {createContext, useState} from 'react';
import SegmenterList from '../Segmenter/SegmenterList';
import MyUsersList from '../User/MyUsersList';

const PersonifierHome = (props) => {
    const {userList, setUserList, segmenterList, setSegmenterList, segmenter} = props
    const [currentSegmenterSelection, setCurrentSegmenterSelection] = useState([])

    // grab segmenter._id onClick and render the MyUsersList
    // onclick function here, pass props of userId value to then pass ot myuserslist
    const handleSegmenterSelect = () => {
        // e.preventDefault();
        setCurrentSegmenterSelection(segmenter._id)
    }


    return (
        <div>
            <div >
                {/* removing segmenter from props */}
                {/* <SegmenterList segmenterList={props.segmenterList} setSegmenterList={props.setSegmenterList} segmenter={segmenter} handleSegmenterSelect={handleSegmenterSelect} currentSegmenterSelection={currentSegmenterSelection} setCurrentSegmenterSelection={setCurrentSegmenterSelection}/> */}
                <SegmenterList segmenterList={props.segmenterList} setSegmenterList={props.setSegmenterList} handleSegmenterSelect={handleSegmenterSelect} currentSegmenterSelection={currentSegmenterSelection} setCurrentSegmenterSelection={setCurrentSegmenterSelection}/>
            </div>
            <div>
                <MyUsersList userList={userList} setUserList={setUserList} currentSegmenterSelection={currentSegmenterSelection}/> 
            </div>
        </div>
    );
}

export default PersonifierHome;
