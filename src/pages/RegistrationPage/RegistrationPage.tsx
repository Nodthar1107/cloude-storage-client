import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, FormHelperText, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import * as React from 'react';
import { localizer } from '../../shared/i18n/Localizer';
import { I18NKeys } from '../../shared/i18n/I18NKeys';

import './style.css';

export const RegistrationPage: React.FC = () => {
    const [username, setUsername] = React.useState('');
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [passwordErrorMessage, setPasswordErrorMessage] = React.useState('');
    const [isPasswordVisible, setPasswordVisibility] = React.useState(false);
    const [confirmPassword, setConfirmPassword] = React.useState(''); 
    const [confirmPasswordErrorMessage, setConfirmPasswordErrorMessage] = React.useState('');
    const [isConfirmPasswordVisible, setConfirmPasswordVisibility] = React.useState(false);

    const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(event.target.value);
    }

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value);
    }

    const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(event.target.value);
    }

    const handleConfirmPasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setConfirmPassword(event.target.value);
    }

    const handlePasswordVisibilityChange = () => {
        setPasswordVisibility(!isPasswordVisible);
    }
    
    const handleConfirmPasswordVisibilityChange = () => {
        setConfirmPasswordVisibility(!isConfirmPasswordVisible);
    }

    return (
        <>
            <div className='text-field-container'>
                <TextField
                    className='text-field'
                    size='small'
                    fullWidth
                    label={localizer.localize(I18NKeys.REGISTRATION_FORM_USERNAME_LABEL, 'Username')}
                    variant='outlined'
                    value={username}
                    onChange={handleUsernameChange}
                />
            </div>
            <div className='text-field-container'>
                <TextField
                    className='text-field'
                    size='small'
                    fullWidth
                    label={localizer.localize(I18NKeys.REGISTRATION_FORM_EMAIL_LABEL, 'Email')}
                    variant='outlined'
                    value={email}
                    onChange={handleEmailChange}
                />
            </div>
            <div className='text-field-container'>
                {getPasswordTextField(
                    password,
                    localizer.localize(I18NKeys.REGISTRATION_FORM_PASSWORD_LABEL, 'Password'),
                    isPasswordVisible,
                    passwordErrorMessage,
                    handlePasswordChange,
                    handlePasswordVisibilityChange
                )}
            </div>
            <div className='text-field-container'>
                {getPasswordTextField(
                    confirmPassword,
                    localizer.localize(I18NKeys.REGISTRATION_FORM_CONFIRM_PASSWORD_LABEL, 'Confirm password'),
                    isConfirmPasswordVisible,
                    confirmPasswordErrorMessage,
                    handleConfirmPasswordChange,
                    handleConfirmPasswordVisibilityChange
                )}
            </div>
            <div className='submit-button'>
                <Button variant='outlined' fullWidth>
                    {localizer.localize(I18NKeys.REGISTRATION_FORM_REGISTER_BUTTON_LABEL, 'Regiter')}
                </Button>
            </div>
        </>
    )
}

function getPasswordTextField(
    value: string,
    label: string,
    isVisisble: boolean,
    errorMessage: string,
    textChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void,
    visibilityChangeHandler: () => void
): React.ReactElement {
    return (
        <FormControl variant='outlined' size='small'>
            <InputLabel>{label}</InputLabel>
            <OutlinedInput
                fullWidth
                label={label}
                value={value}
                type={isVisisble ? 'text' : 'password'}
                error={errorMessage !== ''}
                endAdornment={
                <InputAdornment position='end'>
                    <IconButton
                        onClick={visibilityChangeHandler}
                        edge='end'>
                        {isVisisble ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                </InputAdornment>
                }
                onChange={textChangeHandler}
            />
            <FormHelperText error={errorMessage !== ''}>{errorMessage}</FormHelperText>
        </FormControl>
    );
}
