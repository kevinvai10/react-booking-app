import React from 'react';
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';

const Layout = ({ children }) => (
    <div className="container">
        <Header />
        <div className="content">
            <Sidebar />
            {children}
        </div>
    </div>
);

export default Layout;
