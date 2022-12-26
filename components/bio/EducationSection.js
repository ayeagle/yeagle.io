import React, { useState, useEffect } from 'react';
import styles from './JobDetails.module.css'
import Button from '@components/pomodomo/Button';
import JobDetails from './JobDetails';


export default function EducationSection() {

    const elements = [
        {
            id: 1,
            company: "Facebook",
            company_url: "url url",
            role: "Product School",
            tenure: "2020",
            details: ["Engineer and maintain multibillion-row structured data pipelines, tables, and dashboards used by FB, Instagram, Messenger, and Reality Labs reporting teams ",
                     "Lead the product strategy and execution for deprecation of Neighborhoods, a hyper-local FB product with 5 million MAUs",
                     "Operationalize signal collection and prioritization for the experimental pre-launch pillar of the FB app",
                     "Synthesize user signal into roadmap-actionable dashboards and reporting",
                    "Drive cross functional quality and launch-readiness initiatives with eng, product, design, QA, privacy, legal and UXR"],
            logo_pic: "/IMGassets/pschool2.png",
            top_move_perc: "-85%",
            details_view_height: "45vw",

        },
        {
            id: 2,
            company: "CaptivateIQ",
            company_url: "url url",
            role: "Product Solutions Consultant",
            tenure: "2021-2022",
            details: ["Project manage calculation model design and build schedule for MM-ENT companies",
                     "Leverage data architecture, manipulation, and scripting to parse and synthesize multiple data sources into clear and accurate commission outputs",
                     "Use a host of in-house formulas based on SQL, Excel, and Python to build performant calculation models",
                     "Collaborate with product and engineering teams to streamline performance and expand platform functionality",
                    "Train new users and team-members on data manipulation and modeling best practices"],

            logo_pic: "/IMGassets/carleton.png",
            top_move_perc: "-13%",
            details_view_height: "45vw",


        },
    ];


    const [currQuote, setCurrQuote] = useState(0)
    const [mover, setMover] = useState(1000)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [caroLive, setCaroLive] = useState(false)

    const [open, setOpen] = useState(false)
    const [workStyle, setWorkStyle] = useState("styles.work_details_closed")

    console.log("On the current load of the page, the workstyle is set to: " + workStyle)


    const openClick = () => {
        console.log("the onlclick is being used to change styles")
        console.log("current style before change is : " + workStyle)

        setOpen(!open)
        if (open) setWorkStyle(styles.work_details_closed)
        else setWorkStyle(styles.work_details_open)
    }

    return (
        <>
            {elements.map((elements, index) => (
                <div className={styles.jobs_wrapper}>
                    <JobDetails elements={elements} key={index}/>
                </div>

            ))}
            {/* <Button className={styles.button} buttonName={"\u25c0"} handleClick={forwardClick} /> <Button className={styles.button} buttonName={"\u25b6"} handleClick={backClick} /> */}

            {/* </div> */}
            {/* </rect> */}

        </>
    )
}
