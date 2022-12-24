import Waves from "@components/pomodomo/Waves";
import Break from '@components/pomodomo/Break';
import Button from "@components/pomodomo/Button";
import NavBar from "@components/bio/navbar";
import BasicPageTop from "@components/bio/BasicPageTop";
import BasicPageBottom from "@components/bio/BasicPageBottom";
import SVGSpacers from "@components/bio/SVGSpacers";
import Resizer from "@components/functional/Resizer";
import { useEffect, useState } from "react";
import PNGSpacers from "@components/bio/PNGSpacers";
import styles from './master.module.css';
import Iceland from "@components/bio/Iceland";

import Lines from "@components/bio/Lines";

const courses = [
    {
        id: 1,
        words: "Web Dev Bootcamp (Course)",
        url: "https://www.udemy.com/course/the-web-developer-bootcamp/",
    }, {
        id: 6,
        words: "FB/Meta 6 week engineer Bootcamp curriculum (Course)",
        url: "https://www.facebook.com/notes/10158790871917200/",
    }, {
        id: 7,
        words: "2022 Complete Python Bootcamp",
        url: "https://www.udemy.com/course/complete-python-bootcamp/",
    }
]

const books = [
    {
        id: 2,
        words: "Road to React (Book)",
        url: "https://www.roadtoreact.com/",
    }, {
        id: 3,
        words: "Full Stack Serverless (Book)",
        url: "https://www.oreilly.com/library/view/full-stack-serverless/9781492059882/",
    }, {
        id: 4,
        words: "Designing Data-Intensive Applications (Book)",
        url: "https://www.oreilly.com/library/view/designing-data-intensive-applications/9781491903063/",
    }, {
        id: 5,
        words: "System Design (Book)",
        url: 0,
    },
]

const stack = [
    {
        id: 1,
        words: "React",
        url: 0,
    }, {
        id: 2,
        words: "Node.js ",
        url: 0,
    }, {
        id: 3,
        words: "ExpressJS",
        url: 0,
    }, {
        id: 4,
        words: "Java",
        url: 0,
    }, {
        id: 5,
        words: "AWS RDS",
        url: 0,
    }, {
        id: 6,
        words: "PostgreSQL",
        url: 0,
    }
]

const frameworks = [
    {
        id: 1,
        words: "Python",
        url: 0,
    }, {
        id: 2,
        words: "PHP/Hack",
        url: 0,
    }, {
        id: 3,
        words: "Vanilla JS",
        url: 0,
    }, {
        id: 4,
        words: "Axios",
        url: 0,
    }, {
        id: 5,
        words: "Bootstrap",
        url: 0,
    }, {
        id: 6,
        words: "Presto",
        url: 0,
    }, {
        id: 7,
        words: "Scuba",
        url: 0,
    }
]



export default function Coding() {

    const [height, updateHeight] = useState(0)
    const [width, updateWidth] = useState(0)

    // console.log("this is the height (start) ==> " + height)
    //     console.log("this is the width (start) ==> " + width)


    useEffect(() => {
        // Update the height and width state when the component is mounted
        updateHeight(window.innerHeight)
        updateWidth(window.innerWidth)
        console.log("this is the height (useeffect) ==> " + height)
        console.log("this is the width (useeffect) ==> " + width)

        function handleWindowResize() {
            // Update the height and width state when the window is resized
            updateHeight(window.innerHeight)
            updateWidth(window.innerWidth)
        }

        // Add the event listener
        window.addEventListener('resize', handleWindowResize)

        // Clean up the event listener when the component unmounts
        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    }, [])


    return (
        <div className={styles.master}>
            <BasicPageTop />
            <NavBar />
            <SVGSpacers type="bot" num="1" width={width} />

            <div style={{position:"relative"}}>
                <img src="/IMGassets/rocks.png" className={styles.image} />
                <div className={styles.image_text_center} >Self-taught frontend programmer and product enthusiast with a passion for building and scaling customer-obsessed solutions.</div>
            </div>
            <SVGSpacers type="top" num="4" width={width} />
            <SVGSpacers type="bot" num="1" width={width} />
            <h2>Self-Learned Curriculum</h2>
            <div className={styles.list}>
                <span>Courses
                    <Lines content={courses} />
                </span>
            </div>
            <div className={styles.list}>
                <span>Books
                    <Lines content={books} />
                </span>
            </div>
            <SVGSpacers type="top" num="5" width={width} />
            <SVGSpacers type="bot" num="3" width={width} />
            <h2>Projects</h2>

            <div className={styles.list}>
                <span>ork
                    <li> Created and maintain multibillion row structured datasets on user reports </li>
                    <li> Created multiple PHP methods to extract information from production code to be used in Hive tables</li>
                </span>
            </div>
            <div className={styles.list}>
                <span>personal
                    <li> Personal Website </li>
                    <li> Pomodomo</li>
                </span>
            </div>
            <SVGSpacers type="top" num="1" width={width} />
            <SVGSpacers type="bot" num="2" width={width} />
            <h2>Languages + Stack</h2>
            <div className={styles.list}>
                <div>Favorite Stack
                    <Lines content={stack} />

                </div>
            </div>
            <div className={styles.list}></div>
            <div className={styles.list}>
                <div>Other Languages/Frameworks
                    <Lines content={frameworks} />

                </div>
            </div>

            <SVGSpacers type="top" num="4" width={width} />
            <div className={styles.box}>
                <BasicPageBottom />
            </div>


        </div>
    )
}
