import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Text, Button, Heading, Container } from "@chakra-ui/react";


function Slidersec() {
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    // arrows: false,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: false,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1

        }
      }
    ]
  };
  return (
    <>
     
        <div className="slider-container">
          <Slider {...settings} className="slider_bx">
            <div>
              <Box className="">
                <Box className='faq_grid_box'>
                  <img src="img/faq_grid_ic_01.svg" alt="" />
                  <Heading as={'h3'}>How to register a RummyRegal account?</Heading>
                  <Text>You can easily register an account, just click the download button, after downloading our app, register with your mobile number and start playing games</Text>
                </Box>
                <Box className='faq_grid_box'>
                  <img src="img/faq_grid_ic_04.svg" alt="" />
                  <Heading as={'h3'}>What should I do if I have a problem with the game?</Heading>
                  <Text>If you encounter any issues while using RummyRegal, you can always contact our customer support team. We offer 24/7 technical support via email, phone or live chat.</Text>
                </Box>
              </Box>
            </div>
            <div>
              <Box className='faq_grid_box'>
                <img src="img/faq_grid_ic_02.svg" alt="" />
                <Heading as={'h3'}>Is it legal to play RummyRegal in India?</Heading>
                <Text>In India, playing skill games like RummyRegal is completely legal in most states, but some states like Andhra Pradesh and Telangana ban all forms of skill games.</Text>
              </Box>
              <Box className='faq_grid_box'>
                <img src="img/faq_grid_ic_05.svg" alt="" />
                <Heading as={'h3'}>Is my personal information safe?</Heading>
                <Text> At RummyRegal, we use advanced encryption technology and follow strict data protection regulations to ensure that your personal information is safe and you can play with confidence.</Text>
              </Box>
            </div>
            <div>
              <Box className='faq_grid_box'>
                <img src="img/faq_grid_ic_03.svg" alt="" />
                <Heading as={'h3'}>How does RummyRegal ensure game fairness?</Heading>
                <Text> We are committed to providing a fair gaming environment. We use an internationally certified random number generator to ensure the randomness of game results, and we are responsible for every user.</Text>
              </Box>
              <Box className='faq_grid_box'>
                  <img src="img/faq_grid_ic_06.svg" alt="" />
                  <Heading as={'h3'}>Can you really make money playing RummyRegal?</Heading>
                  <Text> The possibility of winning money depends on the individual's skill and the game situation. Players are advised to play responsibly and be aware of the risks of loss that may come with gambling.</Text>
                </Box>
            </div>
          </Slider>
        </div>
    </>
  );
}

export default Slidersec;
