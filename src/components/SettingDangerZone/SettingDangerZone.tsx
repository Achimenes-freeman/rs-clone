import { useState } from "react";
import pageStyles from '../SettingsPage/styles.module.scss'
import { SetGroupBut } from "../../generics/SetGroupBut/SetGroupBut";
import { defaultSettings } from "../../helpers/defaultSettings";
import { SettingsImportMenu } from "../SettingsImportMenu/SettingsImportMenu";

export function SettingDangerZone() {
    const [isOpen, setIsOpen] = useState(true);
    const [isImportOpen, setIsImportOpen] = useState(false);

    const openImportMenu = () => {
        console.log(1)
        setIsImportOpen(true);
    }
    const exportSettings = () => {
        navigator.clipboard.writeText(localStorage.getItem('settings') || JSON.stringify(defaultSettings))
    }
    
    return (
        <>
            <SetGroupBut setIsOpen={setIsOpen} isOpen={isOpen}>danger zone</SetGroupBut>
            {isOpen
            ? <div className={pageStyles.setGroupCont}>
                <div className={pageStyles.setGroupContentCont}>
                    <h3 className={pageStyles.setGroupContentTitle}><span>·</span>import/export settings:</h3>
                    <div className={pageStyles.setGroupContentButCont}>
                        <button className={pageStyles.button} type="button" onClick={() => openImportMenu()}>import</button>
                        <button className={pageStyles.button} type="button" onClick={() => exportSettings()}>export</button>
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