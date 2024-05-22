import Head from "next/head";
import Image from "next/image";
import Script from "next/script";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { Box } from "@chakra-ui/react";
import HomeScOne from "@/component/HomeScOne";
import HomeScTwo from "@/component/HomeScTwo";
import HomeScThree from "@/component/HomeScThree";
import HomeScFive from "@/component/HomeScFive";
import HomeScSix from "@/component/HomeScSix";
import Footer from "@/elements/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Real Cash Rummy mate app download in India - Get Free Bonus</title>
        <meta name="description" content="Play rummy for real cash on Rummy Mate, India's most trusted app. Download now, Get a free bonus and start winning big. Safe & legal gameplay." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://rummy-mate.vip/"></link>
        <meta name="google-site-verification" content="kjxNyU54k87_303bKylUYY0ky18xGqKb1ME0PRdcZ7U" />
        <link rel="icon" href="/Ficon.jpg" />
        <Script async src="https://www.googletagmanager.com/gtag/js?id=G-W4YQJBTLF2"></Script>
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', 'G-W4YQJBTLF2');
        `}
      </Script>

      </Head>
      <Box className="">
        <HomeScOne />
        <HomeScTwo />
        <HomeScThree />
        <HomeScFive />
        <HomeScSix />
      <Footer/>
      </Box>
    </>
  );
}
