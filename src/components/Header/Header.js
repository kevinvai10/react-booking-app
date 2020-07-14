import React from 'react';
import './Header.scss';

const Header = () => (
    <header classNameName="header">
        <img src="img/logo.png" alt="trillo logo" className="logo" />
        <form action="#" className="search">
            <input type="text" className="search__input" placeholder="search hotels" />
            <button className="search__button">
                some icon
            </button>
        </form>

        <nav className="user-nav">
            <div className="user-nav__icon-box">
                some icon
            </div>
            <div className="user-nav__icon-box">
                some icon
            </div>
            <div className="user-nav__user">
                <img src="img/user-1.jpg" alt="User" className="user-nav__user-photo" />
                <span className="user-nav__user-name">Kevin</span>
            </div>
        </nav>
    </header>
);

export default Header;