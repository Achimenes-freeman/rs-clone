import { ThemeType } from "../../components/SettingTheme/types";
import { SettingsInterface } from "../../helpers/defaultSettings";

export interface IPageContext {
    settings: SettingsInterface
    theme: ThemeType
    username: string
    token: string
    updateSettings: (newSettings: SettingsInterface) => void
    updateToken: (newToken: string) => void
    updateUsername: (newUsername: string) => void
}