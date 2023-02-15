import type { AppProps } from 'next/app';
import Head from 'next/head';
import React from 'react';
import { ThemeProvider } from '@mui/material';
import '../styles/colors.css';
import { materialUITheme } from '../styles/materialUI';
import { ParkingLotProvider } from '@/context/parkingLot';
import { GlobalStyle } from '@/styles/global';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={materialUITheme}>
        <ParkingLotProvider {...pageProps}>
          <Head>
            <title>Parking Lot</title>
            <meta name="description" content="Parking lot app" />
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
          </Head>
          <div className="content-bg">
            <Component {...pageProps} />
          </div>
        </ParkingLotProvider>
      </ThemeProvider>
    </>
  );
}
