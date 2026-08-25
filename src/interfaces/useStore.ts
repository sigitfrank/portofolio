import { ExperienceInterface } from './interfaces';

export interface UseStoreInterface {
    company: {
        getCompany: ExperienceInterface;
        setCompany: React.Dispatch<React.SetStateAction<ExperienceInterface>>;
    };
}
