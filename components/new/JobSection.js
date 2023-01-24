import React, { useState, useEffect } from 'react';
import styles from './JobDetails.module.css'
import Button from '@components/pomodomo/Button';
import JobDetails from './JobDetails';


export default function JobSection() {

    const elements = [
        {
            id: 1,
            company: "Facebook",
            company_url: "https://www.metacareers.com/",
            role: "Product Development",
            tenure: "2022-Present",
            details: ["Engineer and maintain multibillion-row structured data pipelines, tables, and dashboards used by FB, Instagram, Messenger, and Reality Labs reporting teams ",
                "Lead the product strategy and execution for deprecation of Neighborhoods, a hyper-local FB product with 5 million MAUs",
                "Operationalize signal collection and prioritization for the experimental pre-launch pillar of the FB app",
                "Synthesize user signal into roadmap-actionable dashboards and reporting",
                "Drive cross functional quality and launch-readiness initiatives with eng, product, design, QA, privacy, legal and UXR"],
            logo_pic: "/NewIMGassets/meta_2.png",
            hard_skills: "PostgresQL, Presto, Scuba, Python Scripting",
            soft_skills: "PMF, Feature/Fix Efficiency, Leadership w/o Authority",
            top_move_perc: "-20%",
            details_view_height: "45vw",

        },
        {
            id: 2,
            company: "CaptivateIQ",
            company_url: "https://www.captivateiq.com/",
            role: "Product Solutions Consultant",
            tenure: "2021-2022",
            details: ["Project manage calculation model design and build schedule for MM-ENT companies",
                "Leverage data architecture, manipulation, and scripting to parse and synthesize multiple data sources into clear and accurate commission outputs",
                "Use a host of in-house formulas based on SQL, Excel, and Python to build performant calculation models",
                "Collaborate with product and engineering teams to streamline performance and expand platform functionality",
                "Train new users and team-members on data manipulation and modeling best practices"],

            logo_pic: "/NewIMGassets/CIQ_4.png",
            hard_skills: "SQL, Excel, Python",
            soft_skills: "Problem Solving, Product Strategy, Collaboration",
            top_move_perc: "-140%",
            details_view_height: "40vw",


        },
        {
            id: 2,
            company: "Guide.co",
            company_url: "https://guide.co/",
            role: "Product Growth Lead",
            tenure: "2019-2020",
            details: ["Worked weekly with eng team and C-suite to uncover PMF and bring an early-access platform to market",
                "Collaborated on sourcing, design, and execution of product growth features",
                "Executed 23 growth experiments in 20Q1, tracking towards a 1m user growth rate for 2020",
                "Analyzed usage data weekly to inform adoption strategy",
                "Reduced activation time from 1.5 weeks to 45 minutes while increasing first week engagement by 200%+",
                "Acquired, onboarded, and conducted user research with 18 pre-launch customers",
                "Uncovered and prioritized customer pains against technical feasibility on a daily basis"],
            logo_pic: "/NewIMGassets/guide_2.jpg",
            hard_skills: "Excel, Product/Design Tooling",
            soft_skills: "Product Strategy, Growth Strategy",
            top_move_perc: "-65%",
            details_view_height: "40vw",

        },
        {
            id: 2,
            company: "Sift",
            company_url: "https://sift.com/",
            role: "Business Development Lead",
            tenure: "2018-2019",
            details: ["Worked closely with Head of GTM and Marketing team weekly to iterate and improve inbound strategy for the global business development team (SF, AZ, EU)",
                "Re-designed inbound lead pipeline that improved conversion to sale by 300% in first 6 months (1.5 to 4.5%)",
                "Implemented lead filtering logic that reduced inbound burden by ~30% without affecting sales meeting output "],

            logo_pic: "/NewIMGassets/sift_2.png",
            hard_skills: "Excel, Salesforce",
            soft_skills: "Collaboration, Project Scoping",
            top_move_perc: "-65%",
            details_view_height: "30vw",

        },


    ];


    const [currQuote, setCurrQuote] = useState(0)
    const [mover, setMover] = useState(1000)
    const [currentIndex, setCurrentIndex] = useState(0);
    const [caroLive, setCaroLive] = useState(false)

    const [open, setOpen] = useState(false)
    const [workStyle, setWorkStyle] = useState("styles.work_details_closed")
    const [currOpen, setCurrOpen] = useState(0)

    // console.log("On the current load of the page, the workstyle is set to: " + workStyle)




    // const [currQuote, setCurrQuote] = useState(0)
    // const [mover, setMover] = useState(1000)
    // const [currentIndex, setCurrentIndex] = useState(0);
    // const [caroLive, setCaroLive] = useState(false)

    // const [open, setOpen] = useState(false)
    // const [workStyle, setWorkStyle] = useState(styles.work_details_closed)
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
            setCurrOpen(index)

            setWorkStyle(styles.work_details_open)
            // setWorkVH(elements.details_view_height)
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

useEffect(() => {
    setWorkStyle(styles.work_details_closed)
    setWorkVH("7vw")
    setArrowStyle(styles.arrow_down)
},[])

    // const openClick = () => {
    //     // console.log("the onlclick is being used to change styles")
    //     // console.log("current style before change is : " + workStyle)

    //     setOpen(!open)
    //     if (open) setWorkStyle(styles.work_details_closed)
    //     else setWorkStyle(styles.work_details_open)
    // }

    return (
        <>
            <div className={styles.jobs_wrapper}>

                {elements.map((elements, index) => (
                    <div className={styles.jobs_container}>

                        <div className={styles.logo_container}>
                            <div className={styles.arrow} onClick={() => openClick(index)} >
                                <img className={arrowStyle} src="/IMGassets/down_arrow.png" style={{ height: "5vw" }} />
                            </div>
                            <img src={elements.logo_pic} className={styles.logo} onClick={() => openClick(index)} />

                        </div>
                    </div>


                ))}
            </div>
            <div style={{ height: workVH, transition: "1s" }} >
                <div className={workStyle} >
                    <div className={styles.details_header}>
                        <a href={elements.company_url} target="_blank"><h3 className={styles.details_header_units}>{elements[currOpen].company} &#128279;</h3></a>
                        <h3 className={styles.details_header_units}>{elements[currOpen].role}</h3>
                        <h3 className={styles.details_header_units}>{elements[currOpen].tenure}</h3>
                    </div>
                    <div className={styles.details_mini_header} >Work</div>
                    <hr style={{ backgroundColor: !open ? "rgba(0,0,0,0)" : "rgb(255,255,255)", transition: !open ? "1s" : "3s" }} />
                    <ul className={styles.work_bullets}>
                        {elements[currOpen].details.map(detail => (
                            <li key={detail} >{detail}</li>
                        ))}
                    </ul>
                    <hr style={{ backgroundColor: !open ? "rgba(0,0,0,0)" : "rgb(255,255,255)", transition: !open ? "1s" : "3s" }} />
                    <div className={styles.details_mini_header} > Hard Skills</div>
                    <ul><li className={styles.work_bullets}> {elements[currOpen].hard_skills}</li></ul>
                    <div className={styles.details_mini_header} > Soft Skills</div>
                    <ul><li className={styles.work_bullets}> {elements[currOpen].soft_skills}</li></ul>
                    <hr style={{ backgroundColor: !open ? "rgba(0,0,0,0)" : "rgb(255,255,255)", transition: !open ? "1s" : "3s" }} />
                </div>
            </div>

        </>
    )
}
