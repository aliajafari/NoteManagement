import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Note Management</h1>
            <ul className='top-menu'>
                <li><Link to='/'>Home</Link></li>
                <li className='button green'><Link to='/create'>Add Note</Link></li>
            </ul>
        </header>
    );
}

export default Header;