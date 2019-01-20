import React from 'react'
import {Link,NavLink} from 'react-router-dom'
const Nav = () => {
    return (
        <nav>
            <div className="nav-wrapper">
                <div className="container">
                <Link to='/' className="brand-logo">Phantom</Link>
                    <ul id='nav-mobile' className="right hide-on-med-and-down">
                        <li><NavLink to="/About" >About</NavLink></li>
                        <li><NavLink to="/Contact">Contact</NavLink></li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Nav