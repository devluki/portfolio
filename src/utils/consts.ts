// Data for Card components

import spriteIcons from "../assets/sprite.svg";

export const SOFTWARE = [
    { name: "Web Apps", icon: `${spriteIcons}#icon-window` },
    { name: "Mobile Apps", icon: `${spriteIcons}#icon-mobile` },
    { name: "E-commerce", icon: `${spriteIcons}#icon-cart` },

    { name: "Outsourcing", icon: `${spriteIcons}#icon-people_alt` },
];

export const TECH_STACK_ROW = [
    // { name: "Swift", icon: `${spriteIcons}#icon-swift` },
    // { name: "Flutter", icon: `${spriteIcons}#icon-flutter` },
    { name: "TypeScript", icon: `${spriteIcons}#icon-typescript` },
    { name: "React", icon: `${spriteIcons}#icon-react` },
    { name: "Node", icon: `${spriteIcons}#icon-node-dot-js` },
    { name: "FireBase", icon: `${spriteIcons}#icon-firebase` },
    { name: "SASS", icon: `${spriteIcons}#icon-sass` },
    { name: "JavaScript", icon: `${spriteIcons}#icon-javascript` },
    { name: "Figma", icon: `${spriteIcons}#icon-figma` },
    { name: "MongoDB", icon: `${spriteIcons}#icon-mongodb` },
    // { name: "MySQL", icon: `${spriteIcons}#icon-mysql` },
    { name: "Redux", icon: `${spriteIcons}#icon-redux` },
];

export const SERVICES = [
    //TODO: Add second row?
    {
        title: ["servicesCard.heading--1", "servicesCard.heading--2"],

        icon: `${spriteIcons}#icon-typescript`,
        row1: "key1",
        row2: "key2",
        row3: "key3",
    },
    {
        title: ["servicesCard.heading--3"],
        icon: `${spriteIcons}#icon-mongodb`,
        row1: "key1",
        row2: "key2",
        row3: "key3",
    },
    {
        title: ["servicesCard.heading--4"],
        icon: `${spriteIcons}#icon-redux`,
        row1: "key1",
        row2: "key2",
        row3: "key3",
    },
];

// Data for background particle animation
export const PARTICLES_COUNT = 400;

// Data for stack animation

export const FPS = 20;
export const ANIMATION_STROKE = 1;
