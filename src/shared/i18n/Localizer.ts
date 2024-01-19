import { useSelector } from "react-redux";
import { I18NKeys } from "./I18NKeys";
import { EN, RU } from "./Translations";
import { ApplicationState, store } from "../../app/store";
import { ApplicationLang } from "../../entities/ApplicationLang/ApplicationLang";

class Localizer {
    private defaultLocale = navigator.language;

    public localize(key: I18NKeys, message: string, ...interpolated: string[]): string {
        const translations = this.getTranslationsCollection();
        let localizedValue = translations.get(key);

        localizedValue ||= message;

        let interpolatedPosition = -2;
        let interpolatedIndex = 0;
        while (interpolatedPosition !== -1) {
            interpolatedPosition = localizedValue.indexOf('%s');
            localizedValue = localizedValue?.replace('%s', interpolated[interpolatedIndex++]);
        }

        return localizedValue;
    }

    private getTranslationsCollection() {
        const locale = store.getState().userOptionsReducer.lang;

        switch (locale) {
            case ApplicationLang.en_EN:
                return EN;
            case ApplicationLang.ru_RU:
            default:
                return RU;
        }
    }
}

export const localizer = new Localizer();