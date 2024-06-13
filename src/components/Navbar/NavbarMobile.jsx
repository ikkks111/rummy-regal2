"use client";
import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu, FiX } from "react-icons/fi";

const NavbarMobile = () => {
    const [show, setShow] = useState(false);

    const handleToggle = () => setShow(!show);

    return (
        <>
            <div className="navbar-mobile-container">
                <div className="menu-icon">
                    <FiMenu onClick={handleToggle} className="cursor-pointer text-white h-10 w-10" />
                </div>
                <div className="logo-container">
                    <Link href="/" legacyBehavior>
                        
                            <Image src='/img/logo.png' alt='Rummy mate online game' width={200} height={50}  />
                        
                    </Link>
                </div>
            </div>
            {show && (
                <div className="offcanvas">
                    <div className="offcanvas-header">
                        <FiX onClick={handleToggle} className="cursor-pointer text-black h-10 w-10" />
                    </div>
                    <ul className="sidebar-menu">
                        <li className="menu-item">
                            <Link href="/" legacyBehavior>
                                <a>Home</a>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link href="/about-us" legacyBehavior>
                                <a>About Us</a>
                            </Link>
                        </li>
                        <li className="menu-item">
                            <Link href="/contact-us" legacyBehavior>
                                <a>Contact us</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            )}
        </>
    );
};

export default NavbarMobile;
