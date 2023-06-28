import axios from 'axios';

const api = axios.create({
    baseURL: process.env.REACT_APP_API
});

export const useApi = () => ({
    validatedToken: async (token: string) => {
        const response = await api.post('/validate', {token});
        return response.data;
    },

    login: async (email: string, password: string) => {
        return {
            user: {
                id: 2,
                name: 'Andrew',
                email: 'kamiji@mail.com'
            },
            token: '123456'
        };
        // const response = await api.post('/home', { email, password });
        // return response.data;
    },

    logout: async () => {
        const response = await api.post('/');
        return response.data;
    }
})