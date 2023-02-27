import { useEffect, useState } from "react";
import cn from 'classnames';
import styles from './styles.module.scss';
import fonts from '../../fonts.module.scss';
import themes from '../../themes.module.scss';
// import { UserInfo, UserTokenObj } from './types';
import { UserInfo } from './types';
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
            // const userToken: UserTokenObj  = await fetch('https://rs-clone-backend-production.up.railway.app/login', {
            //     method: 'POST',
            //     headers: {
            //         "Content-type":  "application/json"
            //     },
            //     body: JSON.stringify({
            //         username: "iSvitka",
            //         password: "qazwsxedc"
            //     })
            // }).then(res => res.json()).catch(console.log)
    
            // const info: UserInfo = await fetch('https://rs-clone-backend-production.up.railway.app/get_profile', {
            //     headers: {
            //         "Authorization": `Bearer ${userToken.token}`,
            //         "Content-type":  "application/json"
            //     },
            //     body: JSON.stringify({username: 'iSvitka'})
            // }).then(res => res.json()).catch(console.log)
            
            const info: UserInfo = {
                username: 'iSvitka',
                password: 'qazwsxedc',
                dateCreation: "2023-02-22T16:19:18.458Z",
                gameCount: 6,
                bestGame: undefined,
                bestGames: [],
                games: [
                    {
                        wpm: 50,
                        accuracy: 98,
                        chars: [100, 100, 100, 100],
                        mode: '15seconds',
                        time: 15
                    },
                    {
                        wpm: 30,
                        accuracy: 98,
                        chars: [100, 100, 100, 100],
                        mode: '15seconds',
                        time: 15
                    },
                    {
                        wpm: 75,
                        accuracy: 98,
                        chars: [100, 100, 100, 100],
                        mode: '15seconds',
                        time: 15
                    },
                    {
                        wpm: 45,
                        accuracy: 99,
                        chars: [100, 100, 100, 100],
                        mode: '15seconds',
                        time: 15},
                    {
                        wpm: 52,
                        accuracy: 96,
                        chars: [100, 100, 100, 100],
                        mode: '15seconds',
                        time: 15},
                    {
                        wpm: 49,
                        accuracy: 100,
                        chars: [100, 100, 100, 100],
                        mode: '15seconds',
                        time: 15},
                ],
                settings: {},
                allTime: 90
            }

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