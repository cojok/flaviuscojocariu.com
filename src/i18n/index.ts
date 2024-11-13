import en from './en.json';
import de from './de.json';

export const DEFAULT_LANGUAGE = 'en';
export const AVAILABLE_LANGUAGES = {
    en: 'English',
    de: 'Deutsch'
} as const;

const translationStrings = {
    en,
    de,
} as const;

export const getLang = (url: URL): keyof typeof AVAILABLE_LANGUAGES => {
    const [, lang] = url.pathname.split('/');
    if (lang in AVAILABLE_LANGUAGES) {
        return lang as keyof typeof AVAILABLE_LANGUAGES;
    }
    return DEFAULT_LANGUAGE;
};


export const translate = (lang: keyof typeof AVAILABLE_LANGUAGES) => {
    return (key: keyof typeof translationStrings[typeof DEFAULT_LANGUAGE]): string | string[] => {
        return translationStrings[lang][key] || translationStrings[DEFAULT_LANGUAGE][key];
    }
};

export const translatedPath = (lang: keyof typeof AVAILABLE_LANGUAGES) => {
    return (path: string, langPrefix: string = lang): string => {
        return langPrefix === DEFAULT_LANGUAGE ? path : `/${langPrefix}${path}`;
    }
};