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
            logo_pic: "/IMGassets/meta2.png",
            hard_skills: "PostgresQL, Presto, Scuba, Python Scripting",
            soft_skills: "PMF, Feature/Fix Efficiency, Leadership w/o Authority",
            top_move_perc: "-20%",
            details_view_height: "60vw",

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

            logo_pic: "/IMGassets/captivateiq.png",
            hard_skills: "SQL, Excel, Python",
            soft_skills: "Problem Solving, Product Strategy, Collaboration",
            top_move_perc: "-140%",
            details_view_height: "60vw",


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
            logo_pic: "/IMGassets/guide.png",
            hard_skills: "Excel, Product/Design Tooling",
            soft_skills: "Product Strategy, Growth Strategy",
            top_move_perc: "-65%",
            details_view_height: "65vw",

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

            logo_pic: "/IMGassets/sift2.png",
            hard_skills: "Excel, Salesforce",
            soft_skills: "Collaboration, Project Scoping",
            top_move_perc: "-65%",
            details_view_height: "50vw",

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
