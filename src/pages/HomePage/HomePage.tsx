import * as React from 'react';
import { UnauthorizedNavigationPanel } from '../../widgets/UnauthorizedNavigationPanel/UnauthorizedNavigationPanel';

import './style.css';
import { localizer } from '../../shared/i18n/Localizer';
import { I18NKeys } from '../../shared/i18n/I18NKeys';
import { useSelector } from 'react-redux';
import { ApplicationState } from '../../app/store';
import { ApplicationLang } from '../../entities/ApplicationLang/ApplicationLang';

export const HomePage: React.FC = () => {
    const lang = useSelector((state: ApplicationState) => { return state.userOptionsReducer.lang });
    console.log(ApplicationLang[lang]);

    return (
        <div className='home-page'>
            <UnauthorizedNavigationPanel />
            <div className='home-page-content'>
                <div className='home-page-content__left'>
                    <span className='home-page-content__header'>
                        {localizer.localize(I18NKeys.HOME_PAGE_HEADER, 'Easy and secure file access')}
                    </span>
                </div>
                <div className='home-page-content__right'>
                    <img
                        className='home-page-content__promo'
                        src={require('../../images/home-page-promo.png')} />
                </div>
            </div>
        </div>
    )
}
