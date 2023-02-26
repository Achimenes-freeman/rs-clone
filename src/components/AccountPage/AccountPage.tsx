import { useEffect, useState } from "react";
// import { UserInfo, UserTokenObj } from './types';
import { UserInfo } from './types';
import styles from './styles.module.scss';


export function AccountPage() {
    const [userInfo, setUserInfo] = useState<UserInfo>();
    const [isLoadingCompleted, setIsLoadingCompleted] = useState(false);

    const getDay = (date: Date) => {
        const dayNum = date.getDate()
        if(dayNum < 10) {
            return 0 + dayNum.toString()
        }
        return dayNum.toString();
    }
    const getMonth = (date: Date) => {
        const month: number = date.getMonth();
        switch(month) {
            case 0:
                return 'Jan';
            case 1:
                return 'Feb';
            case 2:
                return 'Mar';
            case 3:
                return 'Apr';
            case 4:
                return 'May';
            case 5:
                return 'Jun';
            case 6:
                return 'Jul';
            case 7:
                return 'Aug';
            case 8:
                return 'Sep';
            case 9:
                return 'Oct';
            case 10:
                return 'Nov';
            case 11:
                return 'Dec';
            default: 
                return 'Jan';
        }
    }
    const getYear = (date: Date) => date.getFullYear().toString()

    const getJoinDate = () => {
        const dateCreation = new Date(userInfo?.dateCreation || 'null');
        return `Joined ${getDay(dateCreation)} ${getMonth(dateCreation)} ${getYear(dateCreation)}`
    }
    
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
                gameCount: 0,
                bestGame: undefined,
                bestGames: [],
                games: [],
                settings: {},
                allTime: 0
            }

            setUserInfo(info)
            setIsLoadingCompleted(true)
        }
        if(!isLoadingCompleted) {
            connectFunc()
        }
    }, [isLoadingCompleted]);


    return (
        <section className={styles.AccountPage} >
            <div className={styles.userCont}>
                <div className={styles.userNameAndDateCont}>
                    <h2>{userInfo?.username}</h2>
                    <h4>{getJoinDate()}</h4>
                </div>
                <div className={styles.separator}/>
                <div className={styles.userTotalInfoCont}>
                    <div className={styles.userTotalInfoElem}>
                        <h4>tests completed</h4>
                        <h2>{userInfo?.gameCount}</h2>
                    </div>
                    <div className={styles.userTotalInfoElem}>
                        <h4>time typing</h4>
                        <h2>{userInfo?.allTime}</h2>
                    </div>
                </div>
            </div>
            <div className={styles.bestGamesCont}>
                1
            </div>
            <div className={styles.gamesInfoCont}>
                {userInfo?.games.length
                ? 'Games'
                : 'No games found'}
            </div>
        </section>
    )
}