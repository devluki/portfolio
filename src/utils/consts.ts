// Data for Card components

import spriteIcons from "../assets/sprite.svg";
import spriteIconsDefs from "../assets/symbol-defs.svg";
// import projectIcons from "../assets/projects_logos.svg";

export const TECH_STACK_ROW = [
    { name: "HTML", icon: `${spriteIcons}#icon-html-five` },
    { name: "TypeScript", icon: `${spriteIcons}#icon-typescript` },
    { name: "React", icon: `${spriteIcons}#icon-react` },
    { name: "CSS", icon: `${spriteIcons}#icon-css3` },
    { name: "Node", icon: `${spriteIcons}#icon-node-dot-js` },
    { name: "FireBase", icon: `${spriteIcons}#icon-firebase` },
    { name: "SASS", icon: `${spriteIcons}#icon-sass` },
    { name: "JavaScript", icon: `${spriteIcons}#icon-javascript` },
    // { name: "Figma", icon: `${spriteIcons}#icon-figma` },
    { name: "MongoDB", icon: `${spriteIcons}#icon-mongodb` },
    // { name: "MySQL", icon: `${spriteIcons}#icon-mysql` },
    { name: "Redux", icon: `${spriteIcons}#icon-redux` },
];

export const SERVICES = [
    //TODO: Add second row?
    {
        title: ["servicesCard.heading--1", "servicesCard.heading--2"],

        icon: `${spriteIconsDefs}#icon-cut`,
        description: "services.description-tailor-made-solutions",
    },
    {
        title: ["servicesCard.heading--3"],
        icon: `${spriteIconsDefs}#icon-display`,
        description: "services.description-frontend",
    },
    {
        title: ["servicesCard.heading--4"],
        icon: `${spriteIconsDefs}#icon-cogs`,
        description: "services.description-backend",
    },
];

export const PROJECTS = [
    {
        projectTimeleine: "projects.latestProject",
        projectName: "Portfolio",
        releaseYear: "2024",
        icon: `${spriteIconsDefs}#logo_portfolio`,
        description: "projects.description-portfolio",
        stack: [
            `${spriteIcons}#icon-typescript`,
            `${spriteIcons}#icon-react`,

            `${spriteIcons}#icon-sass`,
            `${spriteIcons}#icon-node-dot-js`,
        ],
        liveLink: "",
        githubLink: "https://github.com/devluki/portfolio",
    },
    {
        projectTimeleine: "projects.firstProject",
        projectName: "Kejtrip",
        releaseYear: "2022",
        icon: `${spriteIconsDefs}#logo_kejtrip`,
        description: "projects.description-kejtrip",
        stack: [
            `${spriteIcons}#icon-html-five`,
            `${spriteIcons}#icon-css3`,
            `${spriteIcons}#icon-javascript1`,
            `${spriteIcons}#icon-node-dot-js`,
            `${spriteIcons}#icon-mongodb`,
        ],
        liveLink: "https://kejtrip.pl/",
        githubLink: "https://github.com/devluki/KejTrip",
    },
];

// Data for background particle animation
export const PARTICLES_COUNT = 400;

// Data for stack animation

export const FPS = 20;
export const ANIMATION_STROKE = 1;
