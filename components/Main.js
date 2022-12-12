import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import Button from '@components/Button'
import RouteButton from '@components/legacyComponents/RouteButton'
import Input from '@components/Inputv2'
import Second from './legacyComponents/second'
import Settings from '../components/legacyComponents/settings'
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateBreakTime, updateIterations, updateReady, updatePage, updateWorkTime, updateTotalTime, updateTimeRemain, updateTimeActive, updateIterationsRemain, updateJoke, updateGif } from 'src/actions/cartAction'
import styles from '../components/Tomato.module.css'
import styles2 from '../components/Footer.module.css'
import Timer from '@components/Timer.js'
import { useSpring, animated } from 'react-spring';
import Waves from './Waves'

// import { kute.js} from '/node_modules'
// import fromTo from 'node_modules/kute.js/types/index'
// import { GiphyFetch } from '@giphy/js-fetch-api'

// import jQuery from 'node_modules/cypress/types/jquery/index'

import { GiphyFetch } from '@giphy/js-fetch-api'
import TextList from 'src/components/TextList'
import Error from 'src/components/Error'//'./components/Error'
// import REACT_APP_GIPHY_KEY from 'env'




export default function Main() {


  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const axios = require("axios");


  const [text, setText] = useState('')
  const [results, setResults] = useState([])
  const [err, setErr] = useState(false)
  const [joke, setJoke] = useState('')

  const options = {
    method: 'GET',
    url: 'https://api.giphy.com/v1/gifs/search?q=celebrate&api_key=fk4nuCWHZdfaRasp0vvMdbuDO0urqGw3&limit=25',
    // headers: {
    //     'api_key': 'fk4nuCWHZdfaRasp0vvMdbuDO0urqGw3',
    //     'X-RapidAPI-Host': 'dad-jokes.p.rapidapi.com'
    // }
  };

  //why is there input lag with the data being stored vs what is being displayed?
  //need to be leveraging promises???
  //why do these need to be included in each component? should i re-declare or pass as props?

  // const [count, setCount] = useState(0);

  // const handleClick = () => {
  //   setCount(count + 1);
  //   console.log("this button was clicked")
  // }

  const buttonClick = () => {
    console.log(state)

    if (state.workTime <= 0 || state.breakTime <= 0 || state.iterations <= 0) {
      window.alert("Uh oh! Looks like one or more values is zero. Please make sure all values are positive numbers.")
      return;
    }
    dispatch(updateIterationsRemain((+state.iterations * 2) + 1))
    dispatch(updateTotalTime((+state.workTime + +state.breakTime) * Math.max(+state.iterations, 1)))
    dispatch(updateTimeRemain((+state.workTime)))

    dispatch(updatePage("work"))
    // console.log("The state val is now: " + state.page)
    // console.log("new value of ready is: " + state.ready)
  }

  useEffect(() => {
    dispatch(updateTotalTime((+state.workTime + +state.reakTime) * +Math.max(+state.iterations, 1)))

    axios.request(options)
      .then(function (response) {
        console.log(response.data)
        console.log(response.data.data[Math.floor(Math.random() * 25)].embed_url)
        console.log(Math.floor(Math.random() * 25))
        dispatch(updateGif(response.data.data))
        console.log(typeof (response.data.data))                            //Math.floor(Math.random()*25)]
        console.log("this is the new gif state object BELOW")
        console.log(state.gif)

      })
      // .then(function (response){
      //   jokePlaceholder = response.data
      // })
      .catch(function (error) {
        console.error(error);
      });
  }, [])


  // {/* xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" */}



  // {/* <svg xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
  //     <g mask="url(&quot;#SvgjsMask1002&quot;)" fill="none">
  //         <rect width="1440" height="560" x="0" y="0" fill="#0e2a47"></rect>
  //         <path d="M0,503.384C91.801,490.184,156.105,414.039,237.41,369.417C326.441,320.555,465.101,323.77,500.626,228.628C536.805,131.736,433.441,39.63,396.641,-57.028C368.912,-129.86,355.843,-205.743,310.986,-269.471C262.369,-338.541,205.748,-403.551,128.571,-437.873C45.227,-474.937,-48.062,-485.818,-137.715,-469.013C-233.216,-451.112,-331.432,-415.683,-392.594,-340.184C-453.116,-265.475,-465.604,-162.792,-463.66,-66.664C-461.908,19.936,-410.647,92.729,-382.183,174.537C-350.118,266.696,-359.723,381.003,-285.757,444.646C-210.521,509.383,-98.244,517.511,0,503.384" fill="#0b2239"></path>
  //         <path d="M1440 1044.531C1530.412 1042.952 1604.426 982.402 1684.663 940.703 1773.726 894.4169999999999 1897.591 879.258 1936.251 786.63 1975.0430000000001 693.687 1886.3020000000001 597.545 1869.3220000000001 498.273 1852.963 402.631 1902.526 287.606 1838.436 214.753 1774.307 141.856 1654.651 173.529 1561.026 147.822 1469.599 122.71800000000002 1388.708 52.44900000000001 1294.797 65.483 1196.443 79.13400000000001 1103.468 137.735 1046.705 219.20800000000003 991.9359999999999 297.819 993.505 400.197 994.852 495.997 996.0360000000001 580.181 1020.72 658.946 1053.976 736.2909999999999 1087.931 815.262 1122.608 895.711 1189.781 949.3489999999999 1260.956 1006.182 1348.932 1046.122 1440 1044.531" fill="#113255"></path>
  //     </g>
  //     <defs>
  //         <mask id="SvgjsMask1002">
  //             <rect width="1440" height="560" fill="#ffffff"></rect>
  //         </mask>
  //     </defs>
  // </svg> */}

  const wave = () => {
    return (
      <svg version="1.1" width="1440" height="560" preserveAspectRatio="none" viewBox="0 0 1440 560">
        <g mask="url(&quot;#SvgjsMask1001&quot;)" fill="none">
          <rect width="1440" height="560" x="0" y="0" fill="#0e2a47"></rect>
          <path d="M0,341.437C87.679,357.905,171.559,427.163,255.975,398.305C341.558,369.048,390.999,277.987,427.578,195.268C463.875,113.185,479.138,21.643,461.445,-66.346C444.268,-151.766,393.155,-225.8,330.692,-286.546C271.743,-343.875,195.488,-374.169,117.653,-400.689C36.629,-428.296,-50.089,-473.612,-130.254,-443.603C-209.944,-413.771,-233.949,-315.243,-287.421,-249.052C-338.574,-185.733,-409.987,-139.453,-437.772,-62.942C-469.155,23.479,-502.056,129.118,-452.987,206.872C-403.347,285.53,-289.996,286.019,-200.835,312.505C-134.659,332.163,-67.848,328.693,0,341.437" fill="#0b2239">
            <animate
              attributeName='transform'
              attributeType='XML'
              transform='translate(-20%, 30%)'
              repeatCount="indefinite"
              repeatDur="1s"
            // d="M0,503.384C91.801,490.184,156.105,414.039,237.41,369.417C326.441,320.555,465.101,323.77,500.626,228.628C536.805,131.736,433.441,39.63,396.641,-57.028C368.912,-129.86,355.843,-205.743,310.986,-269.471C262.369,-338.541,205.748,-403.551,128.571,-437.873C45.227,-474.937,-48.062,-485.818,-137.715,-469.013C-233.216,-451.112,-331.432,-415.683,-392.594,-340.184C-453.116,-265.475,-465.604,-162.792,-463.66,-66.664C-461.908,19.936,-410.647,92.729,-382.183,174.537C-350.118,266.696,-359.723,381.003,-285.757,444.646C-210.521,509.383,-98.244,517.511,0,503.384"
            // keyPoints="0; .5; 1"
            />
          </path>
          <path d="M1440 966.979C1514.552 958.775 1579.844 912.918 1632.451 859.4590000000001 1678.388 812.778 1683.013 742.583 1716.316 686.189 1755.049 620.6 1857.828 576.801 1843.561 501.977 1829.059 425.925 1705.481 432.36199999999997 1656.4850000000001 372.41499999999996 1605.0149999999999 309.44100000000003 1632.472 189.346 1559.196 154.055 1489.08 120.286 1410.723 187.192 1340.191 220.082 1279.1680000000001 248.53699999999998 1221.574 281.644 1177.125 332.21799999999996 1132.4470000000001 383.054 1105.04 444.133 1086.158 509.125 1064.745 582.828 1036.321 660.456 1060.612 733.261 1085.718 808.5070000000001 1150.718 863.4359999999999 1218.255 905.0419999999999 1284.9470000000001 946.127 1362.139 975.548 1440 966.979" fill="#113255">

          </path>
        </g>
        <defs>
          <mask id="SvgjsMask1001">
            <rect width="1440" height="560" fill="#ffffff"></rect>
          </mask>
        </defs>
      </svg>
    )
  }


  const wave2 = () => {

    const [v1, uv1] = useState(50)
    const [v2, uv2] = useState(50)
    const [v3, uv3] = useState(50)
    const [v4, uv4] = useState(50)
    const [v5, uv5] = useState(50)

    // const updater = () => {
    //   uv1(v1 * (Math.random()+1))
    //   console.log("SVG updater is running")
    // }

    // setInterval(updater, 1000)


    return (
      <svg version="1.1" width="auto" height="auto" preserveAspectRatio="none" viewBox="auto">
        {/* <path d="M10 10 L75 10 L75 75 Z" /> */}
        {/* <path d="M 10 80 C 40 10, 65 10, 95 80 S 150 150, 180 80 " stroke="black" fill="transparent"/> */}
        <path d="
                M 0, 50
                t 30, 18
                t 80, -7
                t 170, 15
                t 250, -10
                t 300, 18
                "
          stroke="black" fill="transparent" strokeWidth="3">
        </path>

      </svg>
    )
  }



  //   if (state.page == "main") {

  return (
    <div className="container">

      <div>
        <Head>
          <title>Yeagle's Bagels!</title>
          <link rel="icon" href="/bagel_logo.png" />

        </Head>
        {/* <img src="http://api.giphy.com/v1/gifs/search?q=ryan+gosling&api_key=fk4nuCWHZdfaRasp0vvMdbuDO0urqGw3&limit=1" /> */}
        {/* <div>{GIF()}</div> */}
        <main>
          {/* <Header title="Welcome to PomoDomo" /><img src="/tomato2.png" className={styles2.tomat}/> */}
          <h1>Welcome to P<img src="/tomato2.png" className={styles2.tomat} />m<img src="/tomato2.png" className={styles2.tomat} />d<img src="/tomato2.png" className={styles2.tomat} />m<img src="/tomato2.png" className={styles2.tomat} /></h1>
          <h3>An easy way to plan a working session <br></br>using the Pomodoro productivity method.</h3>
          <h4>Also comes with dad jokes during the break!!!</h4>
          {/* <div>{SineWaveAnimation()}</div> */}
          {/* <div>{window.innerHeight}</div>
          <div>{window.innerWidth}</div> */}

          <Input
            type={"work"}
            inputPrompt1={"How long do you want to work?"}
            func={updateWorkTime}
            state={state}
            dispatch={dispatch}
            updateTotalTime={updateTotalTime}
            step={5}
            fieldPrompt={"e.g. 25 minutes"}
          /><br></br>
          <Input
            type={"break"}

            inputPrompt1={"How long do you want to break?"}
            func={updateBreakTime}
            state={state}
            dispatch={dispatch}
            updateTotalTime={updateTotalTime}
            step={1}
            fieldPrompt={"e.g. 5 minutes"}

          /><br></br>
          <Input
            type={"iter"}

            inputPrompt1={"How many iterations do you want to do?"}
            func={updateIterations}
            state={state}
            dispatch={dispatch}
            updateTotalTime={updateTotalTime}
            step={1}
            fieldPrompt={"e.g. 4 iterations"}


          />
          <br></br>
          <Button className='btn' handleClick={buttonClick} buttonName={"Let's get to work!"} >Let's get to work</Button>

          {/* onClick= {handleGeneralInput(inputType,time1)} */}

          {/* <>Current total time is {state.totalTime} and also </> */}

          {/* <div>work time is {state.workTime} and also </div>
        <div>break time is {state.breakTime} and also </div>
        <div>iterations is {state.iterations} and also </div>




        <div>Total time planned for working is:</div>
        <div> hours: {Math.floor(state.totalTime / 3600)}  </div>
        <div> minutes:{Math.floor((state.totalTime % 3600) / 60)} </div>
        <div> seconds: {state.totalTime % 60} </div> */}

        </main>

        <Footer />
        <script src="imported/confetti.js"></script>
      </div>
    </div>
  )

  //   } else if (state.page = "timer") return Second(count, setCount, workTime, setWorkTime, breakTime, setBreakTime, iterations, setIterations, totalTime, setTotalTime, timeRemain, setTimeRemain, timeActive, setTimeActive, dispatch, state, ready, setReady

  //   )


}
