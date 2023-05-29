import './App.css';
import axios from 'axios';
import React, {useEffect, useState} from 'react';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';

// IMPORT COMPONENTS
import Header from './components/Header';
import Nav from './components/Nav';

// PERSONIFIER HOME
import PersonifierHome from './components/Views/PersonifierHome';

// SEGMENTER IMPORTS
import SegmenterList from './components/Segmenter/SegmenterList';
// SegmenterList
import OneSegmenter from './components/Segmenter/OneSegmenter';
import CreateSegmenter from './components/Segmenter/CreateSegmenter';
import EditSegmenter from './components/Segmenter/EditSegmenter';

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
  const [segmenterList, setSegmenterList] = useState([]);
  const [userList, setUserList] = useState([]);
  // const [photoList, setPhotoList] = useState([]);


  return (
    <div className="App bg-white">
      <BrowserRouter>
      {/* NAV TOP */}
      <Nav/>
      {/* SIDEBAR */}
      {/* <Header/> */}
        <Routes>
          {/* PERSONIFIER */}
          <Route path='/' element={<PersonifierHome segmenterList={segmenterList} setSegmenterList={setSegmenterList} userList={userList} setUserList={setUserList}/>}/>

          {/* SEGMENTER USER ROUTES */}
          <Route path='/segmenters/' element={<SegmenterList segmenterList={segmenterList} setSegmenterList={setSegmenterList}/>}/>
          <Route path='/createSegmenter/form' element={<CreateSegmenter/>}/>
          <Route path='/segmenter/:id' element={<OneSegmenter/>}/>
          {/* <Route path='/viewSegmenter/:id' element={<OneSegmenter/>}/> */}
          <Route path='/editSegmenter/:id' element={<EditSegmenter/>}/>

        {/* USER ROUTES */}
          <Route path='/users/' element={<UserList userList={userList} setUserList={setUserList}/>}/>
          <Route path='/createUser/form' element={<CreateUser/>}/>
          <Route path='/user/:id' element={<OneUser/>}/>
          {/* <Route path='/viewUser/:id' element={<OneUser/>}/> */}
          <Route path='/editUser/:id' element={<EditUser/>}/>

          {/* <Route path='/search/profilephotos/db/' element={<NewPhoto/>}/> */}
          <Route path='/search/profilephotos/search/' element={<UserProfilesListView/>}/>
          <Route path='/userworkshop/' element={<UserWorkshop/>}/>

        </Routes>
      </BrowserRouter>
    

    </div>
  );
}

export default App;
