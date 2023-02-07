import { MetaHTMLAttributes } from "react"
import styles from './PageBot.module.css'
import { useState, useEffect } from "react"


export default function BasicPageBottom() {



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
      <script src="https://code.jquery.com/jquery-3.2.1.slim.min.js" integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js" integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossOrigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js" integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl" crossOrigin="anonymous"></script>

      {/* <div style={{ fontSize: "3vw"}}> */}
      {/* <p>
          <br/> <a href="/" style={{color:"white"}}>Home</a>
          <br/> <a href="/portfolio" style={{color:"white"}}>Portfolio</a>
          <br/> <a href="/coding" style={{color:"white"}}>Coding</a>
          <br/> <a href="/resume" style={{color:"white"}}>Resume</a>
          <br/> <a href="/creative" style={{color:"white"}}>Creative</a>
          <br/> <a href="/contact" style={{color:"white"}}>Contact</a>

          <br /> <Socials size={"3vw"} /> </p>
      </div> */}

      <div className=" navbar-collapse" id="navbarNav">
        {/* <ul className="navbar-nav"> */}

        <span className={styles.bottom}>
          <h4 className={createStyle} style={{ paddingLeft: "1.7vw", paddingRight: "1.7vw" }}> <a className={styles.bottom} href="#top">{`<`}Top{`/>`}</a></h4>
          <h4 className={resumeStyle} style={{ paddingLeft: "1.7vw", paddingRight: "1.7vw" }}> <a className={styles.bottom} href="#resume">{`<`}Resume{`/>`}</a></h4>
          {/* <h4 className={codingStyle} style={{ paddingLeft: "1.7vw", paddingRight: "1.7vw" }}> <a className={styles.bottom} href="/coding">{`<`}Dev XP{`/>`}</a></h4> */}
          <h4 className={portStyle} style={{ paddingLeft: "1.7vw", paddingRight: "1.7vw" }}> <a className={styles.bottom} href="#projects">{`<`}Projects{`/>`}</a> </h4>
          <h4 className={contactStyle} style={{ paddingLeft: "1.7vw", paddingRight: "1.7vw" }}> <a className={styles.bottom} href="#contact">{`<`}Contact{`/>`}</a></h4>
        </span>
        {/* </ul> */}
      </div>
      <footer className={styles.footer}>
        Designed and built by  <img src="/bagel_logo.png" alt="Netlify Logo" className={styles.logo} /> Alex Yeagle
        {/* <div style={{ fontSize: "2vw", fontStyle: "italic" }}>All media is my own</div> */}
      </footer>    </>
  )
}





// <a className="nav-link" href="/coding">Coding</a>
//                         </li>
//                         <li className={resumeStyle}>
//                             <a className="nav-link" href="/resume">Resume</a>
//                         </li>
//                         <li className={createStyle}>
//                             <a className="nav-link" href="creative">Creative</a>
//                         </li>
//                         <li className={contactStyle}>
//                             <a className="nav-link" href="/contact">Contact</a>
