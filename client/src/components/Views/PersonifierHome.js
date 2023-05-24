import React, {createContext, useState} from 'react';
import CseUserList from '../CseUser/CseUserList';
import MyUsersList from '../User/MyUsersList';

const PersonifierHome = (props) => {
    const {userList, setUserList, cseUserList, setCseUserList} = props
    const [currentCseUserSelection, setCurrentCseUserSelection] = useState([])

    // grab cseUser._id onClick and render the MyUsersList
    // onclick function here, pass props of userId value to then pass ot myuserslist
    const handleCseUserSelect = (cseUser) => {
        setCurrentCseUserSelection(cseUser._id)
    }


    return (
        <div>
            <div >
                <CseUserList cseUserList={props.cseUserList} setCseUserList={props.setCseUserList} handleCseUserSelect={handleCseUserSelect} currentCseUserSelection={currentCseUserSelection} setCurrentCseUserSelection={setCurrentCseUserSelection}/>
            </div>
            <div>
                <MyUsersList userList={userList} setUserList={setUserList} currentCseUserSelection={currentCseUserSelection}/> 
            </div>
        </div>
    );
}

export default PersonifierHome;
