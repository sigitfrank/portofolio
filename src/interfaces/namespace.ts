import { ReactHTMLElement } from "react";

export interface LinkInterface {
    prev?: string;
    label: string;
    value: string;
    next?: string;
}

// TODO Change type icon
export interface SkillListInterface {
    label: string;
    icon: any;
    link: string;
}

export interface ProjectInterface {
    label: string;
    img: string;
    jobdesc: string[];
    list: string[];
}

export interface ExperienceInterface {
    label: string;
    img: string;
    link: string;
    position: string;
    status: string;
    duration: string;
}