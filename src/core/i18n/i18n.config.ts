
import i18next from 'i18next';
import { en, tr } from '../../constants';
import { initReactI18next } from 'react-i18next';

export const languageResource = {
    en: { translation: en },
    tr: { translation: tr },
};

import { LanguageDetectorModule } from 'i18next';
import { Platform, NativeModules } from 'react-native';

const RNLanguageDetector: LanguageDetectorModule = {
    type: 'languageDetector',
    init: () => { },
    detect: () => {
        const locale =
            Platform.OS === 'ios'
                ? NativeModules.SettingsManager.settings.AppleLocale ||
                NativeModules.SettingsManager.settings.AppleLanguages[0] // iOS 13
                : NativeModules.I18nManager.localeIdentifier;
        return locale.split('_')[0];
    },
    cacheUserLanguage: () => { },
};

i18next
    .use(RNLanguageDetector)
    .use(initReactI18next)
    .init({
        ns: [],
        defaultNS: undefined,
        compatibilityJSON: 'v3',
        supportedLngs: ['en', 'tr'],
        fallbackLng: 'tr',
        interpolation: {
            escapeValue: false,
        },
        resources: languageResource,
    });

export default i18next;