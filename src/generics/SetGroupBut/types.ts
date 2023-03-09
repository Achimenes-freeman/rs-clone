import { SettingIdType } from "../../context/AnimationContext/types";

export interface SetGroupButProps {
    isOpen: boolean;
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
    type: SettingIdType
    children: string;
}