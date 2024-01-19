import * as React from 'react';
import { Navigate, Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';

import { LoginPage } from '../pages/LoginPage/LoginPage';
import { AuthLayout } from './layouts/AuthLayout/AuthLayout';
import { RegistrationPage } from '../pages/RegistrationPage/RegistrationPage';
import { HomePage } from '../pages/HomePage/HomePage';
import { withStoreProvider } from './store/withSotreProvider';

const routes = createBrowserRouter(createRoutesFromElements([
    <Route path='/'>
        <Route index element={<Navigate to='/home' replace />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/auth' element={<AuthLayout />}>
            <Route path='/auth/login' element={<LoginPage />} />
            <Route path='/auth/registration' element={<RegistrationPage />} />
        </Route>
        <Route path='/drive'>
            <Route index element={<Navigate to='/drive/home' replace />} />
            <Route path='/drive/home' element={<h1>Hello world!</h1>} />
            <Route path='*' element={<Navigate to='/drive/home' replace />} />
        </Route>,
    </Route>,
    <Route path='*' element={<Navigate to='/home' replace />} />
]));

const App: React.FC<{}> = () => {
    return <RouterProvider router={routes} />
}

export const Application = withStoreProvider(App);
