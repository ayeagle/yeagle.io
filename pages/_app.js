import '@styles/globals.css'
// import "./App.css";
import { Provider } from "react-redux";
import store from 'src/store';
// import { BrowserRouter } from 'node_modules/react-router-dom/dist/index';
import About from './about';
import genSessionUuid from "../components/DBcomponents/usergen"
import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
// import { Router } from 'react-router-dom'
// import { createBrowserHistory } from 'history'



console.log("Oh wow look at you, you little hacker! Inspecting elements and stuff... very impressive wow!")

function Application({ Component, pageProps }) {

  useEffect(() => {

    window.user = 
        {
            username: null,
            preference: "stuff",
            url: "",
        }


  }, [])


  return (
    <Provider store={store}>
      {/* <Router history={history}> */}
        <Component {...pageProps}>
        </Component>
      {/* </Router> */}
    </Provider>
  )
}

export default Application
