import React from 'react'
import { Box, Text, Button, Container, SimpleGrid, GridItem, Heading } from "@chakra-ui/react";
import Slidersec from '../Slidersec';


export default function Secone() {
  return (
    <>

      <Box className="">
        <Box className='sec_one_bg_box'>
          <Container maxW='1750'>
            <Box className='sec_one_contin'>
              <a href="" className='play_ic_a'>
                <img src="img/play_ic.svg" alt="" className='play_ic' />
              </a>
              <Box className='head_bx'>
                <a href="#">
                  <img src="img/logo.png" alt="" className='logo' />
                </a>
              </Box>
              <Box className='sec_01_p_btn_img'>
                <Box className='sec_bg_box'>
                  <img src="img/sec_logo_img.png" alt="" className='sec_logo_img' />
                </Box>
                <Text>Join RummyRegal and experience exciting real rummy games. Not only do we have exciting dragon and tiger games, but we also have sports betting and a dozen other games. Come and claim your treasures and wealth!</Text>
                <a className='btn_bg' href='https://xjpklccossyd06.zxcvrfrec.com/RummyRegal-apk/RummyRegal-channel-31295867.apk'>
                  <img src="img/btn_bg.png" alt="" className='btn_bg' />
                  <span>
                    Start your journey
                  </span>
                </a>
              </Box>
            </Box>
          </Container>
        </Box>
        <Box className='top_gam_sc'>
          {/* <img src="img/top_game_bg.png" alt="" className='top_game_bg' /> */}
          <a href="" className='se_gme_a'>See All Games<img src="img/arow.svg" alt="" className='arow' /></a>
          <img src="img/big_mob_img.png" alt="" className='big_mob_img' />
        </Box>

      <Box className='griDtn_bg_bx'>
          <Box className='our_gare_se'>
            <Container maxW='1750'>
              <Box className='our_gare_se_ph'>
                <Heading as={'h3'}>OUR GAMES</Heading>
                <Text>opJoin RummyRegal and experience exciting real rummy games. Not only do we have exciting dragon and tiger games, but we also have sports betting and a dozen other games. Come and claim your treasures and wealth!</Text>
              </Box>
              <SimpleGrid columns={12} columnGap={3} rowGap={3}>
                <GridItem colSpan={[12, 12, 6, 4]}>
                  <img src="img/our_gare_01.png" alt="" className='our_gare_01' />
                </GridItem>
                <GridItem colSpan={[12, 12, 6, 4]}>
                  <img src="img/our_gare_02.png" alt="" className='our_gare_01' />
                </GridItem>
                <GridItem colSpan={[12, 12, 6, 4]}>
                  <img src="img/our_gare_03.png" alt="" className='our_gare_01' />
                </GridItem>
                <GridItem colSpan={[12, 12, 6, 4]}>
                  <img src="img/our_gare_04.png" alt="" className='our_gare_01 d_non_grid_img' />
                </GridItem>
                <GridItem colSpan={[12, 12, 6, 4]}>
                  <img src="img/our_gare_05.png" alt="" className='our_gare_01 d_non_grid_img' />
                </GridItem>
                <GridItem colSpan={[12, 12, 6, 4]}>
                  <img src="img/our_gare_06.png" alt="" className='our_gare_01 d_non_grid_img' />
                </GridItem>
              </SimpleGrid>
              <a href="" className='se_gme_a se_gme_a_v2 '>See All Games<img src="img/arow.svg" alt="" className='arow' /></a>
            </Container>
          </Box>

          <Box className='benefit_min'>
            <img src="img/benefit_img_bg.png" alt="" className='benefit_img_bg'/>
            <Box className='benefit_img_grid_min benefit_img_grid_min_01'>
              <img src="img/benefit_img_01.png" alt="" className='benefit_img_01'/>
              <Box className='benefit_contin'>
                <Heading as={'h3'}>Big Bonuses</Heading>
                <Text>Join RummyRegal and experience exciting real rummy games. Not only do we have exciting dragon and tiger games, but we also have sports betting and a dozen other games. Come and claim your treasures and wealth!</Text>
              </Box>
            </Box>
            <Box className='benefit_img_grid_min benefit_img_grid_min_02'>
              <img src="img/benefit_img_02.png" alt="" className='benefit_img_01'/>
              <Box className='benefit_contin'>
                <Heading as={'h3'}>Instant withdrawal</Heading>
                <Text>Our payment system is designed to process withdrawal requests quickly, with most withdrawals completed within minutes, giving players quick access to their funds.</Text>
              </Box>
            </Box>
            <Box className='benefit_img_grid_min benefit_img_grid_min_03'>
              <img src="img/benefit_img_03.png" alt="" className='benefit_img_01'/>
              <Box className='benefit_contin'>
                <Heading as={'h3'}>Total safety</Heading>
                <Text>RummyRegal provides players with a safe and reliable online gaming environment by using advanced encryption technology, strict privacy policies and regular security reviews</Text>
              </Box>
            </Box>
          </Box>

          <Box className='faq_min'>
            <Container maxW='1750px'>
              <Box className='faq_had_contin'>
                <span className='faq'>FAQs</span>
                <Heading as={'h4'}>Frequent ask qustions</Heading>
                <Text>Have questions? We're here to help.</Text>
              </Box>
              <Slidersec />
              <Box className='still_qution_bx'>
                <Box>
                  <Heading as={'h2'}>Still have questions?</Heading>
                  <Text>Can't find the answer you're looking for? Please chat to our friendly team.</Text>
                </Box>
                <a href='https://xjpklccossyd06.zxcvrfrec.com/RummyRegal-apk/RummyRegal-channel-31295867.apk' className='btn_bg btn_bg_v2'>
                  <img src="img/btn_bg.png" alt="" className='btn_bg' />
                  <span>
                    Get in touch
                  </span>
                </a>
              </Box>
            </Container>
          </Box>
        </Box>
        <Box className='footer_min'>
          <Container maxW='1750'>
            <Box className='foot_top_img_p'>
              <img src="img/foot_logo.png" alt="" />
              <Text>100% SAFE Protected connection and encrypted data.</Text>
            </Box>
            <Box className='fot_comtin_bx'>
              <Heading as={'h3'}>Responsible Gambling:</Heading>
              <Text>Players must be at least 18 years old to engage in real money rummy. This game has the potential to become addictive and pose financial risks. Please gamble responsibly.</Text>
              <Heading className='for_mrg' as={'h3'}>100% Legal:</Heading>
              <Text>Rummy has been legally recognized as a game of skill. As determined by the Supreme Court of India in 1968, playing rummy, whether for free or for cash, is completely legal in most regions of India.</Text>
              <span>Copyright © 2022 RummyRegal® All Rights Reserved</span>
            </Box>
          </Container>
        </Box>
      </Box>

    </>
  )
}
