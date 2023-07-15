import { MutableRefObject } from "react";
import BorderController from "./BorderController";
import Socials from "./Socials";
import NavButton from "./NavButton";
import styles from 'pages/main.module.css'

function sendEmail() {
    window.open(
      "mailto:alexyeagle@gmail.com,alex@yeagle.io?subject=Would love to chat!&body=Hey Alex I saw your website and..."
    );
  }

export default function ContactSection(ref: MutableRefObject<HTMLDivElement>): JSX.Element {

    return(
        <><div
        style={{
          height: "auto",
          width: "50vw",
          margin: "0 auto",
          position: "relative",
        }}
      >
        <BorderController {...ref} />

        <div id="contact" style={{ zIndex: "100", position: "relative" }}>
          <div style={{ zIndex: "10", position: "relative" }}>
            <Socials
              size={"3vw"}
              loc={"center"}
            //   style={{ zIndex: "100", position: "relative" }}
            />
            <h3 className={styles.contact_element}>
              +1 (559) 451 6174
            </h3>
            <h3 className={styles.contact_element} onClick={sendEmail}>
              alexyeagle@gmail.com
            </h3>
            <h3 className={styles.contact_element} onClick={sendEmail}>
              alex@yeagle.io
            </h3>
            <h3 className={styles.contact_element}>SF, CA</h3>
            <br></br>
          </div>
        </div>
        <a>
          <NavButton
            buttonName={"Get in touch"}
            handleClick={sendEmail}
            // style={{ zIndex: "-1", position: "relative" }}
          />
        </a>
      </div></>
    )
}