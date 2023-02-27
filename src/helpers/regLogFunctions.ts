import { UserTokenObj } from "../components/AccountPage/types"

interface RegErrorObg {
    message: string
}

export const tryLogin = async (nameState: string, passState: string) => {
    const token: UserTokenObj = await fetch(`https://rs-clone-backend-production.up.railway.app/login`, {
        method: 'POST', 
        headers: {
            "Content-type":  "application/json"
        },
        body: JSON.stringify({
            username: nameState,
            password: passState
        })
    }).then(res => {
        if(res.status === 400) {
            throw new Error('400')
        } 
        return res.json()
    })
    localStorage.setItem('authToken', token.token)
}

export const tryRegister = async (nameState: string, passState: string) => {
    const response = await fetch(`https://rs-clone-backend-production.up.railway.app/registration`, {
        method: 'POST',
        headers: {
            "Content-type":  "application/json"
        },
        body: JSON.stringify({
            username: nameState,
            password: passState,
        })
    })
    if(response.status === 200) {
        return {
            username: nameState,
            password: passState,
        }
    } 
    const errorObj: RegErrorObg = await response.json()
    throw new Error(errorObj.message)
}