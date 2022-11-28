// import Head from 'next/head'
// import Header from '@components/Header'
// import Footer from '@components/Footer'
// import Button from '@components/Button'
// import RouteButton from '@components/legacyPages/RouteButton'
// import Input from '@components/legacyPages/Input'
// import Second from './second'
// import Home from '../../pages/index'
// import TimerPage from '@components/legacyPages/TimerPage'
// // import { toPath } from 'node_modules/cypress/types/lodash/index'
// import { NextResponse, NextRequest } from 'next/server'

// import React, { useState, useEffect } from "react";
// import Router from 'next/router'

// import { useRouter } from 'next/router'
// // import { defaultTo } from 'node_modules/cypress/types/lodash/index'

// // const Post = () => {
// //   const router = useRouter()
// //   const { pid } = router.query

// //   return <p>Post: {pid}</p>
// // }

// // export default Post

// // useEffect = () => {
// //    const {pathname} = Router
// //    if(pathname == '/' ){
// //        Router.push('/second')
// //    }
// //  }



// export default function Settings({Second}) {
//   const [count, setCount] = useState(0);
//   const [workTime, setWorkTime] = useState(0);
//   const [breakTime, setBreakTime] = useState(0);
//   const [iterations, setIterations] = useState(0);




//   const clickRoute = (e) => {
//     // const pathname = Router
//     // if (pathname == '/') {
//     //   // setDirPath(routePath)
//     //   // setInterval(() => {
//     // e.preventDefault()

//     Second()

//       console.log(localStorage.getItem('workTime'))
//       console.log(localStorage.getItem('breakTime'))
//       console.log(localStorage.getItem('iterations'))
//       console.log(localStorage.getItem('workTime'))

//       console.log("clickRoute was clicked before")

//       localStorage.setItem('workTime', +workTime)
//       localStorage.setItem('breakTime', +breakTime)
//       localStorage.setItem('iterations', +iterations)

//       console.log("clickRoute was clicked AFTER")

//       console.log(localStorage.getItem('workTime'))
//       console.log(localStorage.getItem('breakTime'))
//       console.log(localStorage.getItem('iterations'))
//       console.log(localStorage.getItem('workTime'))


//   }


//   const handleClick = () => setCount(count + 1);


//   // const handleInputClick = (e) => {
//   //   console.log("val1 is " + e.target.value)
//   //   setGoal(e.target.value)
//   //   console.log("val1 is " + e.target.value)
//   // };

//   const handleInputClick1 = (val1) => {
//     // console.log("val1 pre set is " + val1)
//     setWorkTime(val1)
//     // console.log("val1 post set is " + val1)
//     console.log("this is period of work " + workTime)
//   };
//   const handleInputClick2 = (val2) => {
//     // console.log("val1 pre set is " + val2)
//     setBreakTime(val2)
//     // console.log("val1 post set is " + val2)
//     console.log("this is the period of break " + breakTime)
//   };
//   const handleInputClick3 = (val3) => {
//     // console.log("val1 pre set is " + val3)
//     setIterations(val3)
//     // console.log("val1 post set is " + val3)
//     console.log("this is the num iterations " + iterations)
//   };

//   // const updateTime = setTimeLeft(timeLeft-1);
//   let totalTimeSum = (+workTime + +breakTime) * Math.min(+iterations, 1)
//   console.log("showing SETTINGS component")


//   return (
//     <div className="container">
//       <Head>
//         <title>Yeagle's Bagels!</title>
//         <link rel="icon" href="/bagel_logo.png" />
//       </Head>

//       <main>
//         <Header title="Welcome to PomoDomo" />
//         {/* <p className="description">
//           Get started by editing <code>pages/index.js</code>
//         </p> */}
//         <p>Count is {count}</p>

//         <Button handleClick={handleClick} buttonName={"Click Counter"} />
//         <br></br>
//         <br></br>
//         <br></br>

//         <Input clickRoute={clickRoute} handleInputClick1={handleInputClick1} handleInputClick2={handleInputClick2} handleInputClick3={handleInputClick3} clickRoute={clickRoute} inputPrompt1={"How long do you want to work?"} inputPrompt2={"How long do you want to break?"} inputPrompt3={"How many cycles would you like to do?"} inputPrompt4={"Let's do this v2"} />
//         <>Current time is {totalTimeSum}</>

//         {/* <div>{val1}</div> */}
//         {/* how to get component value returned so it can be dynamically displayed on the page after */}
//         {/* <Input handleInputClick={handleInputClick} inputPrompt={"How long do you want to break?"} /> */}
//         {/* <Input handleInputClick={handleInputClick} inputPrompt={"How many cycles would you like to do?"} /> */}
//         {/* <p> Time remaining is :{timeLeft}</p> */}

//         {/* <RouteButton clickRoute={clickRoute} /> */}

//         {/* clickRoute={clickRoute('/second')}   onClick={setDirPath('/second')*/}

//       </main>

//       <Footer />
//       {/* <script src="jsapp.js"></script> */}
//     </div>
//   )
// }
