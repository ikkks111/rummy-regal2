import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
        <a href='/'>
          <Image src='/img/logo.webp' alt='Rummy mate online game' width={100} height={100} />
        </a>
      </div>
      <ul className="sidebar-menu">
        <li className='menu-item'><Link href="/">Home</Link></li>
        <li className='menu-item'><Link href="/about">About Us</Link></li>
        <li className='menu-item'><Link href="/contact-us">Contact us</Link></li>
      </ul>
      {/* Uncomment if needed in the future */}
      {/* <div className='btn-group'>
        <a href="https://t.me/Rummy_family"><SubscribeBtn /></a>
        <a href="https://royally.vip/"><OfficialSiteBtn /></a>
      </div> */}
    </div>
  );
};

export default Navbar;
