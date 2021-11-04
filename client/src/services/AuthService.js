import api from "../axios";

export class AuthService {
    static zip(response) {
        if (response.status !== 200  && response.status !== 201) {
            throw new Error(response.message || 'Что-то пошло не так')
        }
        return response;
    }

    static async postLogin(data) {
        try {
            const data_answer = await api.post(`/api/auth/login`, data);
            return await this.zip(data_answer);
        } catch (err) {
            throw new Error(err.message || 'Что-то пошло не так')
        }
    }

    static async postRegister(data) {
        try {
            const data_answer = await api.post(`/api/auth/register`, data);
            return await this.zip(data_answer);
        } catch (err) {
            throw new Error(err.message || 'Что-то пошло не так')
        }
    }
}
