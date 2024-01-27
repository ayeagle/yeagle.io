import * as React from "react";
import {
  otherProjects,
  mainProjects,
  MainProjectDetails,
} from "../componentData/ProjectData";
import styles from "./ProjectDetails.module.css";
import Spacer from "../bio/Spacer";
import * as icons from "react-icons/fa";

export default function ProjectDetails(): JSX.Element {
  return (
    <div>
      <Spacer height={"50px"} />

      {mainProjects.map((project: MainProjectDetails) => (
        <div key={project.id} className={styles.project_container_all}>
          <div
            className={
              project.orientation === "left"
                ? styles.project_container_left
                : styles.project_container_right
            }
          >
            <div
              className={
                project.orientation === "left"
                  ? styles.project_details_wrapper_left
                  : styles.project_details_wrapper_right
              }
            >
              <h5
                className={
                  project.orientation === "left"
                    ? styles.project_header_left
                    : styles.project_header_right
                }
                style={{ color: "inherit" }}
              >
                {" "}
                Featured Project
              </h5>

              <h3
                className={
                  project.orientation === "left"
                    ? styles.project_header_left
                    : styles.project_header_right
                }
              >
                {project.name}
              </h3>
              <h4
                className={
                  project.orientation === "left"
                    ? styles.project_details_left
                    : styles.project_details_right
                }
              >
                {project.description}
              </h4>
              <h5
                className={
                  project.orientation === "left"
                    ? styles.project_technicals_left
                    : styles.project_technicals_right
                }
              >
                {project.code.map((thing, index) => {
                  return <div key={index}>{thing}</div>;
                })}
              </h5>
            </div>
            <img
              className={
                project.orientation === "left"
                  ? styles.project_image_left
                  : styles.project_image_right
              }
              src={project.image_link}
            />
            <div
              className={
                project.orientation === "left"
                  ? styles.project_image_blocker_left
                  : styles.project_image_blocker_right
              }
            ></div>
          </div>
          <Spacer height={"150px"} />
        </div>
      ))}
      <Spacer height={"20px"} />

      <div className={styles.other_projects}>
        {otherProjects.map((units, index) => (
          <div key={units.id} className={styles.other_projects_unit_container}>
            <h3
              style={{
                position: "absolute",
                fontSize: "2vw",
                color: "rgb(0, 187, 224)",
                top: "10%",
                margin: "1vw",
              }}
            >
              {units.name}
            </h3>
            <Spacer height="10vw" />
            <h5
              style={{
                position: "relative",
                fontSize: "1.3vw",
                top: "8%",
                padding: "1vw",
                justifyContent: "center",
              }}
            >
              {units.description}
            </h5>
            <Spacer height="6vw" />

            <div
              style={{
                position: "relative",
                fontSize: "1.3vw",
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              {units.code.map((item) => (
                <h5
                  style={{
                    position: "relative",
                    fontSize: "1.3vw",
                    display: "flex",
                    flexDirection: "row",
                    flexWrap: "wrap",
                    padding: ".5vw",
                  }}
                >
                  {item}
                </h5>
              ))}
            </div>

            <div
              style={{
                position: "relative",
                display: "flex",
                flexDirection: "row",
                justifyContent: "right",
                padding: "2vw",
              }}
            >
              <div style={{ paddingRight: "1vw", fontSize: "1.5vw" }}>
                {" "}
                <a href={units.website} target="_blank">
                  <icons.FaCodeBranch style={{ fill: "white" }} />
                </a>
              </div>
              <div style={{ paddingLeft: "1vw", fontSize: "1.5vw" }}>
                <a href={units.github} target="_blank">
                  <icons.FaGithub style={{ fill: "white" }} />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
