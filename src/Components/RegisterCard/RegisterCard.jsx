
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

    const [userError, setUserError] = useState({
        emailError : '',
        phoneError : '',
        passwordError : '',
        password2Error : ''
    })

    const inputHandler = (e) => {
        //Now I bind the handler

        setUser((prevState)=>({...prevState, 
            [e.target.name] : e.target.value
        }));

    }

    const errorHandler = (e) => {

        let error = "";

        error = errorCheck(e.target.name,e.target.value);

        if(e.target.name === "password2"){
            if(user.password !== user.password2){
                error = "Write the same password twice"
            }
        }

        setUserError((prevState)=>({...prevState, 
            [e.target.name + 'Error'] : error
        }));

    }


    return (
        <div className="registerCardDesign">
            {/* <pre>{JSON.stringify(user, null, 2)}</pre> */}
            <div className="registerCardUp">
                <img className="logoDesign" src={logo} alt={logo}/>
            </div>
            <div className="registerCardMiddle">
                {/* Here were are going to operate with inputs... */}
                <input placeholder="E-mail" type="email" name="email" className={userError.emailError === "" ? "basicInput" : "basicInput errorInput"} onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)}/>
                <div className='errorMsg'>{userError.emailError}</div>
                
                <input placeholder="Phone number" type="text" name="phone" className={userError.phoneError === "" ? "basicInput" : "basicInput errorInput"} onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)}/>
                <div className='errorMsg'>{userError.phoneError}</div>
                
                <input placeholder="Password" type="password" name="password" className={userError.passwordError === "" ? "basicInput" : "basicInput errorInput"} onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)}/>
                <div className='errorMsg'>{userError.passwordError}</div>
                
                <input placeholder="Repeat password" type="password" name="password2" className={userError.password2Error === "" ? "basicInput" : "basicInput errorInput"} onChange={(e)=>inputHandler(e)} onBlur={(e)=>errorHandler(e)}/>
                <div className='errorMsg'>{userError.password2Error}</div>
            
            </div>
            <div className="registerCardBottom"></div>
        </div>
    )
}

export default RegisterCard;