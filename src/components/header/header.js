import React from 'react';
import './header.css'


const Header = () => {
    return (
        <div className='header-block'>
            <h3 className='header-title'>
                <a href="24">
                Game of Thrones DB
                </a>
            </h3>
            <ul className='header-links'>
                <li>
                    <a href="23">Characters</a>
                </li>
                <li>
                    <a href="23">Houses</a>
                </li>
                <li>
                    <a href="34">Books</a>   
                </li>
            </ul>
        </div>
    );
};

export default Header;