import { Box, Text, Button, Heading } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link';
import insta from "../../public/img/instagram.webp";
import facebook from "../../public/img/facebook.webp";
import telegram from "../../public/img/telegram.webp";

export default function Footer() {
  return (
    <>
        <Box className='footer'>
            <Box className='fotinr_up'>
                <a href='/'>
                    <img src='/img/footer_logo.webp' width="284px" height="108px" alt='Rummy mate online game' className='footer_logo' />
                </a>
                <Box className='two_p_in_fotr'>
                    <Text>
                        <span>Responsible Play:</span>{" "}
                        Participants must be 18 years or older to partake in real money rummy games. There is a risk of addiction and financial loss associated with 
                        this game. Players are urged to engage in gambling activities responsibly.
                    </Text>
                    <Text>
                        <span>Legality of Rummy:</span>{" "}
                        Rummy is officially classified as a game of skill. The Supreme Court of India affirmed in 1968 that playing rummy, irrespective of whether 
                        it is for monetary stakes or not, is lawful in many parts of India.
                    </Text>
                </Box>
            </Box>
            <Box className='foter-dwon'>
                <Button className='def_bg_btn' as="a" href='https://xjpossmm02.ccverdcfm.com/RummyMateAPK/Rummy_Mate-channel-40784520.apk' target='_blank'>
                    <img src='/img/def_btn_bg.webp' alt='Rummy mate online game' className='def_btn_bg'/>
                    <Box className='txt_set'>
                        <span>Download App</span>
                        {/* <img src='/img/dowlod_ic.webp' alt='Rummy mate online game' /> */}
                        <Image src='/img/dowlod_ic.webp' alt='Rummy mate online game' width={20} height={20} />
                    </Box>
                </Button>
                <Heading as="h6">100% SAFE Protected connection and encrypted data.</Heading>
                <Text>Copyright © 2024 RummyMate® All Rights Reserved</Text>
                
            </Box>
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
                    <Link  href="/about" style={{ color: 'white' }}>About Us</Link><span style={{ color: 'white' }}>&nbsp;|&nbsp;</span>
                    <Link href="/contact-us" style={{ color: 'white' }}>Contact Us</Link><span style={{ color: 'white' }}>&nbsp;|&nbsp;</span>
                    <Link href="/disclaimer" style={{ color: 'white' }}>Disclaimer</Link><span style={{ color: 'white' }}>&nbsp;|&nbsp;</span>
                    {/* <Link href="/refund-policy">Refund Policy</Link>&nbsp;|&nbsp; */}
                    <Link href="/privacy-policy" style={{ color: 'white' }}>Privacy Policy</Link>
                </p>
            </div>
        </div>
        </Box>
       
    </>
  )
}
