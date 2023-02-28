export type TdType = 'normal' | 'master';
export type QrType = 'off' | 'Tab' | 'Escape';
export type LangType = 'en' | 'ru';

export interface BehaviorSettings {
    testDifficulty: TdType
    quickRestart: QrType
    language: LangType
}