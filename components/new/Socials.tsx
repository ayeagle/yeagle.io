import React from "react";
import * as icons from "react-icons/fa";
import styles from "./Socials.module.css";
import { Property } from "csstype";



export default function Socials({
  size,
  loc,
  orientation,
  className,
}: {
  size?: string;
  loc?: string;
  orientation?: any;
  className?: string;
}) {
  // console.log(size + "?this is the size prop")
  // console.log(loc + "?this is the loc prop")

  function sendEmail() {
    window.open(
      "mailto:alexyeagle@gmail.com,alex@yeagle.io?subject=Would love to chat!&body=Hey Alex I saw your website and..."
    );
  }

  return (
    <>
      <div
        className={styles.social_container}
        style={{
          textAlign: (loc as Property.TextAlign) || "left",
          flexDirection: orientation,
        }}
      >
        <div
          className={styles.social}
          style={{ fontSize: size, justifyContent: loc }}
        >
          {" "}
          <a href="https://www.yeaglesbagels.com" target="_blank">
            <icons.FaCodeBranch style={{ fill: "white" }} />
          </a>
        </div>
        <div
          className={styles.social}
          style={{ fontSize: size, justifyContent: loc }}
        >
          {" "}
          <a href="https://twitter.com/AlexYeagle" target="_blank">
            <icons.FaTwitter style={{ fill: "white" }} />
          </a>
        </div>
        <div
          className={styles.social}
          style={{ fontSize: size, justifyContent: loc }}
        >
          {" "}
          <a href="https://www.linkedin.com/in/ayeagle/" target="_blank">
            <icons.FaLinkedin style={{ fill: "white" }} />
          </a>
        </div>
        <div
          className={styles.social}
          style={{ fontSize: size, justifyContent: loc }}
        >
          {" "}
          <a href="https://github.com/ayeagle" target="_blank">
            <icons.FaGithub style={{ fill: "white" }} />
          </a>
        </div>
        <div
          className={styles.social}
          style={{ fontSize: size, justifyContent: loc }}
        >
          {" "}
          <a href="https://www.instagram.com/alexyeagle/" target="_blank">
            <icons.FaInstagram style={{ fill: "white" }} />
          </a>
        </div>
        <div
          className={styles.social}
          style={{ fontSize: size, justifyContent: loc }}
          onClick={sendEmail}
        >
          <a>
            {" "}
            <icons.FaEnvelope style={{ fill: "white" }} />
          </a>
        </div>
      </div>
    </>
  );
}
