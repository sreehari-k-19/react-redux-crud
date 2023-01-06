import React, {useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { BsBoxArrowInLeft } from "react-icons/bs";
import { logoutUser } from "../slice/Authslice";
import logo from "../images/fifalogo.png"
import {toast} from "react-toastify";
import { useNavigate } from 'react-router-dom';

import Teams from './Teams';
const Home = () => {
  const auth = useSelector((state) => state.auth);
  const dispatch= useDispatch()
  const navigate=useNavigate();

  useEffect(() => {
    if(!auth?._id){
       navigate('/')
    }
   
   }, [auth?._id,navigate])
  return (

    <div>
      <div className="nav">
        <img src={logo} alt="logo" />
        <div  onClick={()=>{
        dispatch(logoutUser(null));
       }}><BsBoxArrowInLeft /></div>
      </div>
       <Teams/>
    </div>
   

  )
}

export default Home