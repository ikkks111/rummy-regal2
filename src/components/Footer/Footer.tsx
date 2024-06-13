import { Box, Text, Button, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import insta from "../../images/instagram.webp";
import facebook from "../../images/facebook.webp";
import telegram from "../../images/telegram.webp";

export default function Footer() {
    return (
        <div className='footer-container'>
            <div className='social-icons'>
                <a href="https://www.instagram.com/rummymate11/" target="_blank" rel="noopener noreferrer">
                    <Image src={insta} alt="Instagram icon" width={45} height={45} />
                </a>
                <a href="https://www.facebook.com/profile.php?id=61557381221402" target="_blank" rel="noopener noreferrer">
                    <Image src={facebook} alt="Facebook icon" width={45} height={45} />
                </a>
                <a href="https://t.me/Rummy_family" target="_blank" rel="noopener noreferrer">
                    <Image src={telegram} alt="Telegram icon" width={45} height={45} />
                </a>
            </div>
            <div className='menu-links'>
                <p>
                    {/* <Link href="/">Home</Link> | */}
                    <Link href="/about-us">About Us</Link>|&nbsp;
                    <Link href="/contact-us">Contact Us</Link>|&nbsp;
                    <Link href="/disclaimer">Disclaimer</Link>|&nbsp;
                    <Link href="/privacy-policy">Privacy Policy</Link>|&nbsp;
                    <Link href="/terms-and-conditions">Terms</Link>
                </p>
            </div>
        </div>
    );
}
