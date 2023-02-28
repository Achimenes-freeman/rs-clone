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
                ['----main', '#f7f2ea'],
                ['--sub', '#c18fff'],
                ['--subAlt', '#27173c'],
                ['--text', '#f7f2ea'],
                ['--error', '#ca4754'],
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