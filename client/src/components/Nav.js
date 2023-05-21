import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Nav = () => {
    return(
        <div className='d-inline-flex justify-content-space-evenly' id='nav'>
        {/* <div  p-3 bg-secondary'> */}
            <Link to={'/'}>Catfish Accordion</Link>
            <Link to={'/cseUsers/'}>CSEs</Link>
            <Link to={'/createCSEUser/form'}>NEW CSE</Link>
            <Link to={'/createUser/form'}>NEW User</Link>
            <Link to={'/users'}>Users</Link>
            <Link to={'/search/profilephotos/db/'}>ProPho DB</Link>
            <Link to={'/search/profilephotos/search/'}>ProPho Search</Link>
            <Link to={'/userworkshop/'}>User Workshop</Link>
            {/* 
            <Link to={'/editCSEUser/:id'}>Edit CSE</Link> */}
            <br/><br/><br/><br/>
        </div>
    )   
}

export default Nav;