import { AppearanceSettings } from "../components/SettingAppearance/types";
import { BehaviorSettings } from "../components/SettingBehavior/types"
import { CaretSettings } from "../components/SettingCaret/types";
import { SoundSettings } from "../components/SettingSound/types"
import { ThemeSettings } from "../components/SettingTheme/types";

export interface SettingsInterface {
    behavior: BehaviorSettings,
    sound: SoundSettings,
    caret: CaretSettings,
    appearance: AppearanceSettings,
    theme: ThemeSettings
}

export const defaultSettings: SettingsInterface = {
    behavior: {
        testDifficulty: 'normal',
        quickRestart: 'off',
        language: 'en'
    },
    sound: {
        soundVolume: 'quite',
        playSoundOnClick: 'off',
        playSoundOnError: 'off'
    },
    caret: {
        smoothCaret: 'off',
        caretStyle: 'default',
    },
    appearance: {
        tpStyle: 'mini',
        tpColor: 'main',
        tpOpacity: '1',
        fontSize: '1.5',
        fontFamily: 'robotoMono'
    },
    theme: {
        flipTestColors: 'off',
        colorfulMode: 'off',
        theme: 'default'
    }
}