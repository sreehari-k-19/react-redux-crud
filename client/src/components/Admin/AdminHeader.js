import React from 'react'
import { BsBoxArrowInLeft } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { logoutAdmin } from '../../slice/Adminauthslice';
const AdminHeader = () => {
    const dispatch = useDispatch()
    return (
        <div className='adminheader'>
            <h2>Admin Pannel</h2>
            <div onClick={() => {
                dispatch(logoutAdmin(null));
            }}><BsBoxArrowInLeft /></div>
        </div>
    )
}

export default AdminHeader