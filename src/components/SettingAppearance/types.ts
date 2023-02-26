export type StyleType = 'bar' | 'text' | 'mini';
export type ColorType = 'black' | 'sub' | 'text' | 'main';
export type OpacityType = '0.25' | '0.5' | '0.75' | '1';
export type SizeType = string;
export type FamilyType = 'robotoMono' | 'spaceMono' | 'openSans' | 'montserratSans';

export interface AppearanceSettings {
    tpStyle: StyleType,
    tpColor: ColorType,
    tpOpacity: OpacityType,
    fontSize: SizeType,
    fontFamily: FamilyType
}