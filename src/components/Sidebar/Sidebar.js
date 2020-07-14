import React from 'react';
import { Link } from 'react-router-dom';

import './Sidebar.scss';

const Sidebar = () => (
    <nav className="sidebar">
        <ul className="side-nav">
            <li className="side-nav__item side-nav__item--active">
                <Link className="side-nav__link" to="/">
                    Hotel
                </Link>
            </li>
            <li className="side-nav__item">
                <Link className="side-nav__link" to="/">
                    Flights
                </Link>
            </li>
            <li className="side-nav__item">
                <Link className="side-nav__link" to="/">
                    Tours
                </Link>
            </li>
        </ul>

        <div className="legal">
            &copy; 2020 by trillo. All rights reserved.
        </div>
    </nav>
);

export default Sidebar;
