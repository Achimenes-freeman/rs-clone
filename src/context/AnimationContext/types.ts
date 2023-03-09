export type SettingIdType = 'behavior' | 'sound' | 'caret' | 'appearance' | 'theme' | 'dangerZone';
export type AnimationType = 'appear' | 'disappear';

export type AnimationValueType = NodeJS.Timer | null
export type IAnimationContext = {
    [key in SettingIdType]: AnimationValueType
} & {
    animateGroupAppearance: (settingId: SettingIdType, type: AnimationType) => void
}