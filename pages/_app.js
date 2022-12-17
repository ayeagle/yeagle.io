import '@styles/globals.css'
// import "./App.css";
import { Provider } from "react-redux";
import store from 'src/store';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter } from 'node_modules/react-router-dom/dist/index';
import About from './about';

// import {SafeAreaView} from 'react-native'


// const button = document.getElementById('button1')

// // button.addEventListener('click', function() {
// //     alert("NICE")

// //     document.body.style.backgroundColor = 'olive'
// // })


function Application({ Component, pageProps }) {
  return (
      <Provider store={store}>
        <Component {...pageProps}/>
      </Provider>
  )
}

export default Application
