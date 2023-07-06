import { MetaHTMLAttributes } from "react";
import Head from "next/head";

export default function BasicPageTop() {
  return (
    <>
      <Head>
        <meta property="og:image" content="https://imgur.com/2oR6Isd" />
        <meta property="og:title" content="Yeagle's Bagels" />

        <link rel="icon" href="/bagel_logo.png" />
        <meta charSet="utf-8" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <title>Alex Yeagle</title>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </Head>
    </>
  );
}
