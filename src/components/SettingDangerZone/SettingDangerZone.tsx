import { useState } from "react";
import cn from 'classnames';
import pageStyles from '../SettingsPage/styles.module.scss';
import styles from './styles.module.scss';
import { SetGroupBut } from "../../generics/SetGroupBut/SetGroupBut";
import { defaultSettings } from "../../helpers/defaultSettings";
import { SettingsImportMenu } from "../SettingsImportMenu/SettingsImportMenu";

export function SettingDangerZone() {
    const [isOpen, setIsOpen] = useState(true);
    const [isImportOpen, setIsImportOpen] = useState(false);

    const openImportMenu = () => {
        setIsImportOpen(true);
    }
    const exportSettings = () => {
        navigator.clipboard.writeText(localStorage.getItem('settings') || JSON.stringify(defaultSettings))
    }
    
    return (
        <>
            <SetGroupBut setIsOpen={setIsOpen} isOpen={isOpen} type='dangerZone'>danger zone</SetGroupBut>
            {isOpen
            ? <div className={pageStyles.setGroupCont}  id="dangerZoneGroup">
                <div className={pageStyles.setGroupContentCont}>
                    <div className={pageStyles.setGroupContentTitleCont}>
                        <h3 className={pageStyles.setGroupContentTitle}><span>·</span>import/export settings:</h3>
                        <p className={pageStyles.setGroupContentDescription}>Import or export the settings as JSON.<br/>
                        <span className={styles.importantSelection}><em>Achtung!</em></span> Incorrect settings will be set to default value</p>
                    </div>
                    <div className={pageStyles.setGroupContentButCont}>
                        <button className={cn(pageStyles.button, styles.dangerButtons)} type="button" onClick={() => openImportMenu()}>import</button>
                        <button className={cn(pageStyles.button, styles.dangerButtons)} type="button" onClick={() => exportSettings()}>export</button>
                    </div>
                </div>
            </div>
            : null
            }
            {isImportOpen
            ? <SettingsImportMenu setIsImportOpen={setIsImportOpen}/>
            : null}
        </>
    )
}