export type OtherProjectDetails = {
  id: number;
  name: string;
  description: string;
  code: Array<string>;
  website: string;
  github: string;
};

export const otherProjects: Array<OtherProjectDetails> = [
  {
    id: 0,
    name: "Personal Site v1",
    description: "Original version of personal website",
    code: ["React", "Redux", "SVGs"],
    website: "",
    github: "",
  },
  {
    id: 1,
    name: "Pomodomo",
    description: "Custom Pomodoro timer with APIs",
    code: ["React", "NextJS", "Express"],
    website: "",
    github: "",
  },
  {
    id: 2,
    name: "DelayPI",
    description: "Service for registering future message sends.",
    code: ["Typescript"],
    website: "",
    github: "",
  },
];

export type MainProjectDetails = {
  id: number;
  name: string;
  description: string;
  code: Array<string>;
  website: string;
  github: string;
};

export const mainProjects: Array<MainProjectDetails> = [
  {
    id: 2,
    name: "DelayPI",
    description: "Service for registering future message sends.",
    code: ["Typescript"],
    website: "",
    github: "",
  },
];

// <div className={styles.project_details_wrapper_left}>
//     <h5 className={styles.project_header_left} style={{ color: "inherit" }}> Featured Project</h5>

//     <h3 className={styles.project_header_left}> Giftee.io </h3>  --- NAME
//     <h4 className={styles.project_details_left}>  Fullstack application to make gift exchanges with friends and family easier. </h4> --- description
//     <div className={styles.project_technicals_left}>   --- code
//         <h5>React</h5>
//         <h5>NextJS</h5>
//         <h5>NodeJS</h5>
//         <h5>RDS</h5>
//         <h5>EC2</h5>
//     </div>
// </div>
// </div>
