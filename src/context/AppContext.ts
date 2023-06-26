import React, { useState } from 'react'
import { LinkInterface, ProjectInterface } from '../interfaces/interfaces';
import { UseStoreInterface } from '../interfaces/useStore';
import { links, projects } from '../namespace';

export const AppContext: React.Context<any> = React.createContext(null);

export const useStore = (): UseStoreInterface => {
    const initialNavState: LinkInterface = links.find(link => link.value === 'profile')!
    const [navLink, setNavLink] = useState<typeof initialNavState>(initialNavState)

    const initialCompanyState: ProjectInterface = projects.find(project => project.label === 'AiChat Pte Ltd')!
    const [company, setCompany] = useState<typeof initialCompanyState>(initialCompanyState)

    const [clientRequest, setClientRequest] = useState<string>('Web App')

    return {
        pageLink: {
            getNavLink: navLink,
            setNavLink: setNavLink,
        },
        company: {
            getCompany: company,
            setCompany: setCompany,
        },
        clientRequest: {
            getClientRequest: clientRequest,
            setClientRequest: setClientRequest,
        },
    }
}

