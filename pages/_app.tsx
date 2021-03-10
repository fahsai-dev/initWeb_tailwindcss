import '../styles/globals.css';
import '../styles/fontface.css';
import type { AppProps } from 'next/app';
import React from "react";
import Head from "next/head";
import { appStoreContext } from 'RootStore';
import { initI18nConfiguration } from '../utils/i18n';

initI18nConfiguration();

function MyApp({ Component, pageProps }: AppProps) {
  const appStore = React.useContext(appStoreContext);

  React.useEffect(() => {
    appStore.initAppLanguage()
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>MungMee</title>
        <link rel="icon" href="/assets/vectors/favicon.ico" />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  )
}

export default MyApp
