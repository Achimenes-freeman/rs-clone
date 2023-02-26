import { useState } from "react"
import cn from 'classnames';
import pageStyles from '../SettingsPage/styles.module.scss';
import { BehaviorSettings, LangType, QrType, TdType } from "./types";
import { SetGroupBut } from "../../generics/SetGroupBut/SetGroupBut";
import { SettingsInterface } from "../../helpers/defaultSettings";

export function SettingBehavior() {
    const settings: SettingsInterface = JSON.parse(localStorage.getItem('settings') || 'null');
    const behaviorSettings: BehaviorSettings = settings.behavior;

    const [isOpen, setIsOpen] = useState(true);
    const [tdState, setTdState] = useState<TdType>(behaviorSettings.testDifficulty)
    const [qrState, setQrState] = useState<QrType>(behaviorSettings.quickRestart)
    const [langState, setLangState] = useState<LangType>(behaviorSettings.language)
    const toggleTdState = (target: TdType) => {
        if(target !== tdState) {
            behaviorSettings.testDifficulty = target;
            localStorage.setItem('settings', JSON.stringify(settings))
            setTdState(target)
        }
    }
    const toggleQrState = (target: QrType) => {
        if(target !== qrState) {
            behaviorSettings.quickRestart = target;
            localStorage.setItem('settings', JSON.stringify(settings))
            setQrState(target)
        }
    }
    const toggleLangState = (target: LangType) => {
        if(target !== langState) {
            behaviorSettings.language = target;
            localStorage.setItem('settings', JSON.stringify(settings))
            setLangState(target)
        }
    }

    return(
        <>
            <SetGroupBut isOpen={isOpen} setIsOpen={setIsOpen}>behavior</SetGroupBut>
            {isOpen
            ? <div className={pageStyles.setGroupCont}>
                <div className={pageStyles.setGroupContentCont}>
                    <h3 className={pageStyles.setGroupContentTitle}><span>·</span>test difficulty</h3>
                    <div className={pageStyles.setGroupContentButCont}>
                        <button 
                            className={cn({[pageStyles.activeButton]: tdState === 'normal'}, 
                            pageStyles.button)} type="button" onClick={() => toggleTdState('normal')}>normal</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: tdState === 'master'}, 
                            pageStyles.button)} type="button" onClick={() => toggleTdState('master')}>master</button>
                    </div>
                </div>
                <div className={pageStyles.setGroupContentCont}>
                    <h3 className={pageStyles.setGroupContentTitle}><span>·</span>quick restart</h3>
                    <div className={pageStyles.setGroupContentButCont}>
                        <button 
                            className={cn({[pageStyles.activeButton]: qrState === 'off'}, 
                            pageStyles.button)} type="button" onClick={() => toggleQrState('off')}>off</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: qrState === 'tab'}, 
                            pageStyles.button)} type="button" onClick={() => toggleQrState('tab')}>tab</button> 
                        <button 
                            className={cn({[pageStyles.activeButton]: qrState === 'esc'}, 
                            pageStyles.button)} type="button" onClick={() => toggleQrState('esc')}>esc</button>
                    </div>
                </div>
                <div className={pageStyles.setGroupContentCont}>
                    <h3 className={pageStyles.setGroupContentTitle}><span>·</span>language</h3>
                    <div className={pageStyles.setGroupContentButCont}>
                        <button 
                            className={cn({[pageStyles.activeButton]: langState === 'en'}, 
                            pageStyles.button)} type="button" onClick={() => toggleLangState('en')}>english</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: langState === 'ru'}, 
                            pageStyles.button)} type="button" onClick={() => toggleLangState('ru')}>russian</button>
                    </div>
                </div>
            </div>
            : null
            }
        </>
    )
}