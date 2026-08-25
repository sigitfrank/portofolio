import React, { useState } from 'react'
import { ExperienceInterface } from '../interfaces/interfaces';
import { UseStoreInterface } from '../interfaces/useStore';
import { experienceList } from '../namespace';

export const AppContext: React.Context<any> = React.createContext(null);

export const useStore = (): UseStoreInterface => {
    const [company, setCompany] = useState<ExperienceInterface>(experienceList[0])

    return {
        company: {
            getCompany: company,
            setCompany: setCompany,
        },
    }
}
