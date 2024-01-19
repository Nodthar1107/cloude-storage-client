import { ApplicationLang } from './ApplicationLang';

export function getApplicationLocale() {
    switch (navigator.language) {
        case 'en_EN':
            return ApplicationLang.en_EN; 
        case 'ru_RU':
        default:
            return ApplicationLang.ru_RU;
    }
}