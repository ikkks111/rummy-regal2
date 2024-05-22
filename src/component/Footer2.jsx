import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import insta from "../../public/img/instagram.webp";
import facebook from "../../public/img/facebook.webp";
import telegram from "../../public/img/telegram.webp";

const Footer2 = () => {
    return (
        <div className='footer-container'>
            <div className='social-icons'>
                <a href="https://www.instagram.com/royallyrummyvip/" target="_blank" rel="noopener noreferrer">
                    <Image src={insta} alt="Instagram icon" width={32} height={32} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61557381221402" target="_blank" rel="noopener noreferrer">
                    <Image src={facebook} alt="Facebook icon" width={32} height={32} />
                </a>
                <a href="https://t.me/Rummy_family" target="_blank" rel="noopener noreferrer">
                    <Image src={telegram} alt="Telegram icon" width={32} height={32} />
                </a>
            </div>
            <div className='menu-links'>
                <p>
                    {/* <Link href="/">Home</Link> | */}
                    <Link href="/about">About Us</Link>&nbsp;|&nbsp;
                    <Link href="/contact-us">Contact Us</Link>&nbsp;|&nbsp;
                    <Link href="/disclaimer">Disclaimer</Link>&nbsp;|&nbsp;
                    {/* <Link href="/refund-policy">Refund Policy</Link>&nbsp;|&nbsp; */}
                    <Link href="/privacy-policy">Privacy Policy</Link>
                </p>
            </div>
        </div>
    );
};

export default Footer2;
