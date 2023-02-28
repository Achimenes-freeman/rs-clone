import React, { createContext, useMemo, useState } from "react";
import { IPageContext } from "./types";
import { SettingsInterface, defaultSettings } from "../../helpers/defaultSettings";
import { ThemeType } from "../../components/SettingTheme/types";

export const PageContext = createContext<IPageContext>({
    settings: defaultSettings,
    theme: 'default',
    username: '',
    token: '',
    updateSettings: () => {},
    updateToken: () => {},
    updateUsername: () => {}
})

export const PageContextProvider = ({children}: {children: React.ReactElement}) => {
    const [settings, setSettings] = useState<SettingsInterface>(defaultSettings);
    const [theme, setTheme] = useState<ThemeType>('default');
    const [username, setUsername] = useState('');
    const [token, setToken] = useState('');

    const updateSettings = (newSettings: SettingsInterface) => {
        setSettings(newSettings)
        setTheme(newSettings.theme.theme)
    } 
    const updateUsername = (newUsername: string) => {
        setUsername(newUsername);
    }
    const updateToken = (newToken: string) => {
        setToken(newToken)
    }

    const pageContext: IPageContext = useMemo(() => ({
        settings,
        theme,
        username,
        token,
        updateSettings,
        updateUsername,
        updateToken,
    }), [settings, theme, username, token])

    return (
        <PageContext.Provider value={pageContext}>{children}</PageContext.Provider>
    )
}