import '@styles/globals.css'
// import "./App.css";
import { Provider } from "react-redux";
import store from 'src/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter } from 'node_modules/react-router-dom/dist/index';
import About from './about';
import genSessionUuid from "../components/DBcomponents/usergen"
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";


console.log("Oh wow look at you, you little hacker! Inspecting elements and stuff... very impressive wow!")

function Application({ Component, pageProps }) {


  return (
    <Provider store={store}>
      <Component {...pageProps}>
      </Component>
    </Provider>
  )
}

export default Application
