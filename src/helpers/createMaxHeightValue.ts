import { SettingIdType } from "../context/AnimationContext/types"

export const createMaxHeightValue = (settingId: SettingIdType) => {
    const windowWidth = window.innerWidth
    switch(settingId) {
        case 'behavior':
            if(windowWidth >= 320 && windowWidth <= 424) {
                return 668
            }
            if (windowWidth >= 425 && windowWidth <= 767) {
                return 630
            }
            if (windowWidth >= 768 && windowWidth <= 1023) {
                return 294
            }
            if (windowWidth >= 1024 && windowWidth <= 1439) {
                return 237
            }
            return 218;

        case 'sound':
            if(windowWidth >= 320 && windowWidth <= 424) {
                return 630
            }
            if (windowWidth >= 425 && windowWidth <= 767) {
                return 573
            }
            if (windowWidth >= 768 && windowWidth <= 1023) {
                return 237
            }
            if (windowWidth >= 1024 && windowWidth <= 1439) {
                return 218
            }
            return 199;

        case 'caret':
            if(windowWidth >= 320 && windowWidth <= 424) {
                return 459
            }
            if (windowWidth >= 425 && windowWidth <= 767) {
                return 459
            }
            if (windowWidth >= 768 && windowWidth <= 1023) {
                return 164
            }
            if (windowWidth >= 1024 && windowWidth <= 1439) {
                return 126
            }
            return 126;

        case 'appearance':
            if(windowWidth >= 320 && windowWidth <= 424) {
                return 1178
            }
            if (windowWidth >= 425 && windowWidth <= 767) {
                return 1140
            }
            if (windowWidth >= 768 && windowWidth <= 1023) {
                return 402
            }
            if (windowWidth >= 1024 && windowWidth <= 1439) {
                return 364
            }
            return 345;

        case 'theme':
            if(windowWidth >= 320 && windowWidth <= 424) {
                return 661
            }
            if (windowWidth >= 425 && windowWidth <= 767) {
                return 604
            }
            if (windowWidth >= 768 && windowWidth <= 1023) {
                return 345
            }
            if (windowWidth >= 1024 && windowWidth <= 1439) {
                return 307
            }
            return 256;

        case 'dangerZone':
            if(windowWidth >= 320 && windowWidth <= 424) {
                return 210
            }
            if (windowWidth >= 425 && windowWidth <= 767) {
                return 191
            }
            if (windowWidth >= 768 && windowWidth <= 1023) {
                return 91
            }
            if (windowWidth >= 1024 && windowWidth <= 1439) {
                return 72
            }
            return 72;

        default: return 0;
    }
    
}