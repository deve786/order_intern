import React from 'react'
import { Link } from 'react-router-dom'

function Sidebar() {
    return (
        <div className='flex flex-col items-start justify-between rounded-md h-[80vh] gap-5 w-[25%] bg-blue-100  p-3'>
            <div className='flex gap-2 flex-col'>
                <div className='flex gap-2'>
                    <img src="./img.jpeg" className='w-10  rounded-md' alt="" />
                    <p className='font-semibold'>John Doe</p>
                </div>
                <ul className='flex justify-between gap-5 flex-col mt-5'>
                    <div className='flex gap-5 flex-col'>
                        <Link to={"general"}><div className='flex items-center gap-2'><i class="fa-solid fa-border-none"></i><li className='cursor-pointer '>General</li></div></Link>
                        <Link to={'password'}><div  className='flex items-center gap-2' ><li class="fa-solid fa-lock"></li><li>Password</li></div></Link>
                        <Link to={'invitaion'}><div  className='flex items-center gap-2'><i class="fa-regular fa-envelope"></i><li>Invitation</li></div></Link>
                        <Link to={'bill'}><div  className='flex items-center gap-2'><i class="fa-solid fa-money-bills"></i><li>Billing</li></div></Link>
                        <Link to={'/'}><div  className='flex items-center gap-2'><i class="fa-solid fa-border-none"></i><li>Order</li></div></Link>
                    </div>
                    
                </ul>
            </div>
            <ul><div className='flex items-center gap-2 '><i class="fa-solid fa-right-from-bracket"></i><li>Logout</li></div></ul>
        </div>
    )
}

export default Sidebar