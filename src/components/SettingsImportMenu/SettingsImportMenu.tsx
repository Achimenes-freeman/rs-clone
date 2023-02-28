import React, { useContext, useState } from 'react';
import pageStyles from '../SettingsPage/styles.module.scss';
import styles from './styles.module.scss';
import { SettingsImportMenuProps } from './types';
import { SettingsInterface, defaultSettings } from '../../helpers/defaultSettings';
import { appearanceCheck, behaviorCheck, caretCheck, soundCheck, themeCheck } from '../../helpers/importSettingsValidation';
import { PageContext } from '../../context/PageContext/PageContext';
import { updateSettings } from '../../helpers/updateSettings';

export function SettingsImportMenu({setIsImportOpen}: SettingsImportMenuProps) {
    const {token, updateTheme, updateFont} = useContext(PageContext)
    const [inputState, setInputState] = useState('')
    const changeInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputState(event.target.value)
    }

    const closeImportMenu = () => {
        setIsImportOpen(false);
    }

    const checkJSON = (str: string) => {
        try {
            JSON.parse(str)
        } catch {
            return false
        }

        return true
    }

    const importSettingsFunc = () => {
        closeImportMenu();
        if(inputState.length !== 0 || checkJSON(inputState)) {
                const newSettings: SettingsInterface = {...defaultSettings};
                const inputSettings: SettingsInterface = JSON.parse(inputState);
                if(inputSettings.behavior) {
                    newSettings.behavior = behaviorCheck(inputSettings.behavior, newSettings)
                }
                if(inputSettings.sound) {
                    newSettings.sound = soundCheck(inputSettings.sound, newSettings)
                }
                if(inputSettings.caret) {
                    newSettings.caret = caretCheck(inputSettings.caret, newSettings);
                }
                if(inputSettings.appearance) {
                    newSettings.appearance = appearanceCheck(inputSettings.appearance, newSettings);
                }
                if(inputSettings.theme) {
                    newSettings.theme = themeCheck(inputSettings.theme, newSettings);
                }

                updateSettings(newSettings, token, newSettings)
                updateFont(newSettings.appearance.fontFamily)
                updateTheme(newSettings.theme.theme)
        }
    }

    return (
        <div className={styles.overlay}>
            <div className={styles.menuContainer}>
                <input className={styles.input} type="text" value={inputState} onChange={changeInput}/>
                <button className={pageStyles.button} type='button' onClick={() => importSettingsFunc()}>import settings</button>
                <button className={styles.closeButton} onClick={() => closeImportMenu()} type='button' aria-label='closeBut'><span className={styles.firstPartCross}/><span className={styles.secondPartCross}/></button>
            </div>
        </div>
    )
}