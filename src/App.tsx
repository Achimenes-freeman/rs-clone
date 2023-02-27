import { useContext } from 'react';
import { TestComponent } from './components/TestComponent/TestComponent';
import { MainContext } from './context/MainContext/MainContext';

import { defaultSettings } from "./helpers/defaultSettings";
import { Result } from './components/Result/Result';

import './fonts.module.scss';

if(!localStorage.getItem('settings')) {
    localStorage.setItem('settings', JSON.stringify(defaultSettings))
}

export const App = () => {

    const {isFinished} = useContext(MainContext)

    return (
        <div className='main'>
            {isFinished ? <Result/>: <TestComponent/>}
        </div>
    )
}