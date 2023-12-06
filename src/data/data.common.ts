export type languageType = 'es' | 'en';
export interface IDataValues {
    language: languageType;
    starPrograming: string;
    name: string;
    lastname: string;
    position: string;
    dateBirth: string;
    address: string;
    email: string;
    phone: string;
    biography: string;
    workExperiences: WorkExperiencies[];
    education: Educations[];
    skills: string //--
}

export interface WorkExperiencies {
    position: string;
    company: string;
    startDate: string;
    endDate: string;
    type: string;
    archivements: WorkExperiencesArchivements[];
}

export interface WorkExperiencesArchivements {
    description: string;
    tegnologies: string[];
}

export interface Educations {
    university: string;
    starDate: string;
    endDate: string;
    degree: string;
    major: string;
}

export enum type {
    framework = 'framework',
    language = 'language',
    library = 'library',
    versionControl = 'versionControl',
    database = 'database',
    server = 'server',
    metodology = 'metodology',
    security = 'security',
    testing = 'testing',
    ia = 'ia',
    gameDevelopment = 'gameDevelopment',
    devops = 'devops'
}

export interface Skills {
    tegnologie: string;
    type: string;
    category: string;
    years: number;
    level: string;
}