import { MainProjectDetails, OtherProjectDetails } from "../types/DataPayloadTypes";


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


export const mainProjects: Array<MainProjectDetails> = [
  {
    id: 1,
    name: "Giftee.io",
    description:
      "Fullstack application to make gift exchanges with friends and family easier.",
    code: ["React", "Typescript", "RDS", "EC2"],
    orientation: "left",
    image_link: "newIMGassets/giftee.png",
    website: "",
    github: "",
  },
  {
    id: 2,
    name: "Meta Data Engineering",
    description:
      "  Created data pipelines that collect task/system insights and dashboards reporting on bug health and engineering throughput.",
    code: ["Presto", "Python", "Dataswarm", "Hive", "PHP"],
    orientation: "right",
    image_link: "newIMGassets/dataswarm.png",
    website: "",
    github: "",
  },
  {
    id: 3,
    name: "Actionable Feedback Tool",
    description:
      "An internal Meta tool that helps users action their product feedback, and provides summary stats for engineer fixes.",
    code: ["React", "Hack/PHP", "Python", "Presto"],
    orientation: "left",
    image_link: "newIMGassets/aft_2.png",
    website: "",
    github: "",
  },
  {
    id: 4,
    name: "Flytrap",
    description:
      "Chrome extension to fill, track, and organize unique versions of your main email when signing up for services.",
    code: ["React", "Typescript", "Chrome APIs"],
    orientation: "right",
    image_link: "newIMGassets/flytrap.png",
    website: "",
    github: "",
  },
];
