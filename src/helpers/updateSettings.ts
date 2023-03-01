import { SettingsInterface } from "./defaultSettings";
import { FamilyType } from "../components/SettingAppearance/types";
import { ThemeType } from "../components/SettingTheme/types";
import { setSettings } from "./userManipulationFuncs";

export const updateSettings = (value: Partial<SettingsInterface>, token: string,
    newSetts: SettingsInterface, target?: FamilyType | ThemeType,
    updateFont?: (newFont: FamilyType) => void, updateTheme?: (newTheme: ThemeType) => void) => {
        localStorage.setItem('settings', JSON.stringify(newSetts));
        if(token) {
            setSettings(token, value);
        }
        if(target) {
            if(target === 'default' || target === 'lavender' 
            || target === 'darkPurple' || target === 'orange' 
            || target === 'vscode' || target === 'miamiNights') {
                if(updateTheme) {
                    updateTheme(target)
                }
            }
            if(target === 'montserratSans' || target === 'openSans'
            || target === 'robotoMono' || target === 'spaceMono') {
                if(updateFont) {
                    updateFont(target)
                }
            }
        }
}