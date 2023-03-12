export type FlipTestColorsType = 'off' | 'on';
export type ColorfulModeType = 'off' | 'on';
export type ThemeType = 'default' | 'lavender' | 'orange' | 'darkPurple' | 'vscode' | 'miamiNights';

export interface ThemeSettings {
    flipTestColors: FlipTestColorsType
    colorfulMode: ColorfulModeType
    theme: ThemeType
}