export interface LinkInterface {
    label: string;
    value: string;
}

export interface SkillItemInterface {
    label: string;
    icon: React.ReactNode;
    link: string;
}

export interface SkillGroupInterface {
    name: string;
    note: string;
    items: SkillItemInterface[];
}

export interface ProjectInterface {
    label: string;
    img: string;
    summary: string;
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
    marker: string;
}

export interface SocialInterface {
    label: string;
    handle: string;
    icon: React.ReactNode;
    link: string;
}
