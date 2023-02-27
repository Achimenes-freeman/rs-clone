import { Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { TestComponent } from './components/TestComponent/TestComponent';
import { MainContext } from './context/MainContext/MainContext';

import { defaultSettings } from "./helpers/defaultSettings";
import { Result } from './components/Result/Result';
import { Layout } from './components/Layout/Layout';
import { SettingsPage } from './components/SettingsPage/SettingsPage';

import './fonts.module.scss';

if(!localStorage.getItem('settings')) {
    localStorage.setItem('settings', JSON.stringify(defaultSettings))
}

export const App = () => {

    const {isFinished} = useContext(MainContext)

    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={isFinished ? <Result/>: <TestComponent/>}/>
                <Route path='/rating' element='rating'/>
                <Route path='/info' element='info'/>
                <Route path='/settings' element={<SettingsPage/>}/>
                <Route path='/user' element='user'/>
                <Route path='/logout' element='logout'/>
            </Route>
        </Routes>
    )
}