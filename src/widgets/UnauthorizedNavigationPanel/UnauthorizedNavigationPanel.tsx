import * as React from 'react';

import './style.css';
import { useNavigate } from 'react-router-dom';
import { localizer } from '../../shared/i18n/Localizer';
import { I18NKeys } from '../../shared/i18n/I18NKeys';
import { Button, MenuItem, Select, SelectChangeEvent, TextField } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { ApplicationState } from '../../app/store';
import { ApplicationLang } from '../../entities/ApplicationLang/ApplicationLang';
import { setLang } from '../../app/store/OptionsSlice';

export const UnauthorizedNavigationPanel: React.FC = () => {
    const lang = useSelector((state: ApplicationState) => state.userOptionsReducer.lang);
    const dispacther = useDispatch();

    const [activeSectionItemIndex, setActiveSectionItemIndex] = React.useState(0);

    const toggleActive = (index: number) => {
        setActiveSectionItemIndex(index);
    }

    const handleLocaleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        console.log(event.target.value);

        dispacther(setLang(ApplicationLang[
            ApplicationLang[event.target.value] as keyof typeof ApplicationLang
        ]));
    }

    const navigate = useNavigate();
    
    const handleLogoClick = () => {
        navigate('/home', { replace: true });
    }

    React.useEffect(() => {
        const target = document.querySelector('.unauthorized-navigation-panel-virtual') as Element

        observer.observe(target);

        return () => {
            observer.unobserve(target);
        }
    }, []);
    
    return (
        <>
            <div className='unauthorized-navigation-panel-virtual'></div>
            <div className='unathorized-navigation-panel'>
                <div className='navigation-panel-logo' onClick={handleLogoClick}>
                    <img
                        className='navigation-panel-logo__image'
                        src={require('../../images/google-drive-logo-without-text.png')}
                    />
                    <span className='navigation-panel-logo__google'>Google</span>
                    <span className='navigation-panel-logo__drive'>Drive</span>
                </div>
                <div className='navigation-panel-sections'>
                    {getSectionItems(activeSectionItemIndex, toggleActive)}
                </div>
                <div className='navigation-panel-actions'>
                    <div className='navigation-panel-actions__locale'>
                        <TextField
                            size='small'
                            style={{ width: '150px' }}
                            select
                            variant='outlined'
                            value={lang}
                            onChange={handleLocaleChange}>
                            <MenuItem value={ApplicationLang.ru_RU}>
                                {localizer.localize(I18NKeys.LANGUAGES_RU, 'Russian')}
                            </MenuItem>
                            <MenuItem value={ApplicationLang.en_EN}>
                                {localizer.localize(I18NKeys.LANGUAGES_EN, 'English')}
                            </MenuItem>
                        </TextField>
                    </div>
                    <div className='navigation-panel-actions__log-in'>
                        <Button
                            variant='text'
                            color='primary'
                            onClick={() => { navigate('/auth/login', { replace: true }) }}>
                            {localizer.localize(I18NKeys.HOME_PAGE_LOG_IN, 'Log in')}
                        </Button>
                    </div>
                    <div className='navigation-panel-actions__open-drive'>
                        <Button
                            className='navigation-panel-actions__open-drive'
                            style={{ padding: '10px 30px' }}
                            variant='outlined'
                            color='primary'>
                            {localizer.localize(I18NKeys.HOME_PAGE_OPEN_DRIVE, 'Open Drive')}
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

function getSectionItems(
    activeElementIndex: number,
    toggleActive: (index: number) => void
): React.ReactElement[]  {
    const sectionsTitles = [
        localizer.localize(I18NKeys.HOME_PAGE_SECTIONS_REVIEW, 'Review'),
        localizer.localize(I18NKeys.HOME_PAGE_SECTIONS_OPPORTUNITIES, 'Opportunities'),
        localizer.localize(I18NKeys.HOME_PAGE_SECTIONS_CLIENTS, 'Clients'),
        localizer.localize(I18NKeys.HOME_PAGE_SECTIONS_PRICE, 'Price'),
        localizer.localize(I18NKeys.HOME_PAGE_SECTIONS_DOWNLOAD, 'Download')
    ];

    return sectionsTitles.map((sectionTitle: string, index: number) => {
        const className = 
            'navigation-panel-sections__item'
            + (activeElementIndex === index ? ' navigation-panel-sections__item_active' : '');

        return <div className={className} onClick={toggleActive.bind(null, index)}>{sectionTitle}</div>;
    })
}

const observer = new IntersectionObserver((entries: IntersectionObserverEntry[]) => {
    entries.forEach(element => {
        const panel = document.querySelector('.unathorized-navigation-panel') as Element;

        if (element.isIntersecting) {
            panel.classList.remove('unathorized-navigation-panel_sticked');

            console.log('Intersecting');

            return;
        }

        panel.classList.add('unathorized-navigation-panel_sticked');
    });
}, {
    threshold: 1
});
