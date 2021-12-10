import Head from "next/head";
import type { AppProps } from "next/app";
import { createGlobalStyle, ThemeProvider } from "styled-components";
import reset from "styled-reset";

import { dark } from "@src/common/themes";
import { AppContextProvider } from "@src/common/contexts/app";
import PostService from "@src/common/services/post.service";

const GlobalStyle = createGlobalStyle`
  ${reset}
  html, body {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Spoqa Han Sans Neo', 'sans-serif';
  }
  body {
    font-size: 1rem;
    width: 100%;
  }
  a {
    text-decoration: none;
    color: inherit;
  }
  input {
    -webkit-appearance: none;
    -webkit-border-radius: 0;
  }
  ul, li {
    margin: 0;
    padding: 0;
    list-style-type: none; 
  }
  *,
  ::after,
  ::before {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
`;

export type MyAppProps = AppProps & {
  postPaths: string[];
};

function MyApp({ Component, pageProps, postPaths }: MyAppProps) {
  return (
    <>
      <Head>
        <title>{`KSCode | Seoyoung's Tech Blog`}</title>
        <meta name="description" content="Ko Seoyoung Tech Blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ThemeProvider theme={{ colors: dark }}>
        <AppContextProvider postPaths={postPaths}>
          <Component {...pageProps} />
        </AppContextProvider>
      </ThemeProvider>
    </>
  );
}

MyApp.getInitialProps = async () => {
  const postPaths: string[] = await PostService.getPostPaths();
  return {
    postPaths,
  };
};

export default MyApp;
