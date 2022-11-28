// /***************************
// Top Questions

// again using callback functions and
// maintain global/wider scoped variables needed in
// multiple places

// passing variables in callback functions still confusing

// routing?

// storing data locally in the brower cache (haven't
// really started exploring this yet))

// where can I write logic if I need to?
// does all of that just go into predefined functions
// outside of the hmtl that I then need to call?

// so very very confused about callbacks in general

// how create a break in the while loop for the timer?


//   //need to add react redux
// //https://www.freecodecamp.org/news/how-to-build-a-redux-powered-react-app/


// move pages to components in single page
// check state of vars to determine which component to
// display

// redux storage

// containerization

// rendering order of the page (useState)

// converting types in the break condition
// **************************/

// import Head from 'next/head'
// import Header from '@components/Header'
// import Footer from '@components/Footer'
// import Button from '@components/Button'
// import RouteButton from '@components/legacyComponents/RouteButton'
// import Input from '@components/legacyComponents/Input'
// import Second from './second'
// import TimerPage from '@components/legacyComponents/TimerPage'
// import Settings from './settings'

// // import { toPath } from 'node_modules/cypress/types/lodash/index'
// import { NextResponse, NextRequest } from 'next/server'

// import React, { useState, useEffect } from "react"
// import Router from 'next/router'

// import { useRouter } from 'next/router'



// export default function Home() {
//   const [count, setCount] = useState(0);
//   const [workTime, setWorkTime] = useState(0);
//   const [breakTime, setBreakTime] = useState(0);
//   const [iterations, setIterations] = useState(0);
//   const [totalTime, setTotalTime] = useState(0);

//   useEffect(() => {
//     console.log(localStorage.getItem('workTime'))
//     console.log(localStorage.getItem('breakTime'))
//     console.log(localStorage.getItem('iterations'))
//     setWorkTime(localStorage.getItem('workTime'))
//     setBreakTime(localStorage.getItem('breakTime'))
//     setIterations(localStorage.getItem('iterations'))
//     setTotalTime((+workTime + +breakTime) * Math.min(+iterations, 1))
//     console.log("total: " + totalTime)


//   }, [])

//   // // const handleClick = () => setCount(count + 1);


//   // const updateTime = setTimeLeft(timeLeft-1);
//   console.log("showing BASE Page logic page")
//   console.log("showing BASE total time " + totalTime)


//   // switch (totalTimeSum) {
//   //   case 0:
//   //     totalTimeSum == null
//   //     return Settings()
//   //   case 1:
//   //     totalTimeSum <= 0
//   //     return Settings()
//   //   case 2:
//   //     totalTimeSum >= 0
//   //     return Second()
//   // }

//   if (totalTime < 1) {
//     return Settings(Second())
//   } else {
//     return Second()
//   }


//   // return (
//   //   <div className="container">
//   //     <Head>
//   //       <title>Yeagle's Bagels!</title>
//   //       <link rel="icon" href="/bagel_logo.png" />
//   //     </Head>

//   //     <main>
//   //       <Header title="Welcome to PomoDomo" />
//   //       {/* <p className="description">
//   //         Get started by editing <code>pages/index.js</code>
//   //       </p> */}
//   //       <p>Count is {count}</p>

//   //       <Button handleClick={handleClick} buttonName={"Click Counter"} />
//   //       <br></br>
//   //       <br></br>
//   //       <br></br>

//   //       <Input handleInputClick1={handleInputClick1} handleInputClick2={handleInputClick2} handleInputClick3={handleInputClick3} inputPrompt1={"How long do you want to work?"} inputPrompt2={"How long do you want to break?"} inputPrompt3={"How many cycles would you like to do?"} />
//   //       <>Current time is {workTime}</>

//   //       {/* <div>{val1}</div> */}
//   //       {/* how to get component value returned so it can be dynamically displayed on the page after */}
//   //       {/* <Input handleInputClick={handleInputClick} inputPrompt={"How long do you want to break?"} /> */}
//   //       {/* <Input handleInputClick={handleInputClick} inputPrompt={"How many cycles would you like to do?"} /> */}
//   //       {/* <p> Time remaining is :{timeLeft}</p> */}

//   //       <RouteButton clickRoute={clickRoute} />

//   //       {/* clickRoute={clickRoute('/second')}   onClick={setDirPath('/second')*/}

//   //     </main>

//   //     <Footer />
//   //     {/* <script src="jsapp.js"></script> */}
//   //   </div>
//   // )
// }
