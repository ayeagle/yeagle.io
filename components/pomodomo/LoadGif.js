
import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux";
import { updateBreakTime, updateIterations, updateReady, updatePage, updateWorkTime, updateTotalTime, updateTimeRemain, updateTimeActive, updateIterationsRemain, updateJoke, updateGif } from 'src/actions/cartAction'
import styles from '/components/pomodomo/LoadGif.module.css'


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


  return (

    <>
    <rect classNamme={styles.loadgif} x='0' y='0' fill="white" height={5000} width={3000}>
    <img src = "/load_gif.gif"/>
    </rect>
    </>




  )
}
