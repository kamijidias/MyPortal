import { Api } from "../../Services/api";
import { IUser } from "./types";

export const setUserLocalStorage = (user: IUser | null) => {
    localStorage.setItem('u', JSON.stringify(user));
}

export const getUserLocalStorage = () => {
    const json = localStorage.getItem('u')

    if (!json) {
        return null;
    }

    const user = JSON.parse(json)

    return user ?? null;
}

export const LoginRequest = async (email: string, password: string) => {
    try {
        const request = await Api.post("login", {email, password})

        return request.data;
    }catch (error) {
        return null;
    }
}