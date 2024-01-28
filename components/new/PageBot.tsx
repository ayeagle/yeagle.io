import { MetaHTMLAttributes } from "react";
import styles from "./PageBot.module.css";
import { useState, useEffect } from "react";
import { NavScrollTarget, PageNavItem } from "../types/NavTypes";

const page_bottom_payload: PageNavItem[] = [
  {
    name: "Top",
    class_name: "nav-link",
    padding_value: "1.7vw",
    scroll_target: NavScrollTarget.TOP,
  },
  {
    name: "Resume",
    class_name: "nav-link",
    padding_value: "1.7vw",
    scroll_target: NavScrollTarget.RESUME,
  },
  {
    name: "Projects",
    class_name: "nav-link",
    padding_value: "1.7vw",
    scroll_target: NavScrollTarget.PROJECTS,
  },
  {
    name: "Contact",
    class_name: "nav-link",
    padding_value: "1.7vw",
    scroll_target: NavScrollTarget.CONTACT,
  },
];

export default function BasicPageBottom() {
  const [portStyle, upP] = useState<string>("nav-item");
  const [codingStyle, upC] = useState<string>("nav-item");
  const [resumeStyle, upR] = useState<string>("nav-item");
  const [createStyle, upCW] = useState<string>("nav-item");
  const [contactStyle, upCO] = useState<string>("nav-item");

  useEffect(() => {
    console.log(window.location.pathname);

    switch (window.location.pathname) {
      case "/portfolio":
        upP(portStyle + " active");
        return;

      case "/about":
        portStyle + " active";
        return;

      case "/coding":
        upC(codingStyle + " active");
        return;

      case "/resume":
        upR(resumeStyle + " active");
        return;

      case "/creative work":
        upCW(createStyle + " active");
        return;

      case "/contact":
        upCO(contactStyle + " active");
        return;
    }
  }, []);

  const scrollToSection = (scroll_target: NavScrollTarget) => {
    console.log(scroll_target);

    const section = document.getElementById(scroll_target as string);
    console.log(section);
    console.log("was triggered");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <script
        src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
        integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
        integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
        integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
        crossOrigin="anonymous"
      ></script>
      <div className=" navbar-collapse" id="navbarNav">
        <span className={styles.bottom}>
          {page_bottom_payload.map((item) => (
            <h4
              key={item.name}
              className={resumeStyle}
              style={{
                paddingLeft: item.padding_value,
                paddingRight: item.padding_value,
                cursor: "pointer",
              }}
              onClick={() => {
                console.log("outer was clicked");
                scrollToSection(item.scroll_target);
              }}
            >
              <div className="nav-link">{`<${item.name}/>`}</div>
            </h4>
          ))}
        </span>
      </div>
      <footer className={styles.footer}>
        Designed and built by{" "}
        <img src="/bagel_logo.png" alt="Netlify Logo" className={styles.logo} />{" "}
        Alex Yeagle
      </footer>
    </>
  );
}
