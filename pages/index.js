import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '@components/Button'
import RouteButton from '@components/RouteButton'
import Input from '@components/Input'
// import { toPath } from 'node_modules/cypress/types/lodash/index'
import { NextResponse, NextRequest } from 'next/server'

import React, { useState, useEffect } from "react";
import Router from 'next/router'

import { useRouter } from 'next/router'

// const Post = () => {
//   const router = useRouter()
//   const { pid } = router.query

//   return <p>Post: {pid}</p>
// }

// export default Post

// useEffect = () => {
//    const {pathname} = Router
//    if(pathname == '/' ){
//        Router.push('/second')
//    }
//  }

/***************************
Top Questions

again using callback functions and
maintain global/wider scoped variables needed in
multiple places

passing variables in callback functions still confusing

routing?

storing data locally in the brower cache (haven't
really started exploring this yet))

where can I write logic if I need to?
does all of that just go into predefined functions
outside of the hmtl that I then need to call?

so very very confused about callbacks in general

how create a break in the while loop for the timer?
**************************/







export default function Home() {
  const [count, setCount] = useState(0);
  const [workTime, setWorkTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  const [iterations, setIterations] = useState(0);


  const clickRoute = (e) => {
    // const pathname = Router
    // if (pathname == '/') {
    //   // setDirPath(routePath)
    //   // setInterval(() => {
      e.preventDefault()
      localStorage.setItem('workTime', +workTime)
      localStorage.setItem('breakTime', +breakTime)
      localStorage.setItem('iterations', +iterations)

      Router.push('/second')
    // },  3000);
  }


  const handleClick = () => setCount(count + 1);


  // const handleInputClick = (e) => {
  //   console.log("val1 is " + e.target.value)
  //   setGoal(e.target.value)
  //   console.log("val1 is " + e.target.value)
  // };

  const handleInputClick1 = (val1) => {
    console.log("val1 pre set is " + val1)
    setWorkTime(val1)
    console.log("val1 post set is " + val1)
    console.log("this is period of work " + workTime)
  };
  const handleInputClick2 = (val2) => {
    console.log("val1 pre set is " + val2)
    setBreakTime(val2)
    console.log("val1 post set is " + val2)
    console.log("this is the period of break " + breakTime)
  };
  const handleInputClick3 = (val3) => {
    console.log("val1 pre set is " + val3)
    setIterations(val3)
    console.log("val1 post set is " + val3)
    console.log("this is the num iterations " + iterations)
  };

  // const updateTime = setTimeLeft(timeLeft-1);

  return (
    <div className="container">
      <Head>
        <title>Yeagle's Bagels!</title>
        <link rel="icon" href="/bagel_logo.png" />
      </Head>

      <main>
        <Header title="Welcome to PomoDomo" />
        {/* <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p> */}
        <p>Count is {count}</p>

        <Button handleClick={handleClick} buttonName={"Click Counter"} />
        <br></br>
        <br></br>
        <br></br>

        <Input handleInputClick1={handleInputClick1} handleInputClick2={handleInputClick2} handleInputClick3={handleInputClick3} inputPrompt1={"How long do you want to work?"} inputPrompt2={"How long do you want to break?"} inputPrompt3={"How many cycles would you like to do?"} />
        <>Current time is {workTime}</>

        {/* <div>{val1}</div> */}
        {/* how to get component value returned so it can be dynamically displayed on the page after */}
        {/* <Input handleInputClick={handleInputClick} inputPrompt={"How long do you want to break?"} /> */}
        {/* <Input handleInputClick={handleInputClick} inputPrompt={"How many cycles would you like to do?"} /> */}
        {/* <p> Time remaining is :{timeLeft}</p> */}

        <RouteButton clickRoute={clickRoute} />
        {/* clickRoute={clickRoute('/second')}   onClick={setDirPath('/second')*/}

      </main>

      <Footer />
      {/* <script src="jsapp.js"></script> */}
    </div>
  )
}
