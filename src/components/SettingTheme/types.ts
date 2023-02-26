export type FlipTestColorsType = 'off' | 'on';
export type ColorfulModeType = 'off' | 'on';
export type ThemeType = 'default' | 'lavender';

export interface ThemeSettings {
    flipTestColors: FlipTestColorsType
    colorfulMode: ColorfulModeType
    theme: ThemeType
}