import React, { createContext, useMemo, useState } from "react";
import { IPageContext } from "./types";
import { ThemeType } from "../../components/SettingTheme/types";
import { FamilyType } from "../../components/SettingAppearance/types";

export const PageContext = createContext<IPageContext>({
    theme: 'default',
    font: 'robotoMono',
    username: '',
    token: '',
    isLoaded: false,
    updateTheme: () => {},
    updateFont: () => {},
    updateToken: () => {},
    updateUsername: () => {},
    setLoaded: () => {}
})

export const PageContextProvider = ({children}: {children: React.ReactElement}) => {
    const [theme, setTheme] = useState<ThemeType>('default');
    const [font, setFont] = useState<FamilyType>('robotoMono');
    const [username, setUsername] = useState('');
    const [token, setToken] = useState('');
    const [isLoaded, setIsLoaded] = useState(false)

    const updateTheme = (newTheme: ThemeType) => {
        setTheme(newTheme)
    } 
    const updateFont = (newFont: FamilyType) => {
        setFont(newFont)
    }
    const updateUsername = (newUsername: string) => {
        setUsername(newUsername);
    }
    const updateToken = (newToken: string) => {
        setToken(newToken)
    }
    const setLoaded = (value: boolean) => {
        setIsLoaded(value)
    } 

    const pageContext: IPageContext = useMemo(() => ({
        theme,
        font,
        username,
        token,
        isLoaded,
        updateFont,
        updateTheme,
        updateUsername,
        updateToken,
        setLoaded
    }), [theme, font, username, token, isLoaded])

    return (
        <PageContext.Provider value={pageContext}>{children}</PageContext.Provider>
    )
}