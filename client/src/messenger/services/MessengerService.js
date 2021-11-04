import api from "../axios";

export class MessengerService {
    static zip(response) {
        if (response.status !== 200  && response.status !== 201) {
            throw new Error(response.message || 'Что-то пошло не так')
        }
        return response;
    }

    static async getAllListProfile() {
        try {
            const data_answer = await api.get(`/api/messenger/profiles`);
            return await this.zip(data_answer);
        } catch (err) {
            throw new Error(err.message || 'Что-то пошло не так')
        }
    }

    static async getChats(token) {
        try {
            const data_answer = await api.get(`/api/messenger/chats`, {headers: {"Authorization" : token}});
            return await this.zip(data_answer);
        } catch (err) {
            throw new Error(err.message || 'Что-то пошло не так')
        }
    }

    static async getMessages(chat_id, token) {
        try {
            const data_answer = await api.get(`/api/messenger/chat/${chat_id}`, {headers: {"Authorization" : token}});
            return await this.zip(data_answer);
        } catch (err) {
            throw new Error(err.message || 'Что-то пошло не так')
        }
    }

    static async postNewChat(data, token) {
        try {
            const data_answer = await api.post(`/api/messenger/new_chat`, data, {headers: {"Authorization" : token}});
            return await this.zip(data_answer);
        } catch (err) {
            throw new Error(err.message || 'Что-то пошло не так')
        }
    }

    static async postNewMessage(data, token) {
        try {
            const data_answer = await api.post(`/api/messenger/new_message`, data, {headers: {"Authorization" : token}});
            return await this.zip(data_answer);
        } catch (err) {
            throw new Error(err.message || 'Что-то пошло не так')
        }
    }
}
