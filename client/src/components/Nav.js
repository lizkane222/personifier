import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {NavLink} from 'react-router-dom';

const linkList = {
    personifier : {name:'Personfier',to:"/segmenters/"},
    segmenters : {name:'Segmenters','to':"/segmenters/"},
    newSegmenter : {name:'NEW','to':"/createSegmenter/form/"},
    Users : {name:'Users','to':"/users"},
    NEW : {name:'NEW','to':"/createUser/form/"},
    ProPho : {name:'ProPho','to':"/search/profilephotos/db/"},
    ProPho : {name:'ProPho','to':"/search/profilephotos/search/"},
    fier : {name:'fier','to':"/userworkshop/"}
}

export const Nav = (props) => {

    return (
        <>
            <header className="relative h-14 w-screen bg-white">
                    {/* <Splash theme={props.theme} setTheme={props.setTheme}/> */}
                    <nav className="absolute inset-x-0 top-0 h-14 flex justify-around">

                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'mx-4 text-indigo-950 linkSlide no-underline')} to="/segmenters/">Personifier</NavLink>
                        
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'mx-4 text-indigo-950 linkSlide no-underline')} to="/segmenters/">Segmenters</NavLink>
                        
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'mx-4 text-indigo-950 linkSlide no-underline')} to="/createSegmenter/form/">NEW Segmenter</NavLink>
                        
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'mx-4 text-indigo-950 linkSlide no-underline')} to="/users">Users</NavLink>
                        
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'mx-4 text-indigo-950 linkSlide no-underline')} to="/createUser/form/">NEW User</NavLink>
                        
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'mx-4 text-indigo-950 linkSlide no-underline')} to="/search/profilephotos/db/">ProPho DB</NavLink>
                        
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'mx-4 text-indigo-950 linkSlide no-underline')} to="/search/profilephotos/search/">ProPho Search</NavLink>
                        
                        <NavLink className={({ isActive }) => (isActive ? 'active' : 'mx-4 text-indigo-950 linkSlide no-underline')} to="/userworkshop/">fier</NavLink>

                    </nav>
            </header>
        {/* <Hamburger toggled={isOpen} toggle={setOpen} label="Show menu" /> */}
        </>
    );
}

export default Nav;