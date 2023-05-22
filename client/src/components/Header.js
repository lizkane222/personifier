import React, {useEffect, useState} from 'react';
import axios from 'axios';
import {Link} from 'react-router-dom';


const Header = () => {
    return(
        <header >
            <Link to={'/'}><h1>Personifier</h1></Link>
        </header>
    )   
}

export default Header;