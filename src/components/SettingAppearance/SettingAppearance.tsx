import { useContext, useState } from "react";
import cn from 'classnames';
import { AppearanceSettings, ColorType, FamilyType, OpacityType, SizeType, StyleType } from "./types";
import styles from './styles.module.scss';
import pageStyles from '../SettingsPage/styles.module.scss';
import { SetGroupBut } from "../../generics/SetGroupBut/SetGroupBut";
import { SettingsInterface } from "../../helpers/defaultSettings";
import { PageContext } from "../../context/PageContext/PageContext";
import { updateSettings } from "../../helpers/updateSettings";

export function SettingAppearance() {
    const {token, updateFont} = useContext(PageContext)
    const settings: SettingsInterface = JSON.parse(localStorage.getItem('settings') || '{}');
    const appearanceSettings: AppearanceSettings = settings.appearance;
    
    const [isOpen, setIsOpen] = useState(true);
    const [styleState, setStyleState] = useState<StyleType>(appearanceSettings.tpStyle);
    const [colorState, setColorState] = useState<ColorType>(appearanceSettings.tpColor);
    const [opacityState, setOpacityState] = useState<OpacityType>(appearanceSettings.tpOpacity);
    const [sizeState, setSizeState] = useState<SizeType>(appearanceSettings.fontSize);
    const [familyState, setFamilyState] = useState<FamilyType>(appearanceSettings.fontFamily);
    
    const toggleStyleState = (target: StyleType) => {
        if(target !== styleState) {
            appearanceSettings.tpStyle = target;
            updateSettings({appearance: appearanceSettings}, token, settings)
            setStyleState(target);
        }
    }
    const toggleColorState = (target: ColorType) => {
        if(target !== colorState) {
            appearanceSettings.tpColor = target;
            updateSettings({appearance: appearanceSettings}, token, settings)
            setColorState(target);
        }
    }
    const toggleOpacity = (target: OpacityType) => {
        if(target !== opacityState) {
            appearanceSettings.tpOpacity = target;
            updateSettings({appearance: appearanceSettings}, token, settings)
            setOpacityState(target);
        }
    }
    const toggleSizeState = (target: SizeType) => {
        if(target !== sizeState) {
            appearanceSettings.fontSize = target;
            updateSettings({appearance: appearanceSettings}, token, settings)
            setSizeState(target)
        }
    }
    const toggleFamilyState = (target: FamilyType) => {
        if(target !== familyState) {
            appearanceSettings.fontFamily = target;
            updateSettings({appearance: appearanceSettings}, token, settings, target, updateFont)
            setFamilyState(target);
        }
    }
    
    const sizeOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target: SizeType = event.target.value;
        toggleSizeState(target);
    }

    return(
        <>
            <SetGroupBut setIsOpen={setIsOpen} isOpen={isOpen}>appearance</SetGroupBut>
            {isOpen
            ? <div className={pageStyles.setGroupCont}>
                <div className={pageStyles.setGroupContentCont}>
                    <h3 className={pageStyles.setGroupContentTitle}><span>·</span>timer/progress style:</h3>
                    <div className={pageStyles.setGroupContentButCont}>
                        <button 
                            className={cn({[pageStyles.activeButton]: styleState === 'text'}, 
                            pageStyles.button)} type="button" onClick={() => toggleStyleState('text')}>text</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: styleState === 'mini'}, 
                            pageStyles.button)} type="button" onClick={() => toggleStyleState('mini')}>mini</button>
                    </div>
                </div>
                <div className={pageStyles.setGroupContentCont}>
                    <h3 className={pageStyles.setGroupContentTitle}><span>·</span>timer/progress color:</h3>
                    <div className={pageStyles.setGroupContentButCont}>
                        <button 
                            className={cn({[pageStyles.activeButton]: colorState === 'black'}, 
                            pageStyles.button)} type="button" onClick={() => toggleColorState('black')}>black</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: colorState === 'sub'}, 
                            pageStyles.button)} type="button" onClick={() => toggleColorState('sub')}>sub</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: colorState === 'text'}, 
                            pageStyles.button)} type="button" onClick={() => toggleColorState('text')}>text</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: colorState === 'main'}, 
                            pageStyles.button)} type="button" onClick={() => toggleColorState('main')}>main</button>
                    </div>
                </div>
                <div className={pageStyles.setGroupContentCont}>
                    <h3 className={pageStyles.setGroupContentTitle}><span>·</span>timer/progress opacity:</h3>
                    <div className={pageStyles.setGroupContentButCont}>
                        <button 
                            className={cn({[pageStyles.activeButton]: opacityState === '0.25'}, 
                            pageStyles.button)} type="button" onClick={() => toggleOpacity('0.25')}>0.25</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: opacityState === '0.5'}, 
                            pageStyles.button)} type="button" onClick={() => toggleOpacity('0.5')}>0.5</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: opacityState === '0.75'}, 
                            pageStyles.button)} type="button" onClick={() => toggleOpacity('0.75')}>0.75</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: opacityState === '1'}, 
                            pageStyles.button)} type="button" onClick={() => toggleOpacity('1')}>1</button>
                    </div>
                </div>
                <div className={pageStyles.setGroupContentCont}>
                    <h3 className={pageStyles.setGroupContentTitle}><span>·</span>font size:</h3>
                    <div className={pageStyles.setGroupContentButCont}>
                        <input className={styles.defaultRangeInput} type="range" min={1} max={5} step={0.1} value={sizeState} onChange={sizeOnChange}/>
                        <span className={styles.label}>{sizeState}</span>
                    </div>
                </div>
                <div className={pageStyles.setGroupContentCont}>
                    <h3 className={pageStyles.setGroupContentTitle}><span>·</span>font family:</h3>
                    <div className={pageStyles.setGroupContentButCont}>
                        <button 
                            className={cn({[pageStyles.activeButton]: familyState === 'robotoMono'}, 
                            pageStyles.button)} type="button" onClick={() => toggleFamilyState('robotoMono')}>Roboto Mono</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: familyState === 'spaceMono'}, 
                            pageStyles.button)} type="button" onClick={() => toggleFamilyState('spaceMono')}>Space Mono</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: familyState === 'openSans'}, 
                            pageStyles.button)} type="button" onClick={() => toggleFamilyState('openSans')}>Open Sans</button>
                        <button 
                            className={cn({[pageStyles.activeButton]: familyState === 'montserratSans'}, 
                            pageStyles.button)} type="button" onClick={() => toggleFamilyState('montserratSans')}>Montserrat</button>
                    </div>
                </div>
            </div>
            : null
            }
        </>
    )
}