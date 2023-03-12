import { UserRatingInfo } from "../components/RatingPage/types"


export const getRating = async () => {
    const response: UserRatingInfo[] = await fetch(`https://rs-clone-backend-production.up.railway.app/get_rating`).then(res => res.json())
    return response
}