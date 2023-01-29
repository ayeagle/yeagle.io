import React, { useState, useEffect } from 'react';
import styles from './Quotes.module.css'
import Button from '@components/pomodomo/Button';



const elements = [
    {
        id: 1,
        content: "I think Alex is currently one of the thought leaders on our team. He drives insightful conversation and provides thoughtful feedback. Alex is at a point where he could be a mentor to other colleagues and help those around him reach his level of product knowledge",
        author: "Nic Gochis",
        role: "Product Solutions Manager",
        company: "CaptivateIQ",
        size: "1.65vw",
        pic: "IMGassets/nic.jpeg",

        position: 0,
    },
    {
        id: 7,
        content: "I'm really impressed with Alex's progress in such a short time and grateful to have him on the team. All of [his work] helps us build much better products for users that are more likely to be successful sooner… Super importantly, he knows our products well and has done a great job getting to know the team and constantly reinforcing the value of [product testing].",
        author: "Erin Connolly",
        role: "Director of Product Management",
        company: "Facebook",

        size: "1.45vw",
        pic: "IMGassets/erin.jpeg",

        position: 0,
    },
    {
        id: 5,
        content: "Alex is a pillar of excellence and without him our department would crumble and the roof cave in. I know he stresses about CIQ as much as I do. He is fixated on getting better and making everyone better. He is a clear leader and leads from behind. I am proud to be in the same department as him.",
        author: "Richard Demke",
        role: "Product Solutions Manager",
        company: "CaptivateIQ",

        size: "1.5vw",
        pic: "IMGassets/richard.jpeg",

        position: 0,
    },
    {
        id: 6,
        content: "Something that stood out to me during the [FB Neighborhoods deprecation] was Alex's understanding of the product and user experiences. He can effectively draw the relations between product experiences and engineering complexities. He also led lot of post launch analysis to determine the impact of the launched flows... I am confident that he would be a very good PM and I would be excited to work with him as a product manager. ",
        author: "Chetan Ambekar",
        role: "Senior SWE",
        company: "Facebook",

        size: "1.3vw",
        pic: "IMGassets/chetan.jpeg",

        position: 0,
    },
    {
        id: 2,
        content: "I chose Alex because he contains all of the ingredients for a strong team member... I am confident he will be a valuable addition to any product teams solving tough problems.",
        author: "Marcus Lowe",
        role: "Head of Product",
        company: "Resource.io",

        size: "1.9vw",
        pic: "IMGassets/marcus.jpeg",

        position: 0,
    }

];



export default function Quotes({boopBoop, setBoopBoop}) {


    const [currQuote, setCurrQuote] = useState(0)
    const [mover, setMover] = useState(1000)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [caroLive, setCaroLive] = useState(false)
    const [loadingBar, setLoadingBar] = useState(1)



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



    // console.log(elements.length + "this is the element length")

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     if (mover == 1000 * elements.length) {
    //       console.log("mover reset to 0")
    //       setMover(0)
    //     } else {
    //       console.log("mover incrementing up")
    //       setMover((mover + 800));
    //     }
    //   }, 10000);
    //   return () => clearInterval(interval);
    // }, [mover]);

    // console.log("here is the curr index: " + currentIndex)

    const forwardClick = () => {
        setLoadingBar(0)

        // console.log("e index changed up by 1 from this: " + currentIndex)
        if (currentIndex == elements.length - 1) {
            setCurrentIndex(0)

        } else {
            setCurrentIndex(Math.min(currentIndex + 1, elements.length - 1))
        }

    }

    const backClick = () => {
        // console.log("e index changed down by 1 from this: " + currentIndex)

        setLoadingBar(0)

        // console.log("e index changed up by 1 from this: " + currentIndex)
        if (currentIndex == 0) {
            setCurrentIndex(elements.length - 1)

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

            setCurrentIndex((currentIndex + 1) % elements.length);
            setLoadingBar(0)

        }, 10000);
        return () => clearInterval(interval);
    }, [currentIndex]);


    useEffect(() => {
        const interval = setInterval(() => {
            if (loadingBar >= 100) return
            else setLoadingBar(loadingBar + .12)
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
                {elements.map((element, index) => (
                    <div
                        key={element.id}
                        className={styles.carousel}
                        style={{ ...(index === currentIndex ? currStyle : (index < currentIndex ? preStyle : postStyle)), fontSize: element.size , position: "relative", zIndex: 5000}}
                    >
                        <div className={styles.carousel_element_left} style={{ fontSize: "2.5vw", zIndex: 5000 }}>
                            <img src={element.pic} style={{ width: "20vw", height: "20vw", borderRadius: "100%" , zIndex: 5000}} />

                            <h3>{element.author}</h3>
                            <h4>{element.role}</h4>
                            <h4>@ {element.company}</h4>
                        </div>
                        <div className={styles.carousel_element_right} >
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


//elements[currentIndex].size 