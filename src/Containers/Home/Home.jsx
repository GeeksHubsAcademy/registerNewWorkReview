
import React from 'react';

import {useNavigate} from 'react-router-dom';

import './Home.css';

const Home = () => {

    const navigate = useNavigate();

    return(
        <div className='homeDesign'>
            <div className='linkDesign' onClick={()=>setTimeout(()=>{navigate('/login')},300)}>Login</div>
            <div className='linkDesign' onClick={()=>setTimeout(()=>{navigate('/register')},300)}>Register</div>
        </div>
    )
}

export default Home;