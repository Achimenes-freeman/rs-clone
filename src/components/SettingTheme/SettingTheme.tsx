import { useState, useContext } from "react";
import cn from 'classnames';
import styles from './styles.module.scss'
import { ColorfulModeType, FlipTestColorsType, ThemeSettings, ThemeType } from "./types";
import pageStyles from '../SettingsPage/styles.module.scss';
import { SetGroupBut } from "../../generics/SetGroupBut/SetGroupBut";
import { SettingsInterface } from "../../helpers/defaultSettings";
import { updateSettings } from "../../helpers/updateSettings";
import { PageContext } from "../../context/PageContext/PageContext";

export function SettingTheme() {
    const {token, updateTheme} = useContext(PageContext)
    const settings: SettingsInterface = JSON.parse(localStorage.getItem('settings') || 'null');
    const themeSettings: ThemeSettings = settings.theme;
    
    const [isOpen, setIsOpen] = useState(true);
    const [ftcState, setFtcState] = useState<FlipTestColorsType>(themeSettings.flipTestColors);
    const [cmState, setCmState] = useState<ColorfulModeType>(themeSettings.colorfulMode);
    const [themeState, setThemeState] = useState<ThemeType>(themeSettings.theme)

    const toggleFtcState = (target: FlipTestColorsType) => {
        if(target !== ftcState) {
            themeSettings.flipTestColors = target;
            updateSettings({theme: themeSettings}, token, settings)
            setFtcState(target)
        }
    }
    const toggleCmState = (target: ColorfulModeType) => {
        if(target !== cmState) {
            themeSettings.colorfulMode = target;
            updateSettings({theme: themeSettings}, token, settings)
            setCmState(target)
        }
    }

    const toggleThemeState = (target: ThemeType) => {
        if(target !== themeState) {
            themeSettings.theme = target;
            updateSettings({theme: themeSettings}, token, settings, target, undefined, updateTheme)
            setThemeState(target)
        }
    }

    return (
        <>
            <SetGroupBut setIsOpen={setIsOpen} isOpen={isOpen}>theme</SetGroupBut>
            {isOpen
            ? <div className={pageStyles.setGroupCont}>
                <div className={pageStyles.setGroupContentCont}>
                    <h3 className={pageStyles.setGroupContentTitle}><span>·</span>flip test colors:</h3>
                    <div className={pageStyles.setGroupContentButCont}>
                        <button 
                            className={cn({[pageStyles.activeButton]: ftcState === 'off'}, 
                            pageStyles.button)} type="button" onClick={() => toggleFtcState('off')}>off</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: ftcState === 'on'}, 
                            pageStyles.button)} type="button" onClick={() => toggleFtcState('on')}>on</button>
                    </div>
                </div>
                <div className={pageStyles.setGroupContentCont}>
                    <h3 className={pageStyles.setGroupContentTitle}><span>·</span>colorful mode:</h3>
                    <div className={pageStyles.setGroupContentButCont}>
                        <button 
                            className={cn({[pageStyles.activeButton]: cmState === 'off'}, 
                            pageStyles.button)} type="button" onClick={() => toggleCmState('off')}>off</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: cmState === 'on'}, 
                            pageStyles.button)} type="button" onClick={() => toggleCmState('on')}>on</button>
                    </div>
                </div>
                <div className={pageStyles.setGroupContentCont}>
                    <h3 className={pageStyles.setGroupContentTitle}><span>·</span>theme:</h3>
                    <div className={cn(pageStyles.setGroupContentButCont, styles.themeButtonCont)}>
                        <button 
                            className={cn({[pageStyles.activeButton]: themeState === 'default'}, 
                            pageStyles.button)} type="button" onClick={() => toggleThemeState('default')}>default</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: themeState === 'lavender'}, 
                            pageStyles.button)} type="button" onClick={() => toggleThemeState('lavender')}>lavender</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: themeState === 'orange'}, 
                            pageStyles.button)} type="button" onClick={() => toggleThemeState('orange')}>orange</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: themeState === 'darkPurple'}, 
                            pageStyles.button)} type="button" onClick={() => toggleThemeState('darkPurple')}>dark purple</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: themeState === 'vscode'}, 
                            pageStyles.button)} type="button" onClick={() => toggleThemeState('vscode')}>vscode</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: themeState === 'miamiNights'}, 
                            pageStyles.button)} type="button" onClick={() => toggleThemeState('miamiNights')}>miami nights</button>
                    </div>
                </div>
            </div>
            : null
            }
        </>
    )
}