import { AccountPage } from "./components/AccountPage/AccountPage";
import './fonts.module.scss';
import { defaultSettings } from "./helpers/defaultSettings";
// import { useContext } from 'react';
// import { TestComponent } from './components/TestComponent/TestComponent';
// import { MainContext } from './context/MainContext/MainContext';
// import { Result } from './components/Result/Result';

if(!localStorage.getItem('settings')) {
    localStorage.setItem('settings', JSON.stringify(defaultSettings))
}

export const App = () => <AccountPage />
    // const {isFinished} = useContext(MainContext)

    // return (
    //     <div className='main'>
    //         {isFinished ? <Result/>: <TestComponent/>}
    //     </div>
    // )
