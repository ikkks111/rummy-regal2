import { Box, Button, Heading, Text } from '@chakra-ui/react'
import Image from 'next/image'
import React from 'react'

export default function HomeScFive() {
    
    return (
        <>
            <Box className='sc-five'>
                <img src='/img/sc_five_top_img.webp' alt='Rummy mate online game' className='sc_five_top_img' />
                <img src='/img/sc_five_logo.webp' alt='Rummy mate online game' className='sc_five_logo' />
                <Text>Rummy is a very popular game in India and rummymate provides a platform that enables players to play this traditional game in their own language. 
                    Users only need to download and open it to quickly play the game. We provide a safe gaming environment and transactions and have become one of the most 
                    popular rummy games in India.
                </Text>
                <Button className='def_bg_btn' as="a" href='https://xjpossmm02.ccverdcfm.com/RummyMateAPK/Rummy_Mate-channel-40784520.apk' target='_blank'>
                    <img src='/img/def_btn_bg.webp' alt='Rummy mate online game' className='def_btn_bg'/>
                    <Box className='txt_set'>
                        <span>Download App</span>
                        {/* <img src='/img/dowlod_ic.webp' alt='Rummy mate online game' /> */}
                        <Image src='/img/dowlod_ic.webp' alt='Rummy mate online game' width={20} height={20} />
                    </Box>
                </Button>
                <img src='/img/sc_five_bottom_img.webp' alt='Rummy mate online game' className='sc_five_bottom_img' />
            </Box>
        </>
    )
}
