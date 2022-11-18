
import React, {useState} from 'react';
import { errorCheck } from '../../Services/validate';
import './RegisterCard.css'
import logo from '../../Assets/logo.jpg';

const RegisterCard = () => {

    const [user, setUser] = useState({
        email : '',
        phone : '',
        password: '',
        password2: ''
    });

    const inputHandler = (e) => {
        //Now I bind the handler


    }

    return (
        <div className="registerCardDesign">
            <div className="registerCardUp">
                <img className="logoDesign" src={logo}/>
            </div>
            <div className="registerCardMiddle">
                {/* Here were are going to operate with inputs... */}
                <input type="" name="" className="" onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorCheck(e.target.value)}/>
                <input type="" name="" className="" onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorCheck(e.target.value)}/>
                <input type="" name="" className="" onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorCheck(e.target.value)}/>
                <input type="" name="" className="" onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorCheck(e.target.value)}/>
            </div>
            <div className="registerCardBottom"></div>
        </div>
    )
}

export default RegisterCard;