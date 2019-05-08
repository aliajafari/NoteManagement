import React from 'react'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <h1>Note Management</h1>
            <Link className='create-note' to='/create'>Add Note</Link>
        </header>
    );
}

export default Header;