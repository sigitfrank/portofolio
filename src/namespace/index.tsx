import { SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiMysql, SiNodedotjs, SiExpress, SiBootstrap, SiMobx, SiRedux, SiSocketdotio, SiMongodb, SiGraphql, SiMaterialui } from "react-icons/si"

import { ExperienceInterface, LinkInterface, ProjectInterface, SkillListInterface } from "../interfaces/interfaces"
import calculateDuration from "../utils/calculateDuration"

export const links: LinkInterface[] = [
    {
        label: 'Profile',
        value: 'profile',
        next: 'skill'
    },
    {
        prev: 'profile',
        label: 'Skill',
        value: 'skill',
        next: 'experience'
    },
    {
        prev: 'skill',
        label: 'Experience',
        value: 'experience',
        next: 'project'
    },
    {
        prev: 'experience',
        label: 'Project',
        value: 'project',
        next: 'contact'
    },
    {
        prev: 'project',
        label: 'Contact',
        value: 'contact',
    },
]

export const birthday: Date = new Date('1998-07-23')

export const profileDescription: string = `A passionate web developer especially in front end side. Love to collaborate with people and work as a team. Eager to learn and teach others. Giving full spirit to every projects that I've worked for.`

export const skillList: SkillListInterface[] = [
    {
        label: 'Html',
        icon: <span> <SiHtml5 className="html" /></span>,
        link: 'https://developer.mozilla.org/en-US/docs/Web/HTML/'
    },
    {
        label: 'CSS',
        icon: <span> <SiCss3 className='css' /></span>,
        link: 'https://developer.mozilla.org/en-US/docs/Web/CSS/'

    },
    {
        label: 'JavaScript',
        icon: <span> <SiJavascript className='javascript' /></span>,
        link: 'https://www.javascript.com/'

    },
    {
        label: 'TypeScript',
        icon: <span> <SiTypescript className='typescript' /></span>,
        link: 'https://www.typescriptlang.org/'

    },
    {
        label: 'GraphQL',
        icon: <span> <SiGraphql className='graphql' /></span>,
        link: 'https://graphql.org/'

    },
    {
        label: 'ReactJS',
        icon: <span> <SiReact className='reactjs' /></span>,
        link: 'https://reactjs.org/'

    },
    {
        label: 'NodeJS',
        icon: <span> <SiNodedotjs className='nodejs' /></span>,
        link: 'https://nodejs.org/en/'

    },
    {
        label: 'ExpressJS',
        icon: <span> <SiExpress className='expressjs' /></span>,
        link: 'https://expressjs.com/'

    },
    {
        label: 'MySQL',
        icon: <span> <SiMysql className='mysql' /></span>,
        link: 'https://www.mysql.com/'

    },
    {
        label: 'MongoDB',
        icon: <span> <SiMongodb className='mongodb' /></span>,
        link: 'https://www.mongodb.com/'

    },
    {
        label: 'Bootstrap',
        icon: <span> <SiBootstrap className='bootstrap' /></span>,
        link: 'https://getbootstrap.com/'

    },
    {
        label: 'Material UI',
        icon: <span> <SiMaterialui className='mui' /></span>,
        link: 'https://getbootstrap.com/'

    },
    {
        label: 'MobX',
        icon: <span> <SiMobx className='mobx' /></span>,
        link: 'https://mobx.js.org'

    },
    {
        label: 'Redux',
        icon: <span> <SiRedux className='redux' /></span>,
        link: 'https://redux.js.org/'

    },
    {
        label: 'Web Socket',
        icon: <span> <SiSocketdotio className='socket' /></span>,
        link: 'https://socket.io/'
    },
]

export const experienceList: ExperienceInterface[] = [
    {
        label: 'AiChat Pte Ltd',
        img: '/assets/aichat.png',
        link: 'https://aichat.com',
        position: 'Frontend Developer',
        status: 'Fulltime',
        duration: `${calculateDuration(new Date('2022-03-07'), new Date())} (Mar 2022 - Now) `,
    },
    {
        label: 'Astronacci International',
        img: '/assets/astronacci.png',
        link: 'https://astronacci.com',
        position: 'Web Developer',
        status: 'Fulltime',
        duration: '1.6 Years',
    },
    {
        label: 'TuvNord',
        img: '/assets/tuvnord.png',
        link: 'https://www.tuv-nord.com/id/en/home/',
        position: 'Frontend Developer',
        status: 'Freelancer',
        duration: '3 Months',
    },
]

export const projects: ProjectInterface[] = [
    {
        label: 'AiChat Pte Ltd',
        img: '/assets/aichat.png',
        jobdesc: ['Reporting in daily scrum', 'Develop new features for web and mobile app', 'Fixing bugs', 'Work with backend developer to make features run effectively', 'Maintain cms features', 'Rearchitecture components'],
        list: ['Ticketing Enhancement', 'Conversation Enhancement', 'Geo-Location', 'FB Recurring', 'Hubspot Integration', 'Email Ticketing', 'SMS Broadcast', 'Line Channel integration']
    },
    {
        label: 'Astronacci International',
        img: '/assets/astronacci.png',
        jobdesc: ['Develop web apps for company needs', 'Develop landing page for ads', 'Provide client database for other division', 'Create scalable code and reusable components', 'Assist team in fixing bugs', 'Discuss and collaborate with team to give proper business solution using technology'],
        list: ['Risk & Management Calculator', 'Forexflix', 'Ashop V2', 'Fun Quiz', 'Aclub Database Management', 'The Tradepreneur', 'Landing Page “Sucor”', 'Landing Page “Price Action”', 'Landing Page “Belajar Fibonacci”', 'A-Club Super Web App']
    },
    {
        label: 'TuvNord',
        img: '/assets/tuvnord.png',
        jobdesc: ['Develop dashboard UI using React', 'Follow redux pattern from previous developer', 'Assist team in fixing bugs', 'Work with backend developer to make data flow be served properly'],
        list: ['Simcal Dashboard']
    },
]

export const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export const getContact = (message: string): string => `https://wa.me/082178306187?text=${message}`

export const reactTiltOptions = {
    reverse: false,  // reverse the tilt direction
    max: 35,     // max tilt rotation (degrees)
    perspective: 1000,   // Transform perspective, the lower the more extreme the tilt gets.
    scale: 1.1,    // 2 = 200%, 1.5 = 150%, etc..
    speed: 1000,   // Speed of the enter/exit transition
    transition: true,   // Set a transition on enter/exit.
    axis: null,   // What axis should be disabled. Can be X or Y.
    reset: true,    // If the tilt effect has to be reset on exit.
    easing: "cubic-bezier(.03,.98,.52,.99)",    // Easing on enter/exit.
}