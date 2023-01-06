import React, { useState, useEffect} from 'react';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { registerUser } from '../slice/Authslice';

const Signup = () => {
    const dispatch = useDispatch();
    const navigate=useNavigate();
    const auth = useSelector((state) => state.auth);
    
    useEffect(() => {
     if(auth?._id){
        navigate('/home')
     }
    
    }, [auth?._id,navigate])
    


    const [userData, SetUserdata] = useState(
        {
            name: '',
            email: '',
            password: ''
        }
    )

    const { name, email, password } = userData


    const submitform = (e) => {
        e.preventDefault()

        dispatch(registerUser(userData))

        // await axios.post('http://localhost:4000/signup', userData).then((result) => {

        // }).catch(() => {
        //     alert('error')
        // })
    }
    return (
        <div className='signupform' >
            <form className="login-box" onSubmit={e => submitform(e)} >
                <div className="title">
                    <h1>Signup</h1>
                </div>
                <div className="input-box">
                    <input type="text" name="name" className="input" id="name" value={name} onChange={(e) => SetUserdata({ ...userData, name: e.target.value })} required />
                    <label for="username">Username</label>
                </div>
                <div className="input-box">
                    <input type="email" name="email" className="input" id="email" value={email} onChange={(e) => SetUserdata({ ...userData, email: e.target.value })} required />
                    <label for="username">Email</label>
                </div>
                <div className="input-box">
                    <input type="password" name="password" className="input pass-input" value={password} id="password" onChange={(e) => SetUserdata({ ...userData, password: e.target.value })} />
                    <label for="password">Password</label>
                </div>

                <button type="submit">Signup To Website</button>
                <div className="auth-action" onClick={()=>{
                    navigate('/login')
                }}>
                    Sign in
                </div>
            </form>
        </div>
    )
}

export default Signup