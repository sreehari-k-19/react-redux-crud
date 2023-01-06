import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { loginadmin } from '../../slice/Adminauthslice';

const Adminlogin = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const auth = useSelector((state) => state.adminauth);

    const [adminData, setadminData] = useState(
        {
            email: '',
            password: ''
        }
    )
    const { email, password } = adminData
    useEffect(() => {
        if (auth?.email) {
            navigate('/admin')
        }

    }, [auth?.email, navigate])

    const submitform = (e) => {
        e.preventDefault()

        dispatch(loginadmin(adminData))

    
    }


    return (
        <div className='signupform' >
            <form className="login-box" onSubmit={e => submitform(e)} >
                <div className="title">
                    <h1>Admin Signin</h1>
                </div>

                <div className="input-box">
                    <input type="email" name="email" className="input" id="email" value={email} onChange={(e) => setadminData({ ...adminData, email: e.target.value })} />
                    <label for="username">Email</label>
                </div>
                <div className="input-box">
                    <input type="password" name="password" className="input pass-input" value={password} id="password" onChange={(e) => setadminData({ ...adminData, password: e.target.value })} />
                    <img src="asSets/img/view.png" className="view-pass" alt="" />
                    <label for="password">Password</label>
                </div>

                <button type="submit">{auth.loginStatus === "pending" ? "Submitting" : "Login To Website"}</button>
            </form>
        </div>
    )
}

export default Adminlogin