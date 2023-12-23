export type JobDetailsItem = [string, number];

export type JobSectionDetails = {
  id: number;
  company: string;
  company_url: string;
  role: string;
  tenure: string;
  details: Array<JobDetailsItem>;
  logo_pic: string;
  hard_skills: Array<JobDetailsItem>;
  soft_skills: Array<JobDetailsItem>;
  top_move_perc: string;
};

export const jobDetailsArray: Array<JobSectionDetails> = [
  {
    id: 0,
    company: "",
    company_url: "",
    role: "",
    tenure: "",
    details: [],

    logo_pic: "",
    hard_skills: [
    ],
    soft_skills: [
    ],
    top_move_perc: "0vw",
  },
  {
    id: 1,
    company: "Facebook",
    company_url: "https://www.metacareers.com/",
    role: "Product Development",
    tenure: "2022-Present",
    details: [
      [
        "Engineer and maintain multibillion-row structured data pipelines, tables, and dashboards used by FB, Instagram, Messenger, and Reality Labs reporting teams ",
        0,
      ],
      [
        "Lead the product strategy and execution for deprecation of Neighborhoods, a hyper-local FB product with 5 million MAUs",
        1,
      ],
      [
        "Operationalize signal collection and prioritization for the experimental pre-launch pillar of the FB app",
        2,
      ],
      [
        "Synthesize user signal into roadmap-actionable dashboards and reporting",
        3,
      ],
      [
        "Drive cross functional quality and launch-readiness initiatives with eng, product, design, QA, privacy, legal and UXR",
        4,
      ],
    ],
    logo_pic: "/NewIMGassets/METAL.png",
    hard_skills: [
      ["Postgres/Presto", 86],
      ["JS/React", 67],
      ["Hack/PHP", 40],
      ["Python", 30],
    ],
    soft_skills: [
      ["Influence w/o Authority", 67],
      ["Feature/Fix Efficiency", 55],
      ["Finding PMF", 25],
    ],
    top_move_perc: "5vw",
  },
  {
    id: 2,
    company: "CaptivateIQ",
    company_url: "https://www.captivateiq.com/",
    role: "Product Solutions Consultant",
    tenure: "2021-2022",
    details: [
      [
        "Project manage calculation model design and build schedule for MM-ENT companies",
        0,
      ],
      [
        "Leverage data architecture, manipulation, and scripting to parse and synthesize multiple data sources into clear and accurate commission outputs",
        1,
      ],
      [
        "Use a host of in-house formulas based on SQL, Excel, and Python to build performant calculation models",
        2,
      ],
      [
        "Collaborate with product and engineering teams to streamline performance and expand platform functionality",
        3,
      ],
      [
        "Train new users and team-members on data manipulation and modeling best practices",
        4,
      ],
    ],

    logo_pic: "/NewIMGassets/CIQL.png",
    hard_skills: [
      ["Excel", 83],
      ["SQL", 70],
    ],
    soft_skills: [
      ["Critical Problem Solving", 85],
      ["Product Strategy", 72],
      ["Collaboration", 40],
    ],
    top_move_perc: "3vw",
  },
  {
    id: 3,
    company: "Guide.co",
    company_url: "https://guide.co/",
    role: "Product Growth Lead",
    tenure: "2019-2020",
    details: [
      [
        "Worked weekly with eng team and C-suite to uncover PMF and bring an early-access platform to market",
        0,
      ],
      [
        "Collaborated on sourcing, design, and execution of product growth features",
        1,
      ],
      [
        "Executed 23 growth experiments in 20Q1, tracking towards a 1m user growth rate for 2020",
        2,
      ],
      ["Analyzed usage data weekly to inform adoption strategy", 3],
      [
        "Reduced activation time from 1.5 weeks to 45 minutes while increasing first week engagement by 200%+",
        4,
      ],
      [
        "Uncovered and prioritized customer pains against technical feasibility on a daily basis",
        6,
      ],
    ],
    logo_pic: "/NewIMGassets/GUIDEL.png",
    hard_skills: [
      ["Excel", 60],
      ["Salesforce", 45],
      ["Product/Design Tooling", 30],
      ["SQL", 15],
    ],
    soft_skills: [
      ["Product Strategy", 83],
      ["Growth Strategy", 75],
      ["Operating in Uncertainty", 43],
    ],
    top_move_perc: "2.5vw",
  },
  {
    id: 4,
    company: "Sift",
    company_url: "https://sift.com/",
    role: "Business Development Lead",
    tenure: "2018-2019",
    details: [
      [
        "Worked closely with Head of GTM and Marketing team weekly to iterate and improve inbound strategy for the global business development team (SF, AZ, EU)",
        0,
      ],
      [
        "Re-designed inbound lead pipeline that improved conversion to sale by 300% in first 6 months (1.5 to 4.5%)",
        1,
      ],
      [
        "Implemented lead filtering logic that reduced inbound burden by ~30% without affecting sales meeting output ",
        2,
      ],
    ],

    logo_pic: "/NewIMGassets/SIFTL.png",
    hard_skills: [
      ["Salesforce", 49],
      ["Excel", 32],
    ],
    soft_skills: [
      ["Leadership", 84],
      ["Process Optimization", 69],
      ["Project Scoping", 42],
      ["Collaboration", 33],
    ],
    top_move_perc: "6vw",
  },
];
