import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { registerOptions } from './Validation'

import { loginUser } from '../slice/Authslice';

const Login = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        if (auth?._id) {
            navigate('/home')
        }

    }, [auth?._id, navigate])

    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
    });
    const handleRegistration = (data) => {

        dispatch(loginUser(data))
    };
    const handleError = (errors) => { };

    // const [userData, SetUserdata] = useState(
    //     {
    //         email: '',
    //         password: ''
    //     }
    // )

    // const { email, password } = userData


    // const submitform = (e) => {
    //     e.preventDefault()

    //     dispatch(loginUser(userData))

    // }
    return (
        <div className='signupform' >
            <form className="login-box" onSubmit={handleSubmit(handleRegistration, handleError)} >
                <div className="title">
                    <h1>SignIn</h1>
                </div>
                {auth.loginError?<p className="text-danger">{auth.loginError}</p>:null}

                
                <p className='text-danger'></p>

                <div className="input-box">
                    <input type="email" name="email" className="input" {...register('email', registerOptions.email)} id="email"   />
                    <small className="text-danger">
                        {errors?.email && errors.email.message}
                    </small>
                    <label for="username">Email</label>
                </div>
                <div className="input-box">
                    <input type="password" name="password" className="input pass-input" {...register('password', registerOptions.password)} id="password" />
                    <small className="text-danger">
                        {errors?.password && errors.password.message}
                    </small>
                    <label for="password">Password</label>
                </div>

                <button type="submit">{auth.loginStatus === "pending" ? "Submitting" : "Login To Website"}</button>
                <div className="auth-action" onClick={() => {
                    navigate('/')
                }}>
                    Sign up
                </div>
            </form>
        </div>
    )
}

export default Login