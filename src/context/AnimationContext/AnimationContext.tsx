import React, { createContext, useCallback, useMemo, useState } from "react";
import { SettingIdType, AnimationType, AnimationValueType, IAnimationContext } from "./types";


export const AnimationContext = createContext<IAnimationContext>({
    'behavior': null,
    'sound': null,
    'caret': null,
    'appearance': null,
    'theme': null,
    'dangerZone': null,
    animateGroupAppearance: () => {},
})

export const AnimationContextProvider = ({children}: {children: React.ReactElement}) => {
    const [behaviorAnimation, setBehaviorAnimation] = useState<AnimationValueType>(null)
    const [soundAnimation, setSoundAnimation] = useState<AnimationValueType>(null)
    const [caretAnimation, setCaretAnimation] = useState<AnimationValueType>(null)
    const [appearanceAnimation, setAppearanceAnimation] = useState<AnimationValueType>(null)
    const [themeAnimation, setThemeAnimation] = useState<AnimationValueType>(null)
    const [dangerZoneAnimation, setDangerZoneAnimation] = useState<AnimationValueType>(null)

    const updateBehaviorAnimation = (value: AnimationValueType) => {
        setBehaviorAnimation(value)
    }
    const updateSoundAnimation = (value: AnimationValueType) => {
        setSoundAnimation(value)
    }
    const updateCaretAnimation = (value: AnimationValueType) => {
        setCaretAnimation(value)
    }
    const updateAppearanceAnimation = (value: AnimationValueType) => {
        setAppearanceAnimation(value)
    }
    const updateThemeAnimation = (value: AnimationValueType) => {
        setThemeAnimation(value)
    }
    const updateDangerZoneAnimation = (value: AnimationValueType) => {
        setDangerZoneAnimation(value)
    }

    const updateSettingAnimationValue = useCallback((type: SettingIdType, value: AnimationValueType) => {
        switch(type) {
            case 'behavior':
                updateBehaviorAnimation(value)
                break;
            case 'sound':
                updateSoundAnimation(value)
                break;
            case 'caret':
                updateCaretAnimation(value)
                break;
            case 'appearance':
                updateAppearanceAnimation(value)
                break;
            case 'theme':
                updateThemeAnimation(value)
                break;
            case 'dangerZone':
                updateDangerZoneAnimation(value)
                break;
            default: break;
        }
    }, [])




    const openSettingGroup = useCallback((maxHeight: number, element: HTMLElement, settingId: SettingIdType) => {
        const setGroup = element;
        setGroup.style.height = `0px`;
        const step = maxHeight / 36;
        let height = step;
        const animationTimer = setInterval(() => {
            if(height >= maxHeight) {
                setGroup.style.overflow = 'auto'
                updateSettingAnimationValue(settingId, null)
                clearInterval(animationTimer)
            }
            setGroup.style.height = `${height}px`;
            height += step
        }, 7)
        updateSettingAnimationValue(settingId, animationTimer)
    }, [updateSettingAnimationValue])
    
    const closeSettingGroup = useCallback((maxHeight: number, element: HTMLElement, settingId: SettingIdType) => {
        const setGroup = element;
        setGroup.style.height = `${maxHeight}px`;
        const step = maxHeight / 36;
        let height = step;
        const animationTimer = setInterval(() => {
            if(Number(setGroup.style.height) >= maxHeight) {
                setGroup.style.overflow = 'auto'
                updateSettingAnimationValue(settingId, null)
                clearInterval(animationTimer)
            }
    
            setGroup.style.height = `${maxHeight - height}px`;
            height += step
        }, 7)
        updateSettingAnimationValue(settingId, animationTimer)
    }, [updateSettingAnimationValue])
    
    const animateGroupAppearance = useCallback((settingId: SettingIdType, type: AnimationType) => {
        const settingCont = document.getElementById(`${settingId}Group`);
        if(settingCont) {
            settingCont.style.overflow = 'hidden';
            let maxHeight = 0
            switch(settingId) {
                case 'behavior':
                    maxHeight = 218;
                    break;
                case 'sound':
                    maxHeight = 199;
                    break;
                case 'caret':
                    maxHeight = 126;
                    break;
                case 'appearance':
                    maxHeight = 345;
                    break;
                case 'theme':
                    maxHeight = 256;
                    break;
                case 'dangerZone':
                    maxHeight = 72;
                    break;
                default: break;
            }
        
            switch(type) {
                case 'appear':
                    openSettingGroup(maxHeight, settingCont, settingId);
                    break
                case 'disappear':
                    closeSettingGroup(maxHeight, settingCont, settingId);
                    break
                default: break;
            }
        }
    }, [openSettingGroup, closeSettingGroup])





    const animationContext = useMemo(() => ({
        'behavior': behaviorAnimation, 
        'sound': soundAnimation, 
        'caret': caretAnimation, 
        'appearance': appearanceAnimation, 
        'theme': themeAnimation, 
        'dangerZone': dangerZoneAnimation,
        animateGroupAppearance
    })
    ,[
            behaviorAnimation, soundAnimation, caretAnimation, 
            appearanceAnimation, themeAnimation, dangerZoneAnimation,
            animateGroupAppearance
    ]) ;

    return <AnimationContext.Provider value={animationContext}>{children}</AnimationContext.Provider>
}

