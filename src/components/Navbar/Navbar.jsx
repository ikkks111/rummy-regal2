import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo-container">
    
        <Link href="/">
          <Image src='/img/logo.png' alt='Rummy mate online game' width={200} height={50} />
          </Link>
       
      </div>
      <ul className="sidebar-menu">
        <li className='menu-item'><Link href="/">Home</Link></li>
        <li className='menu-item'><Link href="/about-us">About Us</Link></li>
        {/* <li className='menu-item'><Link href="/blog">Blog</Link></li> */}
        <li className='menu-item'>Blog</li>
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
