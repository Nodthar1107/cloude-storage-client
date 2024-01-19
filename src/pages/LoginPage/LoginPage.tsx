import * as React from 'react';

import { Link } from 'react-router-dom';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import { localizer } from '../../shared/i18n/Localizer';
import { I18NKeys } from '../../shared/i18n/I18NKeys';

import './style.css';

export const LoginPage: React.FC = (): React.ReactElement => {
    const [username, setUserName] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [isPasswordShowing, setIsPasswordShowing] = React.useState(false);

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUserName(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handlePasswordShowingChange = () => {
        setIsPasswordShowing(!isPasswordShowing);
    }

    return (
        <>
            <div className='text-field-container'>
                <TextField
                    className='text-field'
                    size='small'
                    fullWidth
                    label={localizer.localize(I18NKeys.LOGIN_FORM_USERNAME_LABEL, 'Username')}
                    variant='outlined'
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <div className='text-field-container'>
                <FormControl variant='outlined' size='small'>
                    <InputLabel>{localizer.localize(I18NKeys.LOGIN_FORM_PASSWORD_LABEL, 'Password')}</InputLabel>
                    <OutlinedInput
                        fullWidth
                        value={password}
                        type={isPasswordShowing ? 'text' : 'password'}
                        endAdornment={
                        <InputAdornment position='end'>
                            <IconButton
                                onClick={handlePasswordShowingChange}
                                edge='end'>
                                {isPasswordShowing ? <VisibilityOff /> : <Visibility />}
                            </IconButton>
                        </InputAdornment>
                        }
                        onChange={handlePasswordChange}
                    />
                </FormControl>
            </div>
            <div className='submit-button'>
                <Button variant='outlined' fullWidth>
                    {localizer.localize(I18NKeys.LOGIN_FORM_LOGIN_BUTTON_LABEL, 'Log in')}
                </Button>
            </div>
            <div className='to-registration-form-link-container'>
                <Link
                    className='to-registration-form-link-container__link'
                    to='/auth/registration'>
                    {localizer.localize(I18NKeys.LOGIN_FORN_TO_REGISTRATION_FORM_LINK, `Don't have account yet?`)}
                </Link>
            </div>
        </>
    );
}