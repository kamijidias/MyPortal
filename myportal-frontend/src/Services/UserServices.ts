import axios, {AxiosInstance} from 'axios';

export default class UserServices {
    axios: AxiosInstance;
    constructor() {
        this.axios = axios.create({
            baseURL: process.env.REACT_APP_API_LOGIN + '/api'
        })
    }

    async Login(userData: any): Promise<boolean> {
        const {data} = await this.axios.post('/login', userData)

        if (data) {
            localStorage.setItem("name", data.user.name)
            localStorage.setItem("email", data.user.email)
            localStorage.setItem("token", data.user.token)

            return true
        }

        return false;
    }

    userAuth(): boolean {
        return localStorage.getItem("token") !== null ? true : false
    }
}