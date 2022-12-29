import { MetaHTMLAttributes } from "react"
import Header from "@components/pomodomo/Header"
import Head from 'next/head'
import GenSessionUuid from "@components/DBcomponents/usergen"


export default function BasicPageTop() {
  return (
    <>
      <GenSessionUuid />
      <Head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <title>Alex Yeagle</title>
        <link rel="icon" href="/bagel_logo.png" />
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" />
      </Head>
    </>
  )
}
