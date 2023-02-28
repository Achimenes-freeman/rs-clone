import { Routes, Route } from 'react-router-dom';
import { useContext, useEffect, useCallback } from 'react';
import { TestComponent } from './components/TestComponent/TestComponent';
import { MainContext } from './context/MainContext/MainContext';

import { Layout } from './components/Layout/Layout';
import { SettingsPage } from './components/SettingsPage/SettingsPage';

import './fonts.module.scss';
import { defaultSettings } from "./helpers/defaultSettings";
import { Result } from './components/Result/Result';
import { RegLogPage } from './components/RegistrationLoginPage/RegLogPage';
import { AccountPage } from './components/AccountPage/AccountPage';
import { PageContext } from './context/PageContext/PageContext';

if(!localStorage.getItem('settings')) {
    localStorage.setItem('settings', JSON.stringify(defaultSettings))
}

export const App = () => {
    const {isFinished} = useContext(MainContext);
    const {token, username, updateToken, updateUsername} = useContext(PageContext)
    const checkAuth = useCallback(() => {
        const localToken = localStorage.getItem('authToken')
        if(localToken) {
            updateToken(localToken)
            const localUser = localStorage.getItem('username');
            if(localUser) { 
                updateUsername(localUser)
            }
        } else {
            if(token.length) {
                updateToken('')
            }
            if(username.length) {
                updateUsername('')
            }
        }
    }, [token.length, username.length, updateToken, updateUsername])

    useEffect(() => {
        checkAuth()
    }, [checkAuth]) 
    
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={isFinished ? <Result/>: <TestComponent/>}/>
                <Route path='/rating' element='rating'/>
                <Route path='/info' element='info'/>
                <Route path='/settings' element={<SettingsPage/>}/>
                <Route path='/user' element={token ? <AccountPage /> : <RegLogPage />}/>
                <Route path='/logout' element='logout'/>
            </Route>
        </Routes>
    )
}