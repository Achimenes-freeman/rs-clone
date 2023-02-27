import { UserInfo } from "../AccountPage/types";

export interface GamesListProps {
    userInfo: UserInfo
}

export type SortType = 'off' | 'low' | 'high'
export type SortMethod = 'wpm' | 'acc' | 'date'