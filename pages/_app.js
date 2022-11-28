import '@styles/globals.css'
// import "./App.css";
import { Provider } from "react-redux";
import store from 'src/store';

// const button = document.getElementById('button1')

// // button.addEventListener('click', function() {
// //     alert("NICE")

// //     document.body.style.backgroundColor = 'olive'
// // })


function Application({ Component, pageProps }) {
  return <Provider store={store}>
    <Component {...pageProps} />
  </Provider>
}

export default Application
