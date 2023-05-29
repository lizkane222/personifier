import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';





export const Nav = (props) => {
    const [isOpen, setOpen] = useState(false)
    const [navbarOpen, setNavbarOpen] = useState(false)
    return (
        <>
            <header className="relative h-14 w-screen bg-segment-green">
                        {/* <Splash theme={props.theme} setTheme={props.setTheme}/> */}
                    <nav className="absolute inset-x-0 top-0 h-14 ">
                        
                        <Link activeclass="active" className="mx-5 text-indigo-950" to="/segmenters/" spy={true} smooth={true} duration={1000}>Personifier</Link>
                        
                        {/* <Link activeclass="active" className="mx-5 text-indigo-950" to="/segmenters/" spy={true} smooth={true} duration={1100}>Segmenters</Link> */}
                        
                        {/* <Link activeclass="active" className="mx-5 text-indigo-950" to="/createSegmenter/form/" spy={true} smooth={true} duration={1200}>NEW Segmenter</Link> */}
                        
                        <Link activeclass="active" className="mx-5 text-indigo-950" to="/users" spy={true} smooth={true} duration={1300}>Users</Link>
                        
                        <Link activeclass="active" className="mx-5 text-indigo-950" to="/createUser/form/" spy={true} smooth={true} duration={1400}>NEW User</Link>
                        
                        <Link activeclass="active" className="mx-5 text-indigo-950" to="/search/profilephotos/db/" spy={true} smooth={true} duration={1500}>ProPho DB</Link>
                        
                        <Link activeclass="active" className="mx-5 text-indigo-950" to="/search/profilephotos/search/" spy={true} smooth={true} duration={3000}>ProPho Search</Link>
                        
                        <Link activeclass="active" className="mx-5 text-indigo-950" to="/userworkshop/" spy={true} smooth={true} duration={3000}>fier</Link>
                        {/* <Link activeclass="active" className="navLinks" to="contactPage" spy={true} smooth={true} duration={1000}> */}
                    </nav>
            </header>
        {/* <Hamburger toggled={isOpen} toggle={setOpen} label="Show menu" /> */}
        </>
    );
}

export default Nav;