import "@/styles/globals.scss";
import type { AppProps } from "next/app";
import { ChakraProvider } from '@chakra-ui/react'
import Footer from "@/elements/Footer";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
