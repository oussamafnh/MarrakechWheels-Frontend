import React from 'react';
import "../style/nav.css";
import { Darklogo } from '../asset/dark_logo';

const Nav = () => {
     return (
        <div className="navbar">
            <div className="brand">
                <a href="/" className='logo'>
                    <Darklogo />
                </a>
            </div>
            <div className="menu">
                <ul>
                    <li> <a href="#" className="nav-link"> CARS </a> </li>
                    <li> <a href="#" className="nav-link"> AGENCIES </a> </li>
                    <li> <a href="#" className="nav-link"> ABOUT US </a> </li>
                    <li> <a href="#" className="nav-link"> THE CITY </a> </li>
                </ul>
            </div>
            <div className="authentication">
                <ul>
                    <li><a href="#"> LOGIN </a></li>
                    <li><a href="#"> SIGN UP </a></li>
                </ul>

            </div>
        </div>
    )
}



export default Nav