import { useEffect, useState } from "react";
import Socials from "./Socials";
// import LoginButton from "./LoginButton";
import { Property } from "csstype";
import { NavScrollTarget, PageNavItem } from "../types/NavTypes";

const page_header_payload: PageNavItem[] = [
  {
    name: "Resume",
    class_name: "nav-link",
    padding_value: ".5vw",
    scroll_target: NavScrollTarget.RESUME,
  },
  {
    name: "Projects",
    class_name: "nav-link",
    padding_value: ".5vw",
    scroll_target: NavScrollTarget.PROJECTS,
  },
  {
    name: "Contact",
    class_name: "nav-link",
    padding_value: ".5vw",
    scroll_target: NavScrollTarget.CONTACT,
  },
];

export default function NavBar() {
  const [height, updateHeight] = useState(0);
  const [width, updateWidth] = useState(0);

  // console.log("this is the height (start) ==> " + height)
  //     console.log("this is the width (start) ==> " + width)

  useEffect(() => {
    // Update the height and width state when the component is mounted
    updateHeight(window.innerHeight);
    updateWidth(window.innerWidth);
    console.log("this is the height (useeffect) ==> " + height);
    console.log("this is the width (useeffect) ==> " + width);

    function handleWindowResize() {
      // Update the height and width state when the window is resized
      updateHeight(window.innerHeight);
      updateWidth(window.innerWidth);
    }

    // Add the event listener
    window.addEventListener("resize", handleWindowResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  // const location = useLocation();
  // console.log(location.pathname);

  const [portStyle, upP] = useState("nav-item");
  const [codingStyle, upC] = useState("nav-item");
  const [resumeStyle, upR] = useState("nav-item");
  const [createStyle, upCW] = useState("nav-item");
  const [contactStyle, upCO] = useState("nav-item");

  const scrollToSection = (scroll_target: NavScrollTarget) => {
    console.log(scroll_target);

    const section = document.getElementById(scroll_target as string);
    console.log(section);
    console.log("was triggered");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

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

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-black"
        style={{ background: "none", zIndex: 1000, position: "sticky", top: 0 }}
      >
        <h3>
          <a
            style={{
              color: "rgb(197, 197, 197)",
              paddingRight: "2vw",
              textDecoration: "none",
            }}
            href="/main"
          >
            Alex Yeagle
          </a>
        </h3>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarNav"
          style={{ top: "2px", position: "relative" }}
        >
          <ul className="navbar-nav">
            {page_header_payload.map((item) => (
              <h4
                key={item.name}
                className={resumeStyle}
                style={{ padding: item.padding_value, cursor: "pointer" }}
                onClick={() => {
                  console.log("outer was clicked");
                  scrollToSection(item.scroll_target);
                }}
              >
                <div className="nav-link">{`<${item.name} />`}</div>
              </h4>
            ))}
            {/* 
            <h4 className={resumeStyle} style={{ padding: ".5vw" }}>
              <a
                className="nav-link"
                // href="#resume"
                onClick={() => scrollToSection("resume")}
              >
                {" "}
                {`<`}Resume{` />`}
              </a>
            </h4>
            <h4 className={portStyle} style={{ padding: ".5vw" }}>
              <a
                className="nav-link"
                onClick={() => scrollToSection("projects")}
              >
                {`<`}Projects{` />`}
              </a>
            </h4>
            <h4 className={contactStyle} style={{ padding: ".5vw" }}>
              <a
                className="nav-link"
                onClick={() => scrollToSection("contact")}
              >
                {`<`}Contact{` />`}
              </a>
            </h4> */}
            <h4
              className={contactStyle}
              style={{
                display: width < 992 ? "" : "none",
                padding: ".5vw",
                position: width < 992 ? "relative" : "absolute",
                margin: width < 992 ? "0 auto" : "",
                right: width < 992 ? "" : "0px",
              }}
            >
              <Socials size={"x-large"} loc={"right"} className="nav-link" />
            </h4>
          </ul>
          <br></br>
        </div>
      </nav>
    </>
  );
}
