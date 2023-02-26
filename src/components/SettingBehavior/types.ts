export type TdType = 'normal' | 'master';
export type QrType = 'off' | 'tab' | 'esc';
export type LangType = 'en' | 'ru';

export interface BehaviorSettings {
    testDifficulty: TdType
    quickRestart: QrType
    language: LangType
}