export type VolType = 'quite' | 'medium' | 'loud';
export type ScType = 'off' | 'on';
export type SeType = 'off' | 'on';

export interface SoundSettings {
    soundVolume: VolType;
    playSoundOnClick: ScType;
    playSoundOnError: SeType;
}