import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div className='text-center py-16'>
            <h1 className='w-[35%] m-auto text-4xl'>Scopri i Nostri Articoli Migliori</h1>
            <button className='py-1.5 px-4 mt-8 rounded-full text-white bg-blue-500'><Link to={'/posts'}>Scopri di più</Link> </button>

        </div>
    )
}

export default Header
