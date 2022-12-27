import React, { useState, useEffect } from 'react';
import styles from './JobDetails.module.css'
import Button from '@components/pomodomo/Button';
import EducationDetails from './EducationDetails';

export default function EducationSection() {

    const elements = [
        {
            id: 1,
            company: "Carleton",
            company_url: "https://www.carleton.edu/",
            role: "BA Behavioral Economics",
            tenure: "2014-2018",
            details: ["Project manage calculation model design and build schedule for MM-ENT companies",
                     "Leverage data architecture, manipulation, and scripting to parse and synthesize multiple data sources into clear and accurate commission outputs",
                     "Use a host of in-house formulas based on SQL, Excel, and Python to build performant calculation models",
                     "Collaborate with product and engineering teams to streamline performance and expand platform functionality",
                    "Train new users and team-members on data manipulation and modeling best practices"],

            logo_pic: "/IMGassets/carleton.png",
            top_move_perc: "-13%",
            details_view_height: "45vw",
        },
        {
            id: 2,
            company: "Product School",
            company_url: "https://productschool.com/",
            role: "Honors Distinction",
            tenure: "2020",
            details: ["Credential ID: 20019092"],
            logo_pic: "/IMGassets/pschool2.png",
            top_move_perc: "-85%",
            details_view_height: "45vw",

        },
        {
            id: 3,
            company: "HBX CORe",
            company_url: "https://online.hbs.edu/courses/core/?c1=GAW_SE_NW&source=US_BRND&cr2=search__-__nw__-__us__-__branded&kw=hbx_core_exm&cr5=538763295301&cr7=c&hsa_cam=909737724&hsa_grp=53361372898&hsa_mt=e&hsa_src=g&hsa_ad=538763295301&hsa_acc={792-723-8641}&hsa_net=adwords&hsa_kw=hbx%20core&hsa_tgt=kwd-493465437512&hsa_ver=3&gclid=CjwKCAiAzKqdBhAnEiwAePEjkgV0k4oarYdX-NbiFH9CtP4sREFY1nZbNyApcF0id3V8khRCqEPF3RoCuqQQAvD_BwE",
            role: "Honors Distinction",
            tenure: "2019",
            details: ["Credential ID: 20019092"],
            logo_pic: "/IMGassets/hbx.jpeg",
            top_move_perc: "-83%",
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
                    <EducationDetails elements={elements} key={index}/>
                </div>

            ))}
            {/* <Button className={styles.button} buttonName={"\u25c0"} handleClick={forwardClick} /> <Button className={styles.button} buttonName={"\u25b6"} handleClick={backClick} /> */}

            {/* </div> */}
            {/* </rect> */}

        </>
    )
}
