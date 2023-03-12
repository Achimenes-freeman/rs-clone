export type CSmType = 'off' | 'on'
export type CStType = 'default' | 'underscore' | 'filled' | 'empty'

export interface CaretSettings {
    smoothCaret: CSmType
    caretStyle: CStType
}