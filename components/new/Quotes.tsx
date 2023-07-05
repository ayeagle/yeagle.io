import React, { useState, useEffect } from 'react';
import styles from './Quotes.module.css'
import { Property } from 'csstype';
import {quoteArray, QuoteItem} from './QuotesData'



export default function Quotes({}) {


    const [mover, setMover] = useState<number>(1000)
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const [caroLive, setCaroLive] = useState<boolean>(false)
    const [loadingBar, setLoadingBar] = useState<number>(1)
    const [height, updateHeight] = useState<number>(0)
    const [width, updateWidth] = useState<number>(0)



    useEffect(() => {
        updateWidth(window.innerWidth)

        function handleWindowResize() {
            updateHeight(window.innerHeight)
            updateWidth(window.innerWidth)
        }
        window.addEventListener('resize', handleWindowResize)
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])



    const preStyle = {
        left: '100%',
        color: 'rgba(0,0,0,0)',
        backgroundColor: 'rgba(0,0,0,0)',
        transition: '1s',
        borderColor: 'rgba(0,0,0,0)',
        boxShadow: '0 0 20px 20px rgba(0, 0, 0, 0)',
        display: 'none'
    }


    const currStyle = {
        // left: "12.5%",
        color: "white",
        // backgroundColor: "#7c4455",
        transition: "5s",
        // borderColor: "#eb5c00"
    }

    const postStyle = {
        left: '-100%',
        color: 'rgba(0,0,0,0)',
        backgroundColor: 'rgba(0,0,0,0)',
        transition: '1s',
        borderColor: 'rgba(0,0,0,0)',
        boxShadow: '0 0 20px 20px rgba(0, 0, 0, 0)',
        display: 'none'
    }

    const forwardClick = () => {
        setLoadingBar(0)
        if (currentIndex == quoteArray.length - 1) {
            setCurrentIndex(0)

        } else {
            setCurrentIndex(Math.min(currentIndex + 1, quoteArray.length - 1))
        }

    }

    const backClick = () => {
        // console.log("e index changed down by 1 from this: " + currentIndex)

        setLoadingBar(0)

        // console.log("e index changed up by 1 from this: " + currentIndex)
        if (currentIndex == 0) {
            setCurrentIndex(quoteArray.length - 1)

        } else {
            setCurrentIndex(Math.max(currentIndex - 1, 0))
        }
    }

    useEffect(() => {
        if (!caroLive) {
            setCurrentIndex((currentIndex + 1))
            setCaroLive(true)
            setLoadingBar(0)

        }
        const interval = setInterval(() => {

            setCurrentIndex((currentIndex + 1) % quoteArray.length);
            setLoadingBar(0)

        }, 10000);
        return () => clearInterval(interval);
    }, [currentIndex]);


    useEffect(() => {
        const interval = setInterval(() => {
            if (loadingBar >= 100) return
            else setLoadingBar(loadingBar + .15)
        }, 10);
        return () => clearInterval(interval);
    }, [loadingBar, currentIndex, setLoadingBar]);

    useEffect(() => {
        forwardClick()
        setLoadingBar(0)
    }, []);



    

    return (
        <>
        {/* <div style={{position: "relative", transition: "auto"}}> */}
            <div className={styles.carousel_container} >


                {/* <button className={styles.buttonr} buttonName={"\u25c0"} onClick={forwardClick}><span>{`\u25c0`}</span></button>
                <button className={styles.buttonl} buttonName={"\u25b6"} onClick={backClick} ><span>{`\u25b6`}</span></button> */}

                {/* <rect style={{height:"200px", top:"200px"}}/> */}
                {/* <div className={styles.carousel}> */}
                {quoteArray.map((element, index) => (
                    <div
                        key={element.id}
                        className={styles.carousel}
                        style={{ ...(index === currentIndex ? currStyle : (index < currentIndex ? preStyle : postStyle)), fontSize: width < 900 ? `calc(${element.size} + 1vw)`: element.size , position: "relative", zIndex: 5000, flexDirection: width < 900 ? "column": "row"}}
                    >
                        <div className={styles.carousel_element_left} style={{ fontSize: "2.5vw", zIndex: 5000 }}>
                            <img src={element.pic} style={{ width: "20vw", height: "20vw", borderRadius: "100%" , zIndex: 5000}} />

                            <h3>{element.author}</h3>
                            <h4>{element.role}</h4>
                            <h4>@ {element.company}</h4>
                        </div>
                        <div className={styles.carousel_element_right} style={{height: width  < 900 ? "55vw" : "45vw"}}>
                            <div
                                className={styles.left_click}
                                onClick={backClick}>{`\u25c0`}</div>
                            <div
                                className={styles.right_click}
                                onClick={forwardClick} > {`\u25b6`}</div>
                            <div className={styles.loading_bar_inner} style={{ width: (loadingBar + '%') }} />
                            <img className={styles.quote_image} src="/NewIMGassets/white_quotes.png" style={{right: "50%"}}/>

                            <div style={{transition: ".1s", position: "relative", zIndex: 300}}>{element.content}</div>
                            <img className={styles.quote_image} src="/NewIMGassets/white_quotes.png" style={{transform:  "rotate(180deg)", left: "50%"}}/>

                        </div>
                    </div>

                ))}

            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center", position: "relative", margin: "0 auto", top: "10vw" }}>

            </div>
            {/* </div> */}
            {/* </rect> */}
            {/* </div> */}
        </>
    );

}


