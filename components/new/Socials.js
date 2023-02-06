import React from "react"
import * as icons from 'react-icons/fa';
import styles from './Socials.module.css'

export default function Socials({size,loc, orientation}) {
    // console.log(size + "?this is the size prop")
    // console.log(loc + "?this is the loc prop")

    function sendEmail() {
        window.open('mailto:alexyeagle@gmail.com,alex@yeagle.io?subject=Would love to chat!&body=Hey Alex I saw your website and...');
    }


    return (
        <>
            {/* <icons.FaFacebook /> */}
            {/* <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css" integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossOrigin="anonymous" /> */}
            <div className={styles.social_container} style={{textAlign:loc, flexDirection: orientation}}>
                <div className={styles.social} style={{fontSize:size, justifyContent:loc}}> <a href="https://www.yeaglesbagels.com" target="_blank"><icons.FaCodeBranch style={{fill:"white"}} /></a></div>
                <div className={styles.social} style={{fontSize:size, justifyContent:loc}}> <a href="https://twitter.com/AlexYeagle" target="_blank"><icons.FaTwitter style={{fill:"white"}}/></a></div>
                <div className={styles.social} style={{fontSize:size, justifyContent:loc}}> <a href="https://www.linkedin.com/in/ayeagle/" target="_blank"><icons.FaLinkedin style={{fill:"white"}}/></a></div>
                <div className={styles.social} style={{fontSize:size, justifyContent:loc}}> <a href="https://github.com/ayeagle" target="_blank"><icons.FaGithub style={{fill:"white"}}/></a></div>
                <div className={styles.social} style={{fontSize:size, justifyContent:loc}}> <a href="https://www.instagram.com/alexyeagle/" target="_blank"><icons.FaInstagram style={{fill:"white"}}/></a></div>
                <div className={styles.social} style={{fontSize:size, justifyContent:loc}} onClick={sendEmail}><a> <icons.FaEnvelope style={{fill:"white"}}/></a></div>

            </div>
        </>
    )
}
