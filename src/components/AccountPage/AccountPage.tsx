import { useContext, useEffect, useState } from "react";
import cn from 'classnames';
import styles from './styles.module.scss';
import { UserInfo } from './types';
import { BestGamesInfoTable } from "../BestGamesInfoTable/BestGamesInfoTable";
import { UserShortInfo } from "../UserShortInfo/UserShortInfo";
import { GamesInfo } from "../GamesInfo/GamesInfo";
import { PageContext } from "../../context/PageContext/PageContext";
import { Loader } from "../Loader/Loader";


export function AccountPage() {
    const {token, username} = useContext(PageContext)
    const [userInfo, setUserInfo] = useState<UserInfo>();
    const [isLoadingCompleted, setIsLoadingCompleted] = useState(false);
    
    useEffect(()=>{
        document.onkeydown = null
    },[])

    useEffect(() => {
        const connectFunc = async () => {
            const info: UserInfo = await fetch(`https://rs-clone-backend-production.up.railway.app/get_profile?username=${username}`, {
                method: 'GET',
                headers: {
                    "Authorization": `Bearer ${token}`,
                    "Content-type":  "application/json"
                }
            }).then(res => res.json())

            setUserInfo(info)
            setIsLoadingCompleted(true)
        }
        if(!isLoadingCompleted) {
            connectFunc()
        }
    }, [token, username, isLoadingCompleted]);


    return (
        <section className={cn(styles.AccountPage)} >
            {isLoadingCompleted
            ? <>
                {userInfo && <UserShortInfo userInfo={userInfo}/>}
                <div className={styles.bestGamesCont}>
                    <BestGamesInfoTable type="seconds" games={userInfo?.bestGames.filter(game => game.mode.includes('seconds'))}/>
                    <BestGamesInfoTable type="words" games={userInfo?.bestGames.filter(game => game.mode.includes('words'))} />
                </div>
                <div className={styles.gamesInfoCont}>
                    {userInfo?.games.length
                    ? <GamesInfo userInfo={userInfo}/>
                    : <span>No games found</span>}
                </div></>
            : <Loader />}
        </section>
    )
}