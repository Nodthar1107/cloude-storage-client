import { I18NKeys } from "./I18NKeys";

export const RU: Map<I18NKeys, string> = new Map([
    [I18NKeys.HOME_PAGE_SECTIONS_REVIEW, 'Обзор'],
    [I18NKeys.HOME_PAGE_SECTIONS_OPPORTUNITIES, 'Возможности'],
    [I18NKeys.HOME_PAGE_SECTIONS_CLIENTS, 'Клиенты'],
    [I18NKeys.HOME_PAGE_SECTIONS_PRICE, 'Цены'],
    [I18NKeys.HOME_PAGE_SECTIONS_DOWNLOAD, 'Скачать'],
    [I18NKeys.HOME_PAGE_LOG_IN, 'Войти'],
    [I18NKeys.HOME_PAGE_OPEN_DRIVE, 'Открыт диск'],
    [I18NKeys.HOME_PAGE_HEADER, 'Простой и безопасный доступ к файлам'],

    [I18NKeys.LOGIN_FORM_HEADER, 'Вход'],
    [I18NKeys.LOGIN_FORM_USERNAME_LABEL, 'Логин'],
    [I18NKeys.LOGIN_FORM_PASSWORD_LABEL, 'Пароль'],
    [I18NKeys.LOGIN_FORM_LOGIN_BUTTON_LABEL, 'Войти'],
    [I18NKeys.LOGIN_FORN_TO_REGISTRATION_FORM_LINK, 'Еще нет аккаунта?'],
    [I18NKeys.LOGIN_FORM_USERNAME_EMPTY_FIELD, `Поле "Логин" не может быть пустым`],
    [I18NKeys.LOGIN_FORM_PASSWORD_EMPTY_FIELD, `Поле "Пароль" не может быть пустым`],

    [I18NKeys.REGISTRATION_FORM_HEADER, 'Регистрация'],
    [I18NKeys.REGISTRATION_FORM_USERNAME_LABEL, 'Логин'],
    [I18NKeys.REGISTRATION_FORM_EMAIL_LABEL, 'Почта'],
    [I18NKeys.REGISTRATION_FORM_PASSWORD_LABEL, 'Пароль'],
    [I18NKeys.REGISTRATION_FORM_CONFIRM_PASSWORD_LABEL, 'Подтвердите пароль'],
    [I18NKeys.REGISTRATION_FORM_REGISTER_BUTTON_LABEL, 'Зарегистрироваться'],
    [I18NKeys.REGISTRATION_FORM_EMPTY_USERNAME_FIELD, `Поле "Логин" не может быть пустым`],
    [I18NKeys.REGISTRATION_FORM_EMPTY_EMAIL_FIELD, `Поле "Почта" не может быть пустым`],
    [I18NKeys.REGISTARTION_FORM_EMPTY_PASSWORD_FIELD, 'Поле "Пароль" не может быть пустым'],
    [I18NKeys.REGISTRATION_FORM_INCORRECT_PASSWORD_LENGTH, 'Длина пароль должна составлять минимум %s символов'],
    [I18NKeys.REGISTRATION_FORM_EMPTY_CONFIRM_PASSWORD,`Поле "Подтвердите пароль" не может быть пустым`],
    [I18NKeys.REGISTRATION_FORM_INCORRECT_CONFIRM_PASSWORD, `Поле "Подтвердите пароль" не совпадает с полем "Пароль"`],

    [I18NKeys.LANGUAGES_RU, 'Русский'],
    [I18NKeys.LANGUAGES_EN, 'Английский']
]);

export const EN: Map<I18NKeys, string> = new Map([
    [I18NKeys.HOME_PAGE_SECTIONS_REVIEW, 'Review'],
    [I18NKeys.HOME_PAGE_SECTIONS_OPPORTUNITIES, 'Opportunities'],
    [I18NKeys.HOME_PAGE_SECTIONS_CLIENTS, 'Clients'],
    [I18NKeys.HOME_PAGE_SECTIONS_PRICE, 'Price'],
    [I18NKeys.HOME_PAGE_SECTIONS_DOWNLOAD, 'Download'],
    [I18NKeys.HOME_PAGE_LOG_IN, 'Log in'],
    [I18NKeys.HOME_PAGE_OPEN_DRIVE, 'Open Drive'],
    [I18NKeys.HOME_PAGE_HEADER, 'Easy and secure file access'],

    [I18NKeys.LOGIN_FORM_HEADER, 'Log in'],
    [I18NKeys.LOGIN_FORM_USERNAME_LABEL, 'Username'],
    [I18NKeys.LOGIN_FORM_PASSWORD_LABEL, 'Password'],
    [I18NKeys.LOGIN_FORM_LOGIN_BUTTON_LABEL, 'Log in'],
    [I18NKeys.LOGIN_FORN_TO_REGISTRATION_FORM_LINK, `Don't have account yet?`],
    [I18NKeys.LOGIN_FORM_USERNAME_EMPTY_FIELD, `Login can't be empty`],
    [I18NKeys.LOGIN_FORM_PASSWORD_EMPTY_FIELD, `Password can't be empty`],

    [I18NKeys.REGISTRATION_FORM_HEADER, 'Registration'],
    [I18NKeys.REGISTRATION_FORM_USERNAME_LABEL, 'Username'],
    [I18NKeys.REGISTRATION_FORM_EMAIL_LABEL, 'Email'],
    [I18NKeys.REGISTRATION_FORM_PASSWORD_LABEL, 'Password'],
    [I18NKeys.REGISTRATION_FORM_CONFIRM_PASSWORD_LABEL, 'Confirm password'],
    [I18NKeys.REGISTRATION_FORM_REGISTER_BUTTON_LABEL, 'Register'],
    [I18NKeys.REGISTRATION_FORM_EMPTY_USERNAME_FIELD, `Login can't be empty`],
    [I18NKeys.REGISTRATION_FORM_EMPTY_EMAIL_FIELD, `Email can't be empty`],
    [I18NKeys.REGISTARTION_FORM_EMPTY_PASSWORD_FIELD, `Password can't be empty`],
    [I18NKeys.REGISTRATION_FORM_INCORRECT_PASSWORD_LENGTH, `Password must consist at least from %s symbols`],
    [I18NKeys.REGISTRATION_FORM_EMPTY_CONFIRM_PASSWORD,`Confirm password can't be empty`],
    [I18NKeys.REGISTRATION_FORM_INCORRECT_CONFIRM_PASSWORD, `Confirmed password isn't equal to password`],

    [I18NKeys.LANGUAGES_RU, 'Russian'],
    [I18NKeys.LANGUAGES_EN, 'English']
]);
