import React from 'react';
function Nav() {
    return (
        <nav id="nav-list">
             <div className="logo">
                <h1>Report a Crime</h1>
            </div>
            <div className="nav-bar">
            <li><a href="/">Home</a></li>
            <li><a href="/">Report</a></li>
            <li><a href="#footer">About</a></li>
            </div>
        </nav>
    );
}
export default Nav;