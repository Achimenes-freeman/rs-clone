import { FamilyType } from "../components/SettingAppearance/types";
import { ThemeType } from "../components/SettingTheme/types";

export const getThemeVars = (theme: ThemeType) => {
    switch(theme) {
        case 'default':
            return [
                ['--background', '#323437'],
                ['--caret', '#e2b714'],
                ['----main', '#e2b714'],
                ['--sub', '#646669'],
                ['--subAlt', '#2c2e31'],
                ['--text', '#d1d0c5'],
                ['--error', '#ca4754'],
            ]
        case 'lavender': 
            return [
                ['--background', '#2e1a47'],
                ['--caret', '#f7f2ea'],
                ['--main', '#f7f2ea'],
                ['--sub', '#c18fff'],
                ['--subAlt', '#27173c'],
                ['--text', '#f7f2ea'],
                ['--error', '#ca4754'],
            ]
        case 'darkPurple': 
            return [
                ['--background', '#000000'],
                ['--caret', '#c58aff'],
                ['----main', '#c58aff'],
                ['--sub', '#972fff'],
                ['--subAlt', '#1e001e'],
                ['--text', '#ebd7ff'],
                ['--error', '#da3333'],
            ]
        case 'miamiNights': 
            return [
                ['--background', '#18181a'],
                ['--caret', '#e4609b'],
                ['----main', '#e4609b'],
                ['--sub', '#47bac0'],
                ['--subAlt', '#0f0f10'],
                ['--text', '#ffffff'],
                ['--error', '#fff591'],
            ]
        case 'orange':
            return [
                ['--background', '#313131'],
                ['--caret', '#f66e0d'],
                ['----main', '#f66e0d'],
                ['--sub', '#616161'],
                ['--subAlt', '#2b2b2b'],
                ['--text', '#f5e6c8'],
                ['--error', '#e72d2d'],
            ]
        case 'vscode': 
            return [
                ['--background', '#1e1e1e'],
                ['--caret', '#569cd6'],
                ['----main', '#007acc'],
                ['--sub', '#4d4d4d'],
                ['--subAlt', '#191919'],
                ['--text', '#d4d4d4'],
                ['--error', '#f44747'],
            ]
        default: return [
            ['--background', '#323437'],
            ['--caret', '#e2b714'],
            ['----main', '#e2b714'],
            ['--sub', '#646669'],
            ['--subAlt', '#2c2e31'],
            ['--text', '#d1d0c5'],
            ['--error', '#ca4754'],
        ];
    }
}

export const getFontVar = (font: FamilyType) => {
    switch(font) {
        case 'robotoMono':
            return ['--font','"Roboto Mono", monospace']
        case 'spaceMono':
            return ['--font','"Space Mono", monospace']
        case 'openSans':
            return ['--font','"Open Sans", sans-serif']
        case 'montserratSans':
            return ['--font','"Montserrat", sans-serif']
        default: return ['--font','"Roboto Mono", monospace']
    }
}