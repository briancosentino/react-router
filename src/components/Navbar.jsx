import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='flex justify-between px-8 py-4 bg-stone-100 items-center'>
            <div>Logo</div>
            <div className=''>
                <ul className='flex gap-4  items-center'>
                    <li className='cursor-pointer '><Link to={'/'}>Home</Link></li>
                    <li className='cursor-pointer '><Link to={'/chi-siamo'}>Chi siamo</Link></li>
                    <li className='cursor-pointer '><Link to={'/posts'}>Post</Link></li>
                </ul>
            </div>

        </div>
    )
}

export default Navbar
