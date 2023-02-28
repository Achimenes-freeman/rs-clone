import { FamilyType } from "../../components/SettingAppearance/types";
import { ThemeType } from "../../components/SettingTheme/types";

export interface IPageContext {
    theme: ThemeType
    font: FamilyType
    username: string
    token: string,
    isLoaded: boolean
    updateTheme: (newTheme: ThemeType) => void
    updateFont: (newFont: FamilyType) => void
    updateToken: (newToken: string) => void
    updateUsername: (newUsername: string) => void
    setLoaded: () => void
}