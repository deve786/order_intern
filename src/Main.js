import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Sidebar from './Sidebar'
import Order from './Order'

function Main() {

    

    return (
        <div className='flex gap-2 shadow-md bg-white w-[95%] h-[80vh] rounded-md'>
            
            <Order/>
            
        </div>
    )
}

export default Main