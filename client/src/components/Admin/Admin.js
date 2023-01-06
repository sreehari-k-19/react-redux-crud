import React, { useEffect, useState } from 'react';
import Spinner from 'react-spinner-material';
import { BsFillTrashFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { deleteUser, getDetails, updateUser } from '../../slice/Adminslice';
import AdminHeader from './AdminHeader';
import { useNavigate } from 'react-router-dom';

const Admin = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate();
    const userdetails = useSelector((state) => state.details);
    console.log(userdetails, "susrss")
    const auth = useSelector((state) => state.adminauth);
    const { details } = userdetails;
    console.log('details', details)

    useEffect(() => {
        dispatch(getDetails());
    }, [dispatch, userdetails.deleteUserStatus])


    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }
    const updateuser = (id,name,email) => {
        // dispatch(updateUser(id))

    }
    useEffect(() => {
        if (!auth?.email) {
            navigate('/admin/login')
        }

    }, [auth?.email, navigate])

    const [user, Setuser] = useState({
        name: '',
        email: '',
        id: ''
    })
    return (
        <>
            <AdminHeader />
            <div className='userdetails'>
                {userdetails.getDetailsStatus === "pending" ? <Spinner radius={100} color={"#a20c34"} stroke={2} visible={true} /> :
                    <table className="styled-table">
                        <thead>
                            <tr>
                                <th>Name</th>
                                <th>Email</th>

                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {details.map((user) => (
                                <tr>
                                    <td>{user?.name}</td>
                                    <td>{user?.email}</td>
                                    <td onClick={() => handleDelete(user._id)}><BsFillTrashFill /></td>
                                    <td onClick={() => updateuser(user._id,user.name,user.email)}>edit</td>
                                </tr>
                            ))}



                        </tbody>
                    </table>}

            </div>
        </>
    )
}

export default Admin