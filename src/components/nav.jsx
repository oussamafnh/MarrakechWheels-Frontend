import React from 'react';
import "../style/nav.css";
import { Darklogo } from '../asset/dark_logo';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';



const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const isMobile = useMediaQuery({ maxWidth: 767 });
    return (
        <>
            <div className="navbar">
                <div className="brand">
                    <a href="/" className="logo">
                        <Darklogo />
                    </a>
                </div>

                <div className="menu" style={{ display: isMobile ? 'none' : 'block' }}>
                    <ul>
                        <li>
                            <a href="/" className="nav-link">
                                CARS
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav-link">
                                AGENCIES
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav-link">
                                ABOUT US
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav-link">
                                THE CITY
                            </a>
                        </li>
                    </ul>
                </div>

                <div className="authentication" style={{ display: isMobile ? 'none' : 'block' }}>
                    <ul>
                        <li>
                            <a href="/" className="nav-link">
                                LOGIN
                            </a>
                        </li>
                        <li>
                            <a href="/" className="nav-link">
                                SIGN UP
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="burgerdiv" style={{ display: isMobile ? 'block' : 'none' }}>
                    <label className="burger">
                        <input type="checkbox" onClick={toggleMenu} id="burger"></input>
                        <span></span>
                        <span></span>
                        <span></span>
                    </label>

                </div>

            </div>
            <AnimatePresence>
                {isMobile && isMenuOpen && (

                    < motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: '100vh' }}
                        exit={{ opacity: 0, height: 0 }}
                    >
                        <ul className='menu'>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <a href="/" className="nav-link">
                                    CARS
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <a href="/" className="nav-link">
                                    AGENCIES
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <a href="/" className="nav-link">
                                    ABOUT US
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <a href="/" className="nav-link">
                                    THE CITY
                                </a>
                            </motion.li>
                        </ul>

                        <ul className='auth'>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <a href="/" className="nav-link">
                                    LOGIN
                                </a>
                            </motion.li>
                            <motion.li
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <a href="/" className="nav-link">
                                    SIGN UP
                                </a>
                            </motion.li>
                        </ul>

                    </motion.div >
                )}
            </AnimatePresence >
        </>
    );
};





export default Nav