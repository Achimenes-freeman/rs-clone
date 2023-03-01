export interface UserInfo {
    username: string,
    password: string,
    dateCreation: string,
    gameCount: number,
    bestGame: Game | undefined,
    bestGames: Game[],
    games: Game[],
    settings: object,
    allTime: number
}

export interface Game {
    wpm: number
    accuracy: number
    chars: [number, number, number, number]
    mode: string
    time: number,
    date: string
}


export interface UserTokenObj {
    token: string
}