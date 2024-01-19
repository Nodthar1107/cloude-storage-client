import * as React from 'react'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'

import './style.css';
import { localizer } from '../../../shared/i18n/Localizer';
import { I18NKeys } from '../../../shared/i18n/I18NKeys';

interface IAuthLayoutProps {}

export const AuthLayout: React.FC<IAuthLayoutProps> = (props: IAuthLayoutProps) => {
    const navigate = useNavigate();
    
    const location = useLocation();
    const header = getPageHeader(location.pathname);

    return (
        <div className='auth-layout-container'>
            <div className='logo-container' onClick={() => navigate('/home', { replace: true })}>
                <img
                    className='logo-container__image'
                    src={require('../../../images/google-drive-logo-big.jpg')}
                    alt='Google drive' title='Google Drive'
                />
            </div>
            <div className='auth-form'>
                <div className='auth-form__header'><h2>{header}</h2></div>
                <Outlet />
            </div>
        </div>
    )
} 

function getPageHeader(path: string): string {
    switch (path) {
        case '/auth/login':
            return localizer.localize(I18NKeys.LOGIN_FORM_HEADER, 'Log in');;
        case '/auth/registration':
        default:
            return localizer.localize(I18NKeys.REGISTRATION_FORM_HEADER, 'Registration');
    }
}
