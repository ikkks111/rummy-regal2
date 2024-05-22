import { Box, Button, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function HomeScTwo() {
    return (
        <>
            <Box className='sc-two'>
                <Heading as="h1">Rummy Mate play online right now</Heading>
                <Text>Don't wait, act now! After downloading the game, it only takes one minute to complete the registration, and the bonuses are unlimited!</Text>
                <Button className='def_bg_btn' as="a" href='https://xjpossmm02.ccverdcfm.com/RummyMateAPK/Rummy_Mate-channel-40784520.apk' target='_blank'>
                    <img src='/img/def_btn_bg.webp' alt='Rummy mate online game' className='def_btn_bg'/>
                    <Box className='txt_set'>
                        <span>Start your Explore</span>
                        <Image src='/img/dowlod_ic.webp' alt='Rummy mate online game' width={20} height={20} />
                    </Box>
                </Button>
                <img src='/img/mobil_img.webp' alt='Rummy mate online game' />
            </Box>
        </>
    )
}
