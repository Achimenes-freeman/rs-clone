import { Game } from "../AccountPage/types";

export interface TableProps {
    type: 'seconds' | 'words';
    games: Game[] | undefined
}