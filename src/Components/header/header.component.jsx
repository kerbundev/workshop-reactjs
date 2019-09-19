import React from 'react';
import {Link} from 'react-router-dom';
import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <div className='options'>
            <Link className="option" to='/'>Home</Link>
            <Link className="option" to='/contact'>Contact</Link>
            <Link className="option" to='/about'>About</Link>
            <Link className="option" to='/signin'>Sign In</Link>
        </div>
    </div>
    
);

export default Header;