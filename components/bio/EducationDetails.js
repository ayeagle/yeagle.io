import React, { useState, useEffect } from 'react';
import styles from './JobDetails.module.css'
import Button from '@components/pomodomo/Button';




export default function EducationDetails({ elements, key }) {



    const [currQuote, setCurrQuote] = useState(0)
    const [mover, setMover] = useState(1000)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [caroLive, setCaroLive] = useState(false)

    const [open, setOpen] = useState(false)
    const [workStyle, setWorkStyle] = useState(styles.work_details_closed)
    const [workVH, setWorkVH] = useState("7vw")
    const [arrowStyle, setArrowStyle] = useState(styles.arrow_down)

    // console.log("On the current load of the page, the workstyle is set to: " + workStyle)
    // console.log("elements.viewheight: " + elements.details_view_height)
    // console.log("workvh state: " + elements.workVH)



    const openClick = (index) => {
        // console.log("the onlclick is being used to change styles")
        // console.log("current style before change is : " + workStyle)
        // console.log("!!!!!!! this is the index being passed : " + index)
        // console.log("!!!!!!! this is the key value " + key)


        setOpen(!open)
        if (open) {
            setWorkStyle(styles.work_details_closed)
            setWorkVH("7vw")
            setArrowStyle(styles.arrow_down)

        } else {
            setWorkStyle(styles.work_details_open)
            setWorkVH(elements.details_view_height)
            setArrowStyle(styles.arrow_up)

        }
    }



    const forwardClick = () => {
        // console.log("e index changed up by 1 from this: " + currentIndex)
        setCurrentIndex(Math.min(currentIndex + 1, elements.length))
    }

    const backClick = () => {
        // console.log("e index changed down by 1 from this: " + currentIndex)
        setCurrentIndex(Math.max(currentIndex - 1, 0))
    }


    useEffect(() => {
        if (!caroLive) {
            setCurrentIndex((currentIndex + 1))
            setCaroLive(true)
        }
        const interval = setInterval(() => {

            setCurrentIndex((currentIndex + 1) % elements.length);
        }, 20000);
        return () => clearInterval(interval);
    }, [currentIndex]);

    return (
        <>
            <div className={styles.jobs_container}>

                <div key={key} style={{ position: "relative" }}>
                    <div className={styles.details_header}>
                        <a href={elements.company_url} target="_blank"><h3 className={styles.details_header_units}>{elements.company} &#128279;</h3></a>
                        <h3 className={styles.details_header_units}>{elements.role}</h3>
                        <h3 className={styles.details_header_units}>{elements.tenure}</h3>
                    </div>
                    <div style={{ position: "relative" }}>


                        <visualViewport className={styles.logo_container}>
                            <div className={styles.arrow} onClick={openClick} >
                                <img className={arrowStyle} src="/IMGassets/down_arrow.png" style={{ height: "5vw" }} />
                            </div>
                            {/* <Waves h={400/4} w={800/4}> */}
                            <img src={elements.logo_pic} className={styles.logo} style={{ top: elements.top_move_perc }} onClick={openClick} />

                        </visualViewport>
                    </div>
                    <div style={{ height: workVH, transition: "1s" }} >

                        <div className={workStyle} >
                            <div className={styles.details_mini_header} >Details</div>
                            <hr style={{ backgroundColor: !open ? "rgba(0,0,0,0)" : "rgb(0,0,0)", transition: !open ? "0s" : "1s"}} />
                            <ul className={styles.work_bullets}>
                                {elements.details.map(detail => (
                                    <li key={detail} >{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>


                </div>
            </div>

            {/* <Button className={styles.button} buttonName={"\u25c0"} handleClick={forwardClick} /> <Button className={styles.button} buttonName={"\u25b6"} handleClick={backClick} /> */}

            {/* </div> */}
            {/* </rect> */}

        </>
    )
}
