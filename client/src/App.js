import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

// IMPORT COMPONENTS
import Header from './components/Header';
import Nav from './components/Nav';

// PERSONIFIER HOME
import PersonifierHome from './components/Views/PersonifierHome';

// CSE USER IMPORTS
import CseUserList from './components/CseUser/CseUserList';
import OneCseUser from './components/CseUser/OneCseUser';
import CreateCseUser from './components/CseUser/CreateCseUser';
import EditCseUser from './components/CseUser/EditCseUser';

// USER IMPORTS
import UserList from './components/User/UserList';
import OneUser from './components/User/OneUser';
import CreateUser from './components/User/CreateUser';
import EditUser from './components/User/EditUser';

// PROFILE IMPORTS
import UserProfilesListView from './components/Views/UserProfilesList.View';
import NewPhoto from './components/Photos/NewPhoto';

// USER WORKSHOP IMPORTS
import UserWorkshop from './components/Views/UserWorkshop'

function App() {
  const [cseUserList, setCseUserList] = useState([]);
  const [userList, setUserList] = useState([]);


  return (
    <div className="App">
      <BrowserRouter>
      {/* NAV TOP */}
      <Nav/>
      {/* SIDEBAR */}
      {/* <Header/> */}
        <Routes>
          {/* PERSONIFIER */}
          <Route path='/' element={<PersonifierHome cseUserList={cseUserList} setCseUserList={setCseUserList} userList={userList} setUserList={setUserList}/>}/>
          {/* CSE USER ROUTES */}
          <Route path='/cseUsers/' element={<CseUserList cseUserList={cseUserList} setCseUserList={setCseUserList}/>}/>
          <Route path='/createCSEUser/form' element={<CreateCseUser/>}/>
          <Route path='/cseUser/:id' element={<OneCseUser/>}/>
          {/* <Route path='/viewCseUser/:id' element={<OneCseUser/>}/> */}
          <Route path='/editCseUser/:id' element={<EditCseUser/>}/>
        {/* USER ROUTES */}
          <Route path='/users/' element={<UserList userList={userList} setUserList={setUserList}/>}/>
          <Route path='/createUser/form' element={<CreateUser/>}/>
          <Route path='/user/:id' element={<OneUser/>}/>
          {/* <Route path='/viewUser/:id' element={<OneUser/>}/> */}
          <Route path='/editUser/:id' element={<EditUser/>}/>

          <Route path='/search/profilephotos/db/' element={<NewPhoto/>}/>
          <Route path='/search/profilephotos/search/' element={<UserProfilesListView/>}/>
          <Route path='/userworkshop/' element={<UserWorkshop/>}/>

        </Routes>
      </BrowserRouter>
    

    </div>
  );
}

export default App;
