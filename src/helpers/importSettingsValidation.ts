import { AppearanceSettings } from "../components/SettingAppearance/types"
import { BehaviorSettings } from "../components/SettingBehavior/types"
import { CaretSettings } from "../components/SettingCaret/types"
import { SoundSettings } from "../components/SettingSound/types"
import { ThemeSettings } from "../components/SettingTheme/types"
import { SettingsInterface } from "./defaultSettings"

export const behaviorCheck = (behaviorSettings: BehaviorSettings, newSettings: SettingsInterface) => {
    const result: BehaviorSettings = newSettings.behavior; 
    if(behaviorSettings.language) {
        if(behaviorSettings.language === 'en' || behaviorSettings.language === 'ru') {
            result.language = behaviorSettings.language
        }
    }
    if(behaviorSettings.quickRestart) {
        if(behaviorSettings.quickRestart === 'Escape' || behaviorSettings.quickRestart === 'Tab' || behaviorSettings.quickRestart === 'off') {
            result.quickRestart = behaviorSettings.quickRestart;
        }
    }
    if(behaviorSettings.testDifficulty) {
        if(behaviorSettings.testDifficulty === 'master' || behaviorSettings.testDifficulty === 'normal') {
            result.testDifficulty = behaviorSettings.testDifficulty
        }
    }
    return result;
}

export const soundCheck = (soundSettings: SoundSettings, newSettings: SettingsInterface) => {
    const result: SoundSettings = newSettings.sound;
    if(soundSettings.playSoundOnClick) {
        if(soundSettings.playSoundOnClick === 'off' || soundSettings.playSoundOnClick === 'on') {
            result.playSoundOnClick = soundSettings.playSoundOnClick;
        }
    }
    if(soundSettings.playSoundOnError) {
        if(soundSettings.playSoundOnError === 'off' || soundSettings.playSoundOnError === 'on') {
            result.playSoundOnError = soundSettings.playSoundOnError;
        }
    }
    if(soundSettings.soundVolume) {
        if(soundSettings.soundVolume === 'loud' || soundSettings.soundVolume === 'medium' || soundSettings.soundVolume === 'quite') {
            result.soundVolume = soundSettings.soundVolume;
        }
    }
    return result;
}

export const caretCheck = (caretSettings: CaretSettings, newSettings: SettingsInterface) => {
    const result: CaretSettings = newSettings.caret;
    if(caretSettings.caretStyle) {
        if(caretSettings.caretStyle === 'default' || caretSettings.caretStyle === 'empty'
        || caretSettings.caretStyle === 'filled' || caretSettings.caretStyle === 'underscore') {
            result.caretStyle = caretSettings.caretStyle
        }
    }
    if(caretSettings.smoothCaret) {
        if(caretSettings.smoothCaret === 'off' || caretSettings.smoothCaret === 'on') {
            result.smoothCaret = caretSettings.smoothCaret
        }
    }
    return result;
}

export const appearanceCheck = (appearanceSettings: AppearanceSettings, newSettings: SettingsInterface) => {
    const result: AppearanceSettings = newSettings.appearance;
    if(appearanceSettings.fontFamily) {
        if(appearanceSettings.fontFamily === 'montserratSans' || appearanceSettings.fontFamily === 'openSans'
        || appearanceSettings.fontFamily === 'robotoMono' || appearanceSettings.fontFamily === 'spaceMono') {
            result.fontFamily = appearanceSettings.fontFamily
        }
    }
    if(appearanceSettings.fontSize) {
        if(Number(appearanceSettings.fontSize) >= 1 && Number(appearanceSettings.fontSize) <= 5) {
            result.fontSize = appearanceSettings.fontSize
        }
    }
    if(appearanceSettings.tpColor) {
        if(appearanceSettings.tpColor === 'black' || appearanceSettings.tpColor === 'main'
        || appearanceSettings.tpColor === 'sub' || appearanceSettings.tpColor === 'text') {
            result.tpColor = appearanceSettings.tpColor
        }
    }
    if(appearanceSettings.tpOpacity) {
        if(appearanceSettings.tpOpacity === '0.25' || appearanceSettings.tpOpacity === '0.5'
        || appearanceSettings.tpOpacity === '0.75' || appearanceSettings.tpOpacity === '1') {
            result.tpOpacity = appearanceSettings.tpOpacity
        }
    }
    if(appearanceSettings.tpStyle) {
        if(appearanceSettings.tpStyle === 'mini'
        || appearanceSettings.tpStyle === 'text') {
            result.tpStyle = appearanceSettings.tpStyle
        }
    }
    return result;
}

export const themeCheck = (themeSettings: ThemeSettings, newSettings: SettingsInterface) => {
    const result: ThemeSettings = newSettings.theme
    if(themeSettings.colorfulMode) {
        if(themeSettings.colorfulMode === 'off' || themeSettings.colorfulMode === 'on') {
            result.colorfulMode = themeSettings.colorfulMode
        }
    }
    if(themeSettings.flipTestColors) {
        if(themeSettings.flipTestColors === 'off' || themeSettings.flipTestColors === 'on') {
            result.flipTestColors = themeSettings.flipTestColors
        }
    }
    if(themeSettings.theme) {
        if(themeSettings.theme === 'default' || themeSettings.theme === 'lavender' 
        || themeSettings.theme === 'darkPurple' || themeSettings.theme === 'miamiNights' 
        || themeSettings.theme === 'orange' || themeSettings.theme === 'vscode') {
            result.theme = themeSettings.theme
        }
    }

    return result
}