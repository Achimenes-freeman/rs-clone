import { SettingsInterface } from "./defaultSettings";

export function getMainColor() {
    const settings:SettingsInterface = JSON.parse(localStorage.getItem('settings') || 'settings');
    switch(settings.theme.theme) {
        case 'default': 
            return '#e2b714';
        case 'lavender':
            return '#f7f2ea';
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
        default: 
            return '#ffffff';
    }
}