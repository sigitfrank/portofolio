import { LinkInterface, ProjectInterface } from "./namespace";

export interface UseStoreInterface {
    pageLink: {
        getNavLink: LinkInterface,
        setNavLink: React.Dispatch<React.SetStateAction<LinkInterface>>,
    },
    company: {
        getCompany: ProjectInterface,
        setCompany: React.Dispatch<React.SetStateAction<ProjectInterface>>,
    },
    clientRequest: {
        getClientRequest: string,
        setClientRequest: React.Dispatch<React.SetStateAction<string>>,
    },
}

export interface FormState {
    firstName: string;
    lastName: string;
    email: string;
    service: string;
    message: string;
}
