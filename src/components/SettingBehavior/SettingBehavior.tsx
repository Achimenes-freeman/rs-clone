import { useContext, useState } from "react"
import cn from 'classnames';
import pageStyles from '../SettingsPage/styles.module.scss';
import { BehaviorSettings, LangType, QrType, TdType } from "./types";
import { SetGroupBut } from "../../generics/SetGroupBut/SetGroupBut";
import { SettingsInterface } from "../../helpers/defaultSettings";
import { updateSettings } from "../../helpers/updateSettings";
import { PageContext } from "../../context/PageContext/PageContext";

export function SettingBehavior() {
    const {token} = useContext(PageContext)
    const settings: SettingsInterface = JSON.parse(localStorage.getItem('settings') || '{}');
    const behaviorSettings: BehaviorSettings = settings.behavior;

    const [isOpen, setIsOpen] = useState(true);
    const [tdState, setTdState] = useState<TdType>(behaviorSettings.testDifficulty)
    const [qrState, setQrState] = useState<QrType>(behaviorSettings.quickRestart)
    const [langState, setLangState] = useState<LangType>(behaviorSettings.language)
    const toggleTdState = (target: TdType) => {
        if(target !== tdState) {
            behaviorSettings.testDifficulty = target;
            updateSettings({behavior: behaviorSettings}, token, settings)
            setTdState(target)
        }
    }
    const toggleQrState = (target: QrType) => {
        if(target !== qrState) {
            behaviorSettings.quickRestart = target;
            updateSettings({behavior: behaviorSettings}, token, settings)
            setQrState(target)
        }
    }
    const toggleLangState = (target: LangType) => {
        if(target !== langState) {
            behaviorSettings.language = target;
            updateSettings({behavior: behaviorSettings}, token, settings)
            setLangState(target)
        }
    }

    return(
        <>
            <SetGroupBut isOpen={isOpen} setIsOpen={setIsOpen} type='behavior'>behavior</SetGroupBut>
            {isOpen
            ? <div className={pageStyles.setGroupCont} id='behaviorGroup'>
                <div className={pageStyles.setGroupContentCont}>
                    <div className={pageStyles.setGroupContentTitleCont}>
                        <h3 className={pageStyles.setGroupContentTitle}><span>·</span>test difficulty</h3>
                        <p className={pageStyles.setGroupContentDescription}>Normal is the classic type test experience. 
                        Master fails if you press a single incorrect key (meaning you have to achieve 100% accuracy).</p>
                    </div>
                    
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
                    <div className={pageStyles.setGroupContentTitleCont}>
                        <h3 className={pageStyles.setGroupContentTitle}><span>·</span>quick restart</h3>
                        <p className={pageStyles.setGroupContentDescription}>Press <em><b>tab</b></em> or <em><b>esc</b></em> to quickly restart the test.</p>
                    </div>
                    <div className={pageStyles.setGroupContentButCont}>
                        <button 
                            className={cn({[pageStyles.activeButton]: qrState === 'off'}, 
                            pageStyles.button)} type="button" onClick={() => toggleQrState('off')}>off</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: qrState === 'Tab'}, 
                            pageStyles.button)} type="button" onClick={() => toggleQrState('Tab')}>tab</button> 
                        <button 
                            className={cn({[pageStyles.activeButton]: qrState === 'Escape'}, 
                            pageStyles.button)} type="button" onClick={() => toggleQrState('Escape')}>esc</button>
                    </div>
                </div>
                <div className={pageStyles.setGroupContentCont}>
                    <div className={pageStyles.setGroupContentTitleCont}>
                        <h3 className={pageStyles.setGroupContentTitle}><span>·</span>language</h3>
                        <p className={pageStyles.setGroupContentDescription}>Change in which language you want to type.</p>
                    </div>
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