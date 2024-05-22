import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import Slider from "react-slick";
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon,
} from '@chakra-ui/react'
import Image from 'next/image';

export default function HomeScSix() {
    const settings = {
        // className: "center",
        // centerMode: true,
        infinite: true,
        centerPadding: "10px",
        slidesToShow: 1,
        speed: 500,
        cssEase: 'linear',
        dots: true,
        arrows: false,

    };
    return (
        <>
            <Box className='sc-six'>
                <Box className='slidTwo_hed'>
                    <Heading as="h3">What our users say</Heading>
                    <Text>Listen to what users have to say​</Text>
                </Box>
                <Box className='slidr-main'>
                    <Slider {...settings}>
                        <div className='slidr-items'>
                            <Box className='sldrInnr'>
                                {/* <img src='/img/up_coma.webp' alt='Rummy mate online game' className='up_coma' /> */}
                                <Image src='/img/up_coma.webp' alt='Rummy mate online game' className='up_coma' width={20} height={20}/>
                                <Text className='pera_graf'>
                                    At RummyMate, not only is the game itself exciting, but the rewards you win are also very generous. The platform often offers various activities
                                    with generous rewards, making every victory feel sweeter. These rewards not only add to the fun of the game, but also make my gaming time more valuable.
                                </Text>
                                {/* <img src='/img/down_coma.web' alt='Rummy mate online game' className='down_coma' /> */}
                                <Image src='/img/down_coma.webp' alt='Rummy mate online game' className='down_coma' width={20} height={20}/>
                                <Box className='user_box'>
                                    {/* <img src='/img/user_photo.webp' alt='Rummy mate online game' className='user_photo' /> */}
                                    <Image src='/img/user_photo.webp' alt='Rummy mate online game' className='user_photo' width={55} height={55}/>
                                    <Box>
                                        <Heading as="h6">Neha Sharm</Heading>
                                        <Text>Freelancer</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                        <div className='slidr-items'>
                            <Box className='sldrInnr'>
                                {/* <img src='/img/up_coma.webp' alt='Rummy mate online game' className='up_coma' /> */}
                                <Image src='/img/up_coma.webp' alt='Rummy mate online game' className='up_coma' width={20} height={20}/>
                                <Text className='pera_graf'>
                                Since joining RummyMate, I have been discovering new gaming challenges every day. From dragon-tiger fights to pilots, the variety of games here is diverse and always fresh. This is a platform where you won’t get bored!
                                </Text>
                                {/* <img src='/img/down_coma.webp' alt='Rummy mate online game' className='down_coma' /> */}
                                <Image src='/img/down_coma.webp' alt='Rummy mate online game' className='down_coma' width={20} height={20}/>
                                <Box className='user_box'>
                                <img src='/img/pic01.webp' alt='Rummy mate online game' className='user_photo' style={{ borderRadius: '50%', width: '55px', height: "55px" }} />

                                    <Box>
                                        <Heading as="h6">Rajesh Kumar</Heading>
                                        <Text>College Student</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                        <div className='slidr-items'>
                            <Box className='sldrInnr'>
                                {/* <img src='/img/up_coma.webp' alt='Rummy mate online game' className='up_coma' /> */}
                                <Image src='/img/up_coma.webp' alt='Rummy mate online game' className='up_coma' width={20} height={20}/>
                                <Text className='pera_graf'>
                                RummyMate's instant withdrawal function is so convenient! After winning money, you can see your account balance updated almost immediately. This kind of efficiency and convenience is something I have never experienced on other platforms before.
                                </Text>
                                {/* <img src='/img/down_coma.webp' alt='Rummy mate online game' className='down_coma' /> */}
                                <Image src='/img/down_coma.webp' alt='Rummy mate online game' className='down_coma' width={20} height={20}/>
                                <Box className='user_box'>
                                    <img src='/img/pic02.webp' alt='Rummy mate online game' className='user_photo' style={{ borderRadius: '50%', width: '55px', height: "60px" }} />
                                    <Box>
                                        <Heading as="h6">Suresh Patel</Heading>
                                        <Text>Salesperson</Text>
                                    </Box>
                                </Box>
                            </Box>
                        </div>
                    </Slider>
                </Box>
                <Box className='faq_sc'>
                    <Box className='slidTwo_hed'>
                        <Heading as="h3">Frequent ask qustions</Heading>
                        <Text>Even if these answers don't help you, it doesn't matter, our game has 24/7 customer service</Text>
                    </Box>
                    <Accordion allowToggle className='accodn_main'>
                        <AccordionItem>
                            <div>
                                <AccordionButton>
                                    {/* <img src='/img/plus_ic.webp' alt='Rummy mate online game' className='plus_ic' /> */}
                                    <Image src='/img/plus_ic.webp' alt='Rummy mate online game' className='plus_ic' width={20} height={20}/>
                                    {/* <img src='/img/minus_ic.webp' alt='Rummy mate online game' className='minus_ic' /> */}
                                    <Image src='/img/minus_ic.webp' alt='Rummy mate online game' className='minus_ic' width={20} height={20}/>
                                    <span>Is it legal to play RummyMate in India?</span>
                                </AccordionButton>
                            </div>
                            <AccordionPanel className='accordn_body'>
                                <Text>
                                In India, playing skill-based games like RummyMate is completely legal in most states. However, please note that some states, such as Andhra Pradesh and Telangana, have restrictions on all forms of skill games.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <div>
                                <AccordionButton>
                                    {/* <img src='/img/plus_ic.webp' alt='Rummy mate online game' className='plus_ic' /> */}
                                    <Image src='/img/plus_ic.webp' alt='Rummy mate online game' className='plus_ic' width={20} height={20}/>
                                    {/* <img src='/img/minus_ic.webp' alt='Rummy mate online game' className='minus_ic' /> */}
                                    <Image src='/img/minus_ic.webp' alt='Rummy mate online game' className='minus_ic' width={20} height={20}/>
                                    <span>How does RummyMate ensure game fairness?</span>
                                </AccordionButton>
                            </div>
                            <AccordionPanel className='accordn_body'>
                                <Text>
                                At RummyMate, we are dedicated to maintaining a fair gaming environment. We employ an internationally certified Random Number Generator (RNG) to guarantee the randomness of our game outcomes, ensuring fairness for all users.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <div>
                                <AccordionButton>
                                    {/* <img src='/img/plus_ic.webp' alt='Rummy mate online game' className='plus_ic' /> */}
                                    <Image src='/img/plus_ic.webp' alt='Rummy mate online game' className='plus_ic' width={20} height={20}/>
                                    {/* <img src='/img/minus_ic.webp' alt='Rummy mate online game' className='minus_ic' /> */}
                                    <Image src='/img/minus_ic.webp' alt='Rummy mate online game' className='minus_ic' width={20} height={20}/>
                                    <span>What should I do if I have a problem with the game?</span>
                                </AccordionButton>
                            </div>
                            <AccordionPanel className='accordn_body'>
                                <Text>
                                If you experience any problems while playing on RummyMate, do not hesitate to contact our customer support team. We provide 24/7 assistance through email, phone, or live chat to help resolve any issues you may encounter.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem>
                            <div>
                                <AccordionButton>
                                    {/* <img src='/img/plus_ic.webp' alt='Rummy mate online game' className='plus_ic' /> */}
                                    <Image src='/img/plus_ic.webp' alt='Rummy mate online game' className='plus_ic' width={20} height={20}/>
                                    {/* <img src='/img/minus_ic.webp' alt='Rummy mate online game' className='minus_ic' /> */}
                                    <Image src='/img/minus_ic.webp' alt='Rummy mate online game' className='minus_ic' width={20} height={20}/>
                                    <span>Is my personal information safe?</span>
                                </AccordionButton>
                            </div>
                            <AccordionPanel className='accordn_body'>
                                <Text>
                                Your safety is our priority at RummyMate. We utilize state-of-the-art encryption technologies and adhere to stringent data protection laws to secure your personal information, allowing you to play with peace of mind.

                                </Text>
                            </AccordionPanel>
                        </AccordionItem>

                        <AccordionItem className='bodr_non'>
                            <div>
                                <AccordionButton>
                                    {/* <img src='/img/plus_ic.webp' alt='Rummy mate online game' className='plus_ic' /> */}
                                    <Image src='/img/plus_ic.webp' alt='Rummy mate online game' className='plus_ic' width={20} height={20}/>
                                    {/* <img src='/img/minus_ic.webp' alt='Rummy mate online game' className='minus_ic' /> */}
                                    <Image src='/img/minus_ic.webp' alt='Rummy mate online game' className='minus_ic' width={20} height={20}/>
                                    <span>Can you really make money playing RummyMate?</span>
                                </AccordionButton>
                            </div>
                            <AccordionPanel className='accordn_body'>
                                <Text>
                                While there is a potential to win money playing on RummyMate, outcomes largely depend on each player's skill and the specific game situation. We encourage players to engage responsibly and be mindful of the risks associated with gambling, including the possibility of loss.
                                </Text>
                            </AccordionPanel>
                        </AccordionItem>
                    </Accordion>
                </Box>
            </Box>
        </>
    )
}
