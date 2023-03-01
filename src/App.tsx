import { Routes, Route } from 'react-router-dom';
import { useContext, useEffect, useCallback } from 'react';
import { TestComponent } from './components/TestComponent/TestComponent';
import { MainContext } from './context/MainContext/MainContext';

import { Layout } from './components/Layout/Layout';
import { SettingsPage } from './components/SettingsPage/SettingsPage';

import './fonts.module.scss';
import { SettingsInterface, defaultSettings } from "./helpers/defaultSettings";
import { Result } from './components/Result/Result';
import { RegLogPage } from './components/RegistrationLoginPage/RegLogPage';
import { AccountPage } from './components/AccountPage/AccountPage';
import { PageContext } from './context/PageContext/PageContext';
import { getSettings } from './helpers/userManipulationFuncs';
import { RatingPage } from './components/RatingPage/RatingPage';
import { InfoPage } from './components/InfoPage/InfoPage';

if(!localStorage.getItem('settings')) {
    localStorage.setItem('settings', JSON.stringify(defaultSettings))
}

export const App = () => {
    const {isFinished} = useContext(MainContext);
    const {token, username, updateTheme, updateFont, updateToken, updateUsername, isLoaded, setLoaded} = useContext(PageContext)

    const checkAuth = useCallback(() => {
        const localToken = localStorage.getItem('authToken')
        if(localToken) {
            updateToken(localToken)
            const localUser = localStorage.getItem('username');
            if(localUser) { 
                updateUsername(localUser)
            }
        } else {
            if(token) {
                updateToken('')
            }
            if(username) {
                updateUsername('')
            }
        }
    }, [token, username, updateToken, updateUsername]);
    const checkSettings = useCallback(async () => {
        const localToken = localStorage.getItem('authToken');
        if(localToken) {
            await getSettings(localToken).then(setts => {
                updateTheme(setts.theme.theme);
                updateFont(setts.appearance.fontFamily);
                localStorage.setItem('settings', JSON.stringify(setts))
            })
        } else {
            const localSetts: SettingsInterface = JSON.parse(localStorage.getItem('settings') ||'{}')
            if(localSetts) {
                updateTheme(localSetts.theme.theme);
                updateFont(localSetts.appearance.fontFamily);
            } else {
                localStorage.setItem('settings', JSON.stringify(defaultSettings))
            }
        }
    }, [updateFont, updateTheme])

    useEffect(() => {
        const asyncCheckFunc = async () => {
            checkAuth();
            await checkSettings()
            setLoaded(true)
        }

        if(!isLoaded) {
            asyncCheckFunc()
        }
    }, [checkAuth, checkSettings, isLoaded, setLoaded])
    
    return (
        <Routes>
            <Route path="/rs-clone/" element={<Layout />}>
                <Route index element={isFinished ? <Result/>: <TestComponent/>}/>
                <Route path='/rs-clone/rating' element={<RatingPage />}/>
                <Route path='/rs-clone/info' element={<InfoPage />}/>
                <Route path='/rs-clone/settings' element={<SettingsPage/>}/>
                <Route path='/rs-clone/user' element={token ? <AccountPage /> : <RegLogPage />}/>
            </Route>
        </Routes>
    )
}