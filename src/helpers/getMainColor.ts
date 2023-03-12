import { SettingsInterface } from "./defaultSettings";

export function getMainColor() {
    const settings:SettingsInterface = JSON.parse(localStorage.getItem('settings') || 'settings');
    switch(settings.theme.theme) {
        case 'default': 
            return '#e2b714';
        case 'lavender':
            return '#f7f2ea';
        case 'darkPurple':
            return '#c58aff';
        case 'orange':
            return '#f66e0d';
        case 'miamiNights':
            return '#e4609b';
        case 'vscode':
            return '#007acc';
        default: 
            return '#ffffff';
    }
}

export function getSubAltColor() {
    const settings:SettingsInterface = JSON.parse(localStorage.getItem('settings') || 'settings');
    switch(settings.theme.theme) {
        case 'default': 
            return '#2c2e31';
        case 'lavender':
            return '#27173c';
        case 'darkPurple':
            return '#972fff';
        case 'orange':
            return '#616161';
        case 'miamiNights':
            return '#47bac0';
        case 'vscode':
            return '#4d4d4d'
        default: 
            return '#ffffff';
    }
}