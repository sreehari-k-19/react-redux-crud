import React, { useState, useEffect } from 'react';

import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';

import { registerUser } from '../slice/Authslice';
import { useForm } from "react-hook-form";
import  {registerOptions} from './Validation'

const Signup = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const auth = useSelector((state) => state.auth);



    const { register, handleSubmit, formState: { errors } } = useForm({
        mode: 'onBlur',
    });
    const handleRegistration = (data) => {
        SetUserdata(data);
        dispatch(registerUser(userData))

    };
    const handleError = (errors) => { };


    useEffect(() => {
        if (auth?._id) {
            navigate('/home')
        }

    }, [auth?._id, navigate])



    const [userData, SetUserdata] = useState(
        {
            name: '',
            email: '',
            password: ''
        }
    )
    console.log(userData)
    const { name, email, password } = userData


    // const submitform = (e) => {
    //     e.preventDefault()

    //     dispatch(registerUser(userData))


    // }
    return (
        <div className='signupform' >
            <form className="login-box" onSubmit={handleSubmit(handleRegistration, handleError)} >
                <div className="title">
                    <h1>Signup</h1>
                </div>
                <div className="input-box">
                    <input type="text" name="name" className="input" {...register('name', registerOptions.name)} id="name" value={name} onChange={(e) => SetUserdata({ ...userData, name: e.target.value })} />
                    <small className="text-danger">
                        {errors?.name && errors.name.message}
                    </small>
                    <label for="username">Username</label>
                </div>
                <div className="input-box">
                    <input type="email" name="email" className="input" {...register('email', registerOptions.email)} id="email" value={email} onChange={(e) => SetUserdata({ ...userData, email: e.target.value })} />
                    <small className="text-danger">
                        {errors?.email && errors.email.message}
                    </small>
                    <label for="username">Email</label>
                </div>
                <div className="input-box">
                    <input type="password" name="password" {...register('password', registerOptions.password)} className="input pass-input" value={password} id="password" onChange={(e) => SetUserdata({ ...userData, password: e.target.value })} />
                    <small className="text-danger">
                        {errors?.password && errors.password.message}
                    </small>
                    <label for="password">Password</label>
                </div>

                <button type="submit">Signup To Website</button>
                <div className="auth-action" onClick={() => {
                    navigate('/login')
                }}>
                    Sign in
                </div>
            </form>
        </div>
    )
}

export default Signup