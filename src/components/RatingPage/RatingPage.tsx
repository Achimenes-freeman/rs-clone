import { useEffect, useState } from 'react';
import styles from './styles.module.scss';
import { UserRatingInfo } from './types';
import { getRating } from '../../helpers/getRating';
import { Loader } from '../Loader/Loader';
import { RatingLeaderboard } from '../RatingLeaderboard/RatingLeaderboard';

export function RatingPage() {

    const [ratingInfo, setRatingInfo] = useState<UserRatingInfo[]>();
    const [isLoadingCompleted, setIsLoadingCompleted] = useState(false);



    useEffect(() => {
        const getRatingFunc = async () => {
            const info: UserRatingInfo[] = await getRating()

            setRatingInfo(info)
            setIsLoadingCompleted(true)
        }
        if(!isLoadingCompleted) {
            getRatingFunc()
        }
    }, [isLoadingCompleted]);

    return (
        <section className={styles.RatingPage}>
            {isLoadingCompleted
            ? <>
                <h2 className={styles.heading}>Leaderboard</h2>
                {ratingInfo && <RatingLeaderboard users={ratingInfo}/>}
            </>
            : <Loader />
            }
        </section>
    )
}