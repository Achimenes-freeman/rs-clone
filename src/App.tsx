import { AccountPage } from "./components/AccountPage/AccountPage";
import './fonts.module.scss';
import { defaultSettings } from "./helpers/defaultSettings";


if(!localStorage.getItem('settings')) {
    localStorage.setItem('settings', JSON.stringify(defaultSettings))
}


export const App = () => <AccountPage />;
