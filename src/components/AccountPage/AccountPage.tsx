import { useEffect, useState } from "react";
import cn from 'classnames';
import styles from './styles.module.scss';
import fonts from '../../fonts.module.scss';
import themes from '../../themes.module.scss';
import { UserInfo, UserTokenObj } from './types';
// import { UserInfo } from './types';
import { SettingsInterface } from "../../helpers/defaultSettings";
import { BestGamesInfoTable } from "../BestGamesInfoTable/BestGamesInfoTable";
import { UserShortInfo } from "../UserShortInfo/UserShortInfo";
import { GamesInfo } from "../GamesInfo/GamesInfo";


export function AccountPage() {
    const settings: SettingsInterface = JSON.parse(localStorage.getItem('settings') || 'null');

    const [userInfo, setUserInfo] = useState<UserInfo>();
    const [isLoadingCompleted, setIsLoadingCompleted] = useState(false);
    
    useEffect(() => {
        const connectFunc = async () => {
            const userToken: UserTokenObj  = await fetch('https://rs-clone-backend-production.up.railway.app/login', {
                method: 'POST',
                headers: {
                    "Content-type":  "application/json"
                },
                body: JSON.stringify({
                    username: "iSvitka",
                    password: "qazwsxedc"
                })
            }).then(res => res.json())
    
            const info: UserInfo = await fetch('https://rs-clone-backend-production.up.railway.app/get_profile?username=iSvitka', {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${userToken.token}`,
                    "Content-type":  "application/json"
                }
            }).then(res => res.json())
            // const info: UserInfo = {
            //     username: 'iSvitka',
            //     password: 'qazwsxedc',
            //     dateCreation: "2023-02-22T16:19:18.458Z",
            //     gameCount: 18,
            //     bestGame: undefined,
            //     bestGames: [],
            //     games: [
            //         {
            //             wpm: 50,
            //             accuracy: 98,
            //             chars: [100, 100, 100, 100],
            //             mode: '15seconds',
            //             time: 15,
            //             date: new Date(2023, 2, 17, 12, 55, 35)
            //         },
            //         {
            //             wpm: 30,
            //             accuracy: 98,
            //             chars: [100, 100, 100, 100],
            //             mode: '15seconds',
            //             time: 15,
            //             date: new Date(2023, 2, 17, 13, 21, 45)
            //         },
            //         {
            //             wpm: 75,
            //             accuracy: 98,
            //             chars: [100, 100, 100, 100],
            //             mode: '15seconds',
            //             time: 15,
            //             date: new Date(2023, 2, 17, 18, 35, 24)
            //         },
            //         {
            //             wpm: 45,
            //             accuracy: 99,
            //             chars: [100, 100, 100, 100],
            //             mode: '15seconds',
            //             time: 15,
            //             date: new Date(2023, 2, 18, 10, 5, 17)
            //         },
            //         {
            //             wpm: 52,
            //             accuracy: 96,
            //             chars: [100, 100, 100, 100],
            //             mode: '15seconds',
            //             time: 15,
            //             date: new Date(2023, 2, 18, 12, 42, 35)
            //         },
            //         {
            //             wpm: 49,
            //             accuracy: 100,
            //             chars: [100, 100, 100, 100],
            //             mode: '15seconds',
            //             time: 15,
            //             date: new Date(2023, 2, 18, 14, 12, 45)
            //         },
            //         {
            //             wpm: 50,
            //             accuracy: 98,
            //             chars: [100, 100, 100, 100],
            //             mode: '15seconds',
            //             time: 15,
            //             date: new Date(2023, 2, 18, 15, 52, 15)
            //         },
            //         {
            //             wpm: 30,
            //             accuracy: 98,
            //             chars: [100, 100, 100, 100],
            //             mode: '15seconds',
            //             time: 15,
            //             date: new Date(2023, 2, 19, 1, 5, 1)
            //         },
            //         {
            //             wpm: 75,
            //             accuracy: 98,
            //             chars: [100, 100, 100, 100],
            //             mode: '15seconds',
            //             time: 15,
            //             date: new Date(2023, 2, 19, 8, 0, 45)
            //         },
            //         {
            //             wpm: 45,
            //             accuracy: 99,
            //             chars: [100, 100, 100, 100],
            //             mode: '15seconds',
            //             time: 15,
            //             date: new Date(2023, 2, 19, 10, 55, 56)
            //         },
            //         {
            //             wpm: 52,
            //             accuracy: 96,
            //             chars: [100, 100, 100, 100],
            //             mode: '15seconds',
            //             time: 15,
            //             date: new Date(2023, 2, 19, 11, 5, 5)
            //         },
            //         {
            //             wpm: 49,
            //             accuracy: 100,
            //             chars: [100, 100, 100, 100],
            //             mode: '15seconds',
            //             time: 15,
            //             date: new Date(2023, 2, 19, 12, 54, 42)
            //         },
            //         {
            //             wpm: 50,
            //             accuracy: 98,
            //             chars: [100, 100, 100, 100],
            //             mode: '15seconds',
            //             time: 15,
            //             date: new Date(2023, 2, 19, 13, 14, 52)
            //         },
            //         {
            //             wpm: 30,
            //             accuracy: 98,
            //             chars: [100, 100, 100, 100],
            //             mode: '15seconds',
            //             time: 15,
            //             date: new Date(2023, 2, 19, 16, 45, 12)
            //         },
            //         {
            //             wpm: 75,
            //             accuracy: 98,
            //             chars: [100, 100, 100, 100],
            //             mode: '15seconds',
            //             time: 15,
            //             date: new Date(2023, 2, 19, 16, 50, 19)
            //         },
            //         {
            //             wpm: 45,
            //             accuracy: 99,
            //             chars: [100, 100, 100, 100],
            //             mode: '15seconds',
            //             time: 15,
            //             date: new Date(2023, 2, 19, 16, 55, 46)
            //         },
            //         {
            //             wpm: 52,
            //             accuracy: 96,
            //             chars: [100, 100, 100, 100],
            //             mode: '15seconds',
            //             time: 15,
            //             date: new Date(2023, 2, 19, 17, 56, 12)
            //         },
            //         {
            //             wpm: 49,
            //             accuracy: 100,
            //             chars: [100, 100, 100, 100],
            //             mode: '15seconds',
            //             time: 15,
            //             date: new Date(2023, 0, 19, 17, 58, 35)
            //         },
            //     ],
            //     settings: {},
            //     allTime: 90
            // }

            setUserInfo(info)
            setIsLoadingCompleted(true)
        }
        if(!isLoadingCompleted) {
            connectFunc()
        }
    }, [isLoadingCompleted]);


    return (
        <section className={cn(styles.AccountPage, themes[`${settings.theme.theme}Theme`], fonts[`${settings.appearance.fontFamily}Font`])} >
            {userInfo && <UserShortInfo userInfo={userInfo}/>}
            <div className={styles.bestGamesCont}>
                <BestGamesInfoTable type="seconds" games={userInfo?.bestGames.filter(game => game.mode.includes('seconds'))}/>
                <BestGamesInfoTable type="words" games={userInfo?.bestGames.filter(game => game.mode.includes('words'))} />
            </div>
            <div className={styles.gamesInfoCont}>
                {userInfo?.games.length
                ? <GamesInfo userInfo={userInfo}/>
                : <span>No games found</span>}
            </div>
        </section>
    )
}