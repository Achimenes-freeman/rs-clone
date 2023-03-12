import { useContext, useState } from 'react';
import cn from 'classnames';
import styles from './styles.module.scss';
import { SetGroupButProps } from './types';
import { AnimationContext } from '../../context/AnimationContext/AnimationContext';
import { AnimationValueType } from '../../context/AnimationContext/types';

export function SetGroupBut({isOpen, setIsOpen, type, children}: SetGroupButProps) {

    const [isAnimating, setIsAnimating] = useState(false)

    const {animateGroupAppearance, ...settingsAnimations} = useContext(AnimationContext)
    let settingAnimation: AnimationValueType = null;
    switch(type) {
        case 'behavior':
            settingAnimation = settingsAnimations.behavior
            break
        case 'sound':
            settingAnimation = settingsAnimations.sound
            break
        case 'caret':
            settingAnimation = settingsAnimations.caret
            break
        case 'appearance':
            settingAnimation = settingsAnimations.appearance
            break
        case 'theme':
            settingAnimation = settingsAnimations.theme
            break
        case 'dangerZone':
            settingAnimation = settingsAnimations.dangerZone
            break
        default: break;
    }

    const toggleState = () => {
        setIsAnimating(true)
        if(isOpen) {
            if(settingAnimation) {
                clearInterval(settingAnimation)
            }

            animateGroupAppearance(type, 'disappear')
            setTimeout(() => {
                setIsOpen(!isOpen)
                setIsAnimating(false)
            }, 250)
        } else {
            if(settingAnimation) {
                clearInterval(settingAnimation)
            }
            setIsOpen(!isOpen)
            setTimeout(() => {
                animateGroupAppearance(type, 'appear')
                setTimeout(() => setIsAnimating(false), 250)
            })
        }
    }

    return(
        <button className={styles.setGroupBut} onClick={isAnimating ? () => {} : toggleState} type="button" id={`${type}Settings`}>
                <span className={cn({[styles.openGroup]: isOpen},
                    {[styles.closeGroup]: !isOpen},
                    styles.setGroupButArrow)}/>
                {children}
        </button>
    )
}