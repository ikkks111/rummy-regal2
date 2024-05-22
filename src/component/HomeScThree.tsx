import { Box, SimpleGrid, GridItem, Text, Heading, Button } from '@chakra-ui/react'
import Image from 'next/image';
import React from 'react'
import Slider from "react-slick";

export default function HomeScThree() {
    const settings = {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 3,
        speed: 500,
        cssEase: 'linear',
        dots: true,
        arrows: false,

        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                initialSlide: 1
              }
            },
        ]
    };
    return (
        <>
            <Box className='sc-three'>
                <Box className='threInnr'>
                    <Box className='scthre_body'>
                        <SimpleGrid columns={12} columnGap={4} rowGap={4}>
                            <GridItem colSpan={[12, 12, 5, 5, 3]} className=' '>
                                <Box className='big_bons'>
                                    <img src='/img/big_bonuses_bg.webp' alt='Rummy mate online game' className='big_bonuses_bg' />
                                    <Box className='big_bonsInnr'>
                                        <img src='/img/flash_img.webp' alt='Rummy mate online game' className='flash_img'/>
                                        <Heading as="h2" className='def_h2_Scthrre'>Big Bonuses</Heading>
                                        <Text className='def_p_Scthrre'>
                                            We have prepared a lot of welcome bonuses, first deposit bonuses and agency bonuses. You can 
                                            use your skills and wisdom to win huge amounts of real money in every game.
                                        </Text>
                                    </Box>
                                </Box>
                            </GridItem>
                            <GridItem colSpan={[12, 12, 7, 7, 6]} className=''>
                                <SimpleGrid columns={12} columnGap={[4]} rowGap={4}>
                                    <GridItem colSpan={[12, 12, 12, 12]} className=''>
                                        <Box className='inst_wdrollBG'>
                                            <img src='/img/Instant_withdrawal_bg.webp' alt='Rummy mate online game' className='Instant_withdrawal_bg'/>
                                            <Box className='inst_innr'>
                                                <img src='/img/money-send.webp' alt='Rummy mate online game' className='flash_img'/>
                                                <Box>
                                                    <Heading as="h2" className='def_h2_Scthrre'>Instant withdrawal</Heading>
                                                    <Text className='def_p_Scthrre'>Withdrawal is fast and the experience is smooth. The joy of victory, don’t wait.</Text>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </GridItem>
                                    <GridItem colSpan={[12, 12, 12, 12]} className=''>
                                        <Box className='inst_wdrollBG'>
                                            <img src='/img/total_safety_bg.webp' alt='Rummy mate online game' className='Instant_withdrawal_bg'/>
                                            <Box className='inst_innr'>
                                                <img src='/img/verify.webp' alt='Rummy mate online game' className='flash_img'/>
                                                <Box>
                                                    <Heading as="h2" className='def_h2_Scthrre'>Total safety</Heading>
                                                    <Text className='def_p_Scthrre'>Absolutely safe, feel free to play. We are committed to providing you with a safe gaming environment.</Text>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </GridItem>
                                </SimpleGrid>
                            </GridItem>
                        </SimpleGrid>
                    </Box>
                </Box>
                <Box className='mage-slidr'>
                <Box className='slidrHed'>
                    <Heading as="h1">Our Games</Heading>
                    <Text>From color to design, every detail is carefully crafted to bring you the ultimate visual enjoyment, allowing you to enjoy beauty while getting bonuses.</Text>
                </Box>
                <Box className='slidr-main'>
                    <Slider {...settings}>
                        <div className='slidr-items'>
                            <img src='/img/slider_img01.webp' alt='Rummy mate online game' className='big_img_slider'/>
                        </div>
                        <div className='slidr-items'>
                            <img src='/img/slider_img02.webp' alt='Rummy mate online game' className='big_img_slider'/>
                        </div>
                        <div className='slidr-items'>
                            <img src='/img/slider_img03.webp' alt='Rummy mate online game' className='big_img_slider'/>
                        </div>
                         <div className='slidr-items'>
                            <img src='/img/lastpic.webp' alt='Rummy mate online game' className='big_img_slider'/>
                        </div>
                    </Slider>
                </Box>
                <Box className='last-btn-pernt' style={{ display: 'flex', justifyContent: 'center' }}>
    <a href="https://xjpossmm02.ccverdcfm.com/RummyMateAPK/Rummy_Mate-channel-40784520.apk">
        <Button>
            <span>See all Game</span>
            {/* <img src='/img/see_all_game.webp' alt='Rummy mate online game' /> */}
            <Image src='/img/see_all_game.webp' alt='Rummy mate online game' width={30} height={30} />
        </Button>
    </a>
</Box>

            </Box>
            </Box>
            
        </>
    )
}
