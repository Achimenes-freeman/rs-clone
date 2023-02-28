import { ISetGameResultData } from "../components/Result/types"

export const setGameResultData = async (data: ISetGameResultData) => {
    const response = await fetch('https://rs-clone-backend-production.up.railway.app/set_game', {
        method: 'PATCH',
        headers: {
            'Content-type': 'application/json',
            Authorization: `Bearer ${localStorage.getItem('authToken')}`
        },
        body: JSON.stringify(data)
    })

    console.log(await response.json())
    return response.ok
}