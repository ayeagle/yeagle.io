import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '@components/Button'
import Input from '@components/Input'

import { useState, useEffect } from 'react'


export default function Home() {
  const [count, setCount] = useState(0);
  const [workTime, setWorkTime] = useState(0);
  const [breakTime, setBreakTime] = useState(0);
  const [iterations, setIterations] = useState(0);

  const handleClick = () => setCount(count+1);
  // const handleInputClick = (e) => {
  //   console.log("val1 is " + e.target.value)
  //   setGoal(e.target.value)
  //   console.log("val1 is " + e.target.value)
  // };

  const handleInputClick = (val1) => {
    console.log("val1 is " + val1)
    setWorkTime(val1)
    console.log("val1 is " + val1)
    console.log("this is the goal "+workTime)
  };

  // const updateTime = setTimeLeft(timeLeft-1);

  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to PomoDomo" />
        {/* <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p> */}
        <p>Count is {count}</p>

        <Button handleClick={handleClick}/>
        <br></br>
        <br></br>
        <br></br>

        <Input handleInputClick={handleInputClick} inputPrompt={"How long do you want to work?"}/>
        {/* <div>{val1}</div> */}
        {/* how to get component value returned so it can be dynamically displayed on the page after */}
        <Input handleInputClick={handleInputClick} inputPrompt={"How long do you want to break?"} />
        <Input handleInputClick={handleInputClick} inputPrompt={"How many cycles would you like to do?"} />
        {/* <p> Time remaining is :{timeLeft}</p> */}


      </main>

      <Footer />
      {/* <script src="jsapp.js"></script> */}
    </div>
  )
}
