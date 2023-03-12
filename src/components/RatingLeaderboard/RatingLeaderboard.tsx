import { useEffect, useState } from 'react'
import { RatingRow } from '../RatingRow/RatingRow'
import styles from './styles.module.scss'
import { RateLeadBoardProps } from './types'
import { getFormattedDate } from '../../helpers/dateAndTimeTransformations'

export function RatingLeaderboard({users}: RateLeadBoardProps) {
    const [sortedUsers, setSortedUsers] = useState(users)
    const [isSorted, setIsSorted] = useState(false)
    useEffect(() => {
        const sortingFunc = async () => {
            sortedUsers.sort((userA, userB) => userB.bestGame.wpm - userA.bestGame.wpm)
            setSortedUsers(sortedUsers)
            setIsSorted(true)
        }

        if(!isSorted) {
            sortingFunc()
        }
    }, [isSorted, sortedUsers])

    return (
        <div className={styles.RateLeadBoard}>
            <div className={styles.rowsCont}>
                <RatingRow key={Math.random()} bg/>
                {sortedUsers.map((user, index) => 
                    <RatingRow 
                        key={Math.random()}
                        bg={Boolean(index % 2)} 
                        username={user.username} 
                        position={(index + 1).toString()} 
                        wpm={user.bestGame.wpm.toString()} 
                        acc={`${user.bestGame.accuracy}%`} 
                        mode={user.bestGame.mode}
                        date={getFormattedDate(user.bestGame.date)}/>)}
            </div>
        </div>
    )
}