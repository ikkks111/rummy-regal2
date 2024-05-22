import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from "react-icons/fi";
import Offcanvas from 'react-bootstrap/Offcanvas';


const NavbarMobile = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <div className="navbar-mobile-container">
                <div className="menu-icon">
                    <FiMenu onClick={handleShow} className="cursor-pointer text-white h-10 w-10" />
                </div>
                <div className="logo-container">
                <a href='/'>
          <Image src='/img/logo.webp' alt='Rummy mate online game' width={100} height={100} />
        </a>
        </div>
                    <Offcanvas show={show} onHide={handleClose} placement="top" className="offcanvas">
                    <Offcanvas.Header closeButton className="offcanvas-header">
                    </Offcanvas.Header>
                    <Offcanvas.Body>
                        <ul className="sidebar-menu">
                            <li className="menu-item">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="menu-item">
                                <Link href="/about-us">About Us</Link>
                            </li>
                            <li className="menu-item">
                                <Link href="/contact-us">Contact us</Link>
                            </li>
                        </ul>
                        
                    </Offcanvas.Body>
                </Offcanvas>
            </div>
        </>
    );
};

export default NavbarMobile;
