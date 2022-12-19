import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Socials from "./Socials";


export default function NavBar() {


    // const location = useLocation();
    // console.log(location.pathname);

    const [portStyle, upP] = useState("nav-item")
    const [codingStyle, upC] = useState("nav-item")
    const [resumeStyle, upR] = useState("nav-item")
    const [createStyle, upCW] = useState("nav-item")
    const [contactStyle, upCO] = useState("nav-item")

    useEffect(() => {
        console.log(window.location.pathname)

        switch (window.location.pathname) {
            case "/portfolio":
                upP(portStyle + " active")
                return

            case "/about":
                portStyle + " active"
                return

            case "/coding":
                upC(codingStyle + " active")
                return

            case "/resume":
                upR(resumeStyle + " active")
                return

            case "/creative work":
                upCW(createStyle + " active")
                return

            case "/contact":
                upCO(contactStyle + " active")
                return


        }

    }, [])


    return (
        <>
            {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" /> */}
            <nav className="navbar navbar-expand-lg navbar-dark bg-black">
                <a className="navbar-brand" href="/about">Alex Yeagle</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className={portStyle}>
                            <a className="nav-link" href="#">Portfolio <span className="sr-only">(current)</span></a>
                        </li>
                        <li className={codingStyle}>
                            <a className="nav-link" href="/coding">Coding</a>
                        </li>
                        <li className={resumeStyle}>
                            <a className="nav-link" href="/resume">Resume</a>
                        </li>
                        <li className={createStyle}>
                            <a className="nav-link" href="creative">Creative</a>
                        </li>
                        <li className={contactStyle}>
                            <a className="nav-link" href="/contact">Contact</a>
                        </li>
                        <li className={contactStyle}>
                            <Socials size={"x-large"} loc={"right"}/>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}
